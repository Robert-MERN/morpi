import Campaigns from '../../models/campaignModel';
import connectMongo from '../../utils/functions/connectMongo';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function updateCampaign(req, res) {
    console.log("Connecting with DB")
    try {

        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        // Updating campaign
        const campaign = await Campaigns.findByIdAndUpdate(req.query.id, req.body);
        res.status(200).json({ success: true, message: "Campaign has been updated" });
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}