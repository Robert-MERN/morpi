import Users from '../../models/userModel';
import connectMongo from '../../utils/functions/connectMongo';
import { deleteCookie, setCookie } from 'cookies-next';
import jwt from "jsonwebtoken";
import cryptojs from "crypto-js";
import plainPayLoadMaker from '../../utils/functions/plainPayloadMaker';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function registerUser(req, res) {
    console.log("Connecting with DB")
    try {

        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        // collecting information from request body
        const { password, ...other } = req.body;

        // encrypting password
        const encrypted = cryptojs.AES.encrypt(password, process.env.CJS_KEY).toString();

        // saving user in DB
        const user = new Users({
            ...other,
            password: encrypted,
        });
        await user.save();

        // creating plain payload to convert user obj into token
        const plainPayLoad = plainPayLoadMaker(user);

        // converting user object in token 
        const token = await jwt.sign(plainPayLoad, process.env.JWT_KEY);

        // cookie expires in 30 days
        const expiryDate = new Date(new Date().setDate(new Date().getDate() + 30));

        // now setting that token in cookies
        setCookie("userAccountToken", token, { req, res, expires: expiryDate });

        // sending success response to user
        res.status(200).json({ success: true, message: "User has been signed up!" });

    } catch (err) {

        // if server catches any error
        deleteCookie("signupUser")
        res.status(500).json({ success: false, message: err.message });
    }

}