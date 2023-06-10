import Contacts from '../../models/contactsModel';
import mongoose from "mongoose"
import connectMongo from '../../utils/functions/connectMongo';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function handler(req, res) {
    console.log("Connecting with DB")
    try {
        const { userId, contactId } = req.query;
        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        // Getting one contact
        const contact = await Contacts.findOne({ userId, _id: mongoose.Types.ObjectId(contactId) });
        res.status(200).json(contact);
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}