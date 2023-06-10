import Contacts from '../../models/contactsModel';
import connectMongo from '../../utils/functions/connectMongo';

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

        // Getting all contacts
        const contacts = await Contacts.find({ userId: req.query.userId }).sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}