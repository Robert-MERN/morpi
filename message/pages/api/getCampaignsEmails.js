import Campaigns from '../../models/campaignModel';
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

        // Getting all campaigns emails
        const campaigns = await Campaigns.find({ userId: req.query.userId }).sort({ createdAt: -1 });
        let customCampaigns = [];
        // if (campaigns.length) { emails = campaigns.map(e => e.contacts.map(e => e)) };
        if (campaigns.length) {
            customCampaigns = campaigns.map((campaign) => ({ title: campaign.title, contacts: campaign.contacts, }));
        };
        res.status(200).json(customCampaigns);
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}