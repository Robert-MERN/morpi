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

        // Deleting contact
        await Contacts.findByIdAndDelete(req.query.id);
        res.status(200).json({ success: true, message: "Contact has been deleted" });
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }
}
