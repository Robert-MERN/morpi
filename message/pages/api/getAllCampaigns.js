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
        const { keywords, userId, limit } = req.query;
        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        if (keywords !== "undefined" && keywords.length) {
            const campaigns = await Campaigns.find({ userId: userId, title: { $regex: `(?i)${keywords}` } });
            return res.status(200).json(campaigns);
        }

        // Getting all campaigns
        const campaigns_count = await Campaigns.find({ userId: userId }).count();
        const campaigns = await Campaigns.find({ userId: userId }).sort({ createdAt: -1 }).limit(Number(limit));
        res.status(200).json({ data: campaigns, count: campaigns_count });
    } catch (err) {

        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}