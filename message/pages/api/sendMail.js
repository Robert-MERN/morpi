import nodemailer from "nodemailer";
import emailExistence from 'email-existence';

const handler = async (req, res) => {
    const {
        senderEmail,
        senderName,
        subject,
        message,
        recepientEmails,
        recepientCampaigns
    } = req.body
    try {
        let email_verification_message = ""
        let recepients = [];
        if (recepientEmails.length || recepientCampaigns.length) {
            if (recepientCampaigns.length && recepientEmails.length) {
                const recepientCampaignsCustom = [...new Set(recepientCampaigns.reduce((first, second) => first.concat(second), []))]
                recepients = recepientEmails.concat(recepientCampaignsCustom);
                // verifying if the emails are existing
                await Promise.all(recepients.map((email) => {
                    emailExistence.check(email, (err, res) => {
                        if (err) {
                            return res.status(500).json({ success: false, message: err.message })
                        } else {
                            email_verification_message = res ? "" : `${email} isn't verified Email!`
                        }
                    });
                })
                );
            } else {
                const recepientCampaignsCustom = [...new Set(recepientCampaigns.reduce((first, second) => first.concat(second), []))]
                recepients = recepientEmails.length ? recepientEmails : recepientCampaignsCustom;
                // verifying if the emails are existing
                await Promise.all(recepients.map((email) => {
                    emailExistence.check(email, (err, res) => {
                        if (err) {
                            return res.status(500).json({ success: false, message: err.message })
                        } else {
                            email_verification_message = res ? "" : `${email} isn't verified Email!`
                        }
                    });
                })
                );
            }
        } else {
            return res.status(501).json({ success: false, message: "Recepients aren't provided" });
        }
        let transport = nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: { rejectUnauthorized: false }
        });

        // removing duplicate recepients
        recepients = [...new Set(recepients)];

        if (!email_verification_message) {
            for (let i = 0; i < recepients.length; i++) {
                const mailOptions = {
                    from: `Morpi <info@turpio.com>`,
                    to: recepients[i],
                    subject: subject,
                    html: `
                            <p>Hi <span style="color: blue;" >${recepients[i]},</span></p>
                            <p>Sender Name: ${senderName}</P>
                            <p>Sender Email: ${senderEmail}</P>
                            <p>${message}</P>
                            <p>Thanks, <br/>The Morpi account team</P>
                        `
                };
                await transport.sendMail(mailOptions);
            }
            return res.status(200).json({ success: true, message: "Mail has been sent to recepient(s)" });
        } else {
            return res.status(501).json({ success: false, message: email_verification_message });
        }

        return res.status(200).json({ success: true, message: "Mail has been sent to recepient(s)", recepients });

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message })
    }
}

export default handler
