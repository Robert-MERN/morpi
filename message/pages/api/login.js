import Users from '../../models/userModel';
import connectMongo from '../../utils/functions/connectMongo';
import { setCookie } from 'cookies-next';
import jwt from "jsonwebtoken";
import cryptojs from "crypto-js";
import plainPayLoadMaker from '../../utils/functions/plainPayloadMaker';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function handler(req, res) {
    console.log("Connecting with DB")
    try {

        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        // finding user
        const user = await Users.findOne({ email: req.body.email });

        if (user) {

            // decrypting passowrd
            const bytes = cryptojs.AES.decrypt(user.password, process.env.CJS_KEY);
            const decrypted = bytes.toString(cryptojs.enc.Utf8);
            // verifying password
            if (decrypted === req.body.password) {
                // creating plain payload to convert user obj into token
                const plainPayLoad = plainPayLoadMaker(user);
                // converting user object in token 
                const token = await jwt.sign(plainPayLoad, process.env.JWT_KEY);


                // cookie expires in 30 days
                const expiryDate = new Date(new Date().setDate(new Date().getDate() + 30));

                // now setting that token in cookies
                setCookie("userAccountToken", token, { req, res, expires: expiryDate });

                // sending success response to client
                res.status(200).json({ success: true, message: "User has been logged in!" });
            } else {
                // if the password was wrong
                res.status(401).json({ success: false, message: "You entered a wrong Email or Password!" });
            }

        } else {

            // if user wasn't found
            res.status(401).json({ success: false, message: "You entered a wrong Email or Password!" });
        }
    } catch (err) {
        
        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}