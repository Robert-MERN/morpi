import Contacts from '../../models/contactsModel';
import connectMongo from '../../utils/functions/connectMongo';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function updateContact(req, res) {
    console.log("Connecting with DB")
    try {

        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        // Updating contact
        const contact = await Contacts.findByIdAndUpdate(req.query.id, req.body);
        res.status(200).json({ success: true, message: "Contact has been updated" });
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}