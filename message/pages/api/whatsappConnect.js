import wpp, { create, sendMessage } from '@wppconnect-team/wppconnect';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */



export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {

            // Connect to WhatsApp
            await create({
                session: 'morpi-whatsapp',
                catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
                    // Return the base64 string of the QR code image
                    res.status(200).json({ qrCodeData: base64Qrimg, urlCode: urlCode });
                },
                autoClose: false,
            });


            // Fetch the QR code data
            // const qrCodeData = await getQrCodeData();
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    } else if (req.method === 'POST') {
        try {
            const { phone, message } = req.body;

            // Send the message to the specified phone number
            await sendMessage({
                phone: phone,
                message: message,
            });

            res.status(200).json({ success: true, message: 'Message sent successfully' });
        } catch (err) {

            res.status(500).json({ success: false, message: 'Failed to send message' });
        }
    }
}