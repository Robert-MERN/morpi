import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'


const termsConditions = () => {
    return (
        <div>
            <div className='w-screen min-h-screen flex justify-center relative' >
                <Navbar />
                <Head>
                    <title>Terms & Conditions - Turpio</title>
                    <meta name="description" content="Terms and Conditions - Turpio" />
                    <link rel="icon" href="/images/favicon.png" />
                </Head>
                <div className='w-[1200px] mt-40 mb-12' >
                    <h1 className='text-[28px] md:text-[36px] font-bold text-center text-zinc-800 mb-[50px] md:mb-[40px]' >Terms and Conditions</h1>
                    <h1 className='text-[20px] font-bold text-zinc-900 mb-4' >Welcome to Turpio!</h1>

                    {/* Article 1 */}
                    <h2 className='font-semibold text-zinc-800 mb-3' >
                        These are the terms and conditions for:
                        <a target="__blank" className='text-blue-600' href="https://turpio.com" > https://turpio.com</a>
                    </h2>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        By using the platform, you agree to be bound by these terms and conditions and our privacy policy. In these terms and conditions, the words "platform" refer to the website and the Turpio platform as a whole, "we", "our" and "Turpio" refer to Turpio and "you" and "user" refer to you , the Turpium user
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        The following terms and conditions apply to your use of the Platform. This includes mobile and tablet versions, as well as any other version of Turpio accessible via desktop, mobile, tablet, social media, or other devices.
                    </p>
                    <h2 className='font-semibold text-zinc-800 my-4' >
                        PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING, POSTING INFORMATION ON, OR OBTAINING ANY SERVICE FROM THE PLATFORM.
                    </h2>

                    {/* Article 1 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 1. | ACCEPTANCE OF THE TERMS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            This agreement sets forth the legally binding terms for your use of Turpio. By registering and using the Platform, you agree to be bound by this Agreement. If you do not accept the terms of this Agreement, you must not use the Platform and stop using the Service immediately. We may modify this Agreement from time to time, and such modification will be effective when it is posted on the Platform. You agree to be bound by any modification to these terms and conditions when you use Turpio after such modification is posted; therefore, it is important that you review this agreement regularly
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            The use of the platform and services is available for all ages. It is the responsibility of the parents or legal guardians to determine if the use of the platform, the contents and the services are suitable for their minor children or minors in custody. Please refer to our privacy policy.
                            If you are using the Services on behalf of your business or other entity, you represent and warrant that you have full legal authority to bind your organization to these Terms. Accordingly, all references in these terms to "you" or "user" shall be deemed to include your organization, unless the context otherwise requires. If you do not have such authority, you may not use the Service on behalf of your organization and must stop using it immediately.

                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            You represent and warrant that all registration information you submit is accurate and true; and that your use of the Platform does not violate any applicable law or regulation. Turpio may, at its sole discretion, refuse to offer the services to any user and change its eligibility criteria at any time. This provision is void where prohibited by law and the right to access the Service and Platform is revoked in such jurisdictions.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            The Platform may only be used in accordance with these Terms and all applicable local, state, national and international laws, rules and regulations.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            By registering and using the Platform, you represent and warrant that you have the full right, power and authority to enter into this Agreement and to fully perform all of your obligations under it. Furthermore, you represent and warrant that you are not under any legal incapacity or contractual restriction that prevents you from entering into this agreement.
                        </li>

                    </ol>

                    {/* Article 2 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 2. | REGISTRATION</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users can register individually or on behalf of an organization or company. By registering and using the platform as a user, you represent and warrant that you accept the conditions contained in these terms and conditions and agree to (a) provide true, accurate, current and complete information about yourself or your organization, as requested in the registration form available atUgly and (b) maintain and promptly update your registration data to keep it true, accurate, current and complete (c) own the authorization, rights or commercial licenses of the services published in Turpio in the event that you register on behalf of a organization.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            If we have reasonable grounds to suspect that said data is false, inaccurate, not updated or incomplete, Turpio reserves the right to deny user registration, suspend or cancel your account, remove your booking page from the platform and reject any current or future use of the Service (or any part thereof) at any time without notice
                        </li>


                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            By using the platform, you declare and guarantee that the services offered on the platform through the reservation page comply with all applicable laws and regulations.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users can share personal and business information through the platform with other users. Any information that users share through the platform is the sole responsibility of the users themselves. Users are free to share information, but are responsible for the use of said information, its publication and disclosure. Turpio is not responsible for the information published and shared through the platform. The information you provide and post through the platform will be visible to the general public.
                        </li>


                    </ol>


                    {/* Article 3 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 3. | ACCOUNT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            If you register with Turpio, you will be asked to choose a password, and you may be asked for additional information about your account such as your email address and phone number. Users will be able to register through their Google accounts or they will be able to create a Google account through the platform. You are responsible for maintaining the confidentiality of your password and account information, and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify Turpio of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you log out of your account at the end of each session. You can never use the account of another user without the prior authorization of Turpio. Turpio shall not be liable for any loss or damage arising from your breach of this agreement.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            By providing Turpio with your email address, you consent to our use of your email address to send you marketing emails about Turpio. We may also use your email address to send you notifications and other messages, such as changes to service features, news, and special content. If you do not wish to receive these emails, you may opt out of receiving them by sending us your request through the contact information or by using the "unsubscribe" option in the emails. Opting out may prevent you from receiving emails about updates, news or special content.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users can cancel their accounts at any time and for any reason through the user account settings or by sending us your request through our contact information. Said cancellation will only mean the deletion of the account and the deletion of all personal data transferred to Turpio.
                            Turpio reserves the right to terminate your account or access immediately, with or without notice, and without liability to you, if Turpio believes that you have breached any of these terms, provided Turpio with false or misleading information, or has interfered in the use of the platform or the service by third parties

                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            If Uglydetects suspicious situations such as fraud attempts or various frauds in the user's account, Turpio reserves the right to freeze the account and the account balance until the corresponding investigation is completed. Keep in mind that Turpio will report any criminal or unlawful situation that is carried out through user accounts. Turpio will freeze the user's account and provide the user's information, if any competent authority so requires. In cases where a competent authority requires the freezing of the account, the user will not be able to take any action until the competent authority decides.
                        </li>
                    </ol>


                    {/* Article 4 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 4. | RESERVATION PAGE</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users will be able to create booking pages where they can offer their services through meeting bookings. Any registered user will be able to create a booking page for free by providing their email address, username and password and verify email address.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users will be able to create booking pages individually or they will be able to create booking pages for their organization or company and manage the time availability of each employee on the same booking page.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            The owner of the reservation page will be able to customize the availability of the meetings, the duration and prices of each meeting. The user will be able to determine the price of each meeting according to the duration of each duration and will be free to change the price at any time.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            When creating a reservation page, the user will obtain a link with the subdomain and name of the page and a QR code which will be directed to the respective reservation page. The user may share this link or the QR code in order to promote the services and facilitate the reservations of the services by their clients.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            The owner of the reservation page will be able to add a list of questions that users will have to answer before confirming the reservation.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            The owner of the reservation page will be able to add the means by which the reservations of the meetings will be made. Users may include means such as Zoom, Google Meet or a physical location where the service will be provided according to the scheduled time.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users will be able to connect their booking pages to different third-party calendar services such as Google Calendar and Apple Calendar.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Meeting owners will be able to create and send meeting reminders to both the booking page owner and the booking user. Once the services have been provided and the reservation fulfilled, the owner of the reservation page may send reminders to make a new reservation or recurring reservations of the services according to the amount selected for each service.
                        </li>
                    </ol>



                    {/* Article 5 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 5. | COMMISSIONS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users who make a reservation of services through the reservation pages available on the platform must pay a commission of $0.50 to Turpio for each reservation made by users through the reservation page. Each time a service is scheduled through any reservation page available on the platform, the value of the commission will be deducted from the total payment made by the user at the time of reservation. The remaining value will be sent and credited to the respective owner user of the reservation page. Turpio reserves the right to modify the value of the commission at any time and without prior notice. However, Turpio will communicate to the users through any available means the value of the new commission.
                        </li>
                    </ol>


                    {/* Article 6 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 6. | RESERVATIONS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Users will be able to make reservations for services on the reservation pages of the owner users. Any registered user will be able to make a reservation, even owner users who have an active reservation page on the platform.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Please select the availability of the reservations in the respective calendar and select the amount of time you wish to reserve. Select the mode of the meeting (Zoom, Google Meet or face-to-face) and check the price of the reservation.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            When a user makes a reservation, Turpio will send an email whose purpose is to confirm the reservation. This confirmation email will be produced automatically so that the user has confirmation of their reservation and the purchase invoice with the details of the transaction.
                            Users will be able to enter the "My appointments" section within the platform and review the information on active reservations. If the user wishes to cancel or reschedule a reservation please contact the owner of the reservation page to reschedule the service, but keep in mind that reservations are non-refundable.

                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            Turpio may cancel any reservation and may change or discontinue the availability of reservations at any time at its sole discretion. If a reservation is canceled, any payment made will be fully refunded. This does not affect your statutory rights.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            All new bookings are considered separately and each is treated on an individual basis.
                        </li>

                    </ol>


                    {/* Article 7 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 7. | PAID</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The reservations of the services in the different reservation pages will be paid through the following payment methods:
                        </li>
                        <ol className='list-inside list-disc'>
                            <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                Credit/Debit Card (Visa, Master, Discover, Amex, Diners, etc.)
                            </li>
                            <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                Stripe
                            </li>
                            <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                PayPal
                            </li>
                            <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                Yappy Payment Button
                            </li>
                            <li className='text-[16px] text-zinc-600 font-medium py-1' >
                                PagueloFacil
                            </li>
                        </ol>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            The user must pay the price of the reservation according to the time of service selected by the user. Payment will be charged to the credit/debit card, PayPal account or through the payment method selected by the buyer immediately after completing the reservation process. An electronic receipt or invoice will be issued and sent to the buyer's email immediately after completing the reservation process.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            If you find any inconsistencies in your billing, please contact us using our contact details or you can file a claim through the relevant payment processor's customer service.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            If your card is declined, you will receive an error message. No payment will be charged to your card and no order is processed. There may be a pending transaction on your account until your card-issuing bank withdrawal authorization. This usually takes 2-5 business days. Your card may be declined for a number of reasons, including insufficient funds, AVS (Address Verification System) mismatch, or entering the wrong security code.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium py-2' >
                            If your payment is declined, you will need to provide an alternative payment method or provide another card to which the payment can be loaded and processed.
                        </li>

                    </ol>

                    {/* Article 8 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 8. | DISCLAIMER OF LIABILITY</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The contents and services published by users are not offered or provided by Turpio. Turpio's services are limited to providing the platform to facilitate the creation and publication of reservation pages where users can make reservations for the services of the users who own the reservation page. Turpio is not at any time responsible for the reservations and services offered by users on the platform.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio is not responsible for the accuracy, security or legality of the services or content published by users on Turpio. Turpio does not make any representations about the services, reservations or content published by users through the platform.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio is not responsible for the quality of the services that users offer and publish through the reservation pages. Reservations for services through the reservation pages are at your own risk and responsibility. Please review the characteristics and policies of the services before making a reservation on the respective reservation page.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Conflicts that arise between users will be resolved by the users themselves. Turpio does not accept any claim in relation to the services or content published on the platform by users through their reservation pages.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio will not be responsible for damages to the physical or moral integrity of people, such as injuries, death or any other moral damage such as threats, insults and slander that may fall on a natural person, as a result of the communications established on the platform.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The communications and relationships established between users as a result of any connection within the platform are the sole and exclusive responsibility of the users.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            In the event that one or more users or any third party initiate any type of claim or legal action against another or other users, each and every one of the users involved in said claims or actions exempt Turpio from any responsibility.
                        </li>
                    </ol>



                    {/* Article 9 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 9. | THIRD PARTY MATERIALS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            "Third Party Materials" means any content, images, videos, text, or other material that is owned by a third party, such as stock images, videos, and text. Such Third Party Materials are subject to the applicable third party terms and licenses, and may only be used as permitted by such terms and licenses.
                        </li>
                    </ol>


                    {/* Article 10 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 10. | ADVERTISING</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Through the platform, Turpio may make commercial and advertising information, its own or that of third parties, available to users in accordance with good commercial practices. In these cases, Turpio does not endorse, guarantee or undertake its responsibility for the services and/or products marketed by these third parties, since the platform serves as a communication and advertising channel, but not as a tool for the provision of services. Consequently, it is the full responsibility of the users to access the sites that send advertising, assuming the obligation to verify and know the conditions of the services offered by third parties.
                        </li>
                    </ol>


                    {/* Article 11 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 11. | LICENSE TO USE THE PLATFORM</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio grants you a personal, worldwide, royalty-free, non-assignable, and non-exclusive license to use the platform provided to you by Turpio as part of the Services. This license is for the sole purpose of allowing you to use and enjoy the benefits of the services provided by Turpio, in the manner permitted by these terms. You may not copy, modify, distribute, sell or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless such restrictions are prohibited by law or you have our permission. written.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The user agrees not to use the platform and services negligently, for fraudulent or illegal purposes. Likewise, the user undertakes not to carry out any conduct or action that could damage the image, interests or rights of the Turpio platform or third parties.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            This service prohibits the sending of messages that:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any type of message that is classified as SPAM.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Are harassing, abusive, defamatory, obscene, in bad faith, unethical, or illegal in content
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Distribute Trojan horses, viruses, or other malicious computer software
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any message with political or religious content
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any message with obscene or offensive content
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Intent to commit fraud, impersonation, phishing, scams, or related crimes
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    distribute intellectual property without ownership or a license to distribute such property
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    violate, otherwise any way, the terms of service, privacy policy or rules of this website or recipients.
                                    Turpio reserves the right to terminate your access immediately, with or without notice, and without liability to you, if Turpio believes that you have violated any of these terms or interfere with the use of the platform or service by others.
                                </li>
                            </ol>
                        </li>


                    </ol>

                    {/* Article 12 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 12. | COPYRIGHT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            All materials on Turpio, including, without limitation, the names, logos, trademarks, images, text, columns, graphics, video, photographs, illustrations, software and other elements are protected by copyright, trademark and/or other intellectual property rights that are owned and controlled by Turpio or by third parties that have licensed or provided their material to the website. You acknowledge and agree that all materials on Turpio are made available for limited, non-commercial, personal use. Except as specifically provided herein. No material may be copied, reproduced, republished, sold, downloaded, posted, transmitted, or distributed in any way, or otherwise used for any purpose, by any person or entity, without the express written permission of Turpio. You may not add, delete, distort or modify the material. Any unauthorized attempt to modify any material, to defeat or circumvent any security features, or to use Turpio or any part of the material for any purpose other than its intended purpose is strictly prohibited.
                        </li>
                    </ol>

                    {/* Article 13 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 13. | COPYRIGHT INFRINGEMENT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio will respond to all inquiries, complaints and claims related to the alleged infringement due to non-compliance or violation of the provisions contained in international Copyright Laws.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio respects the intellectual property of others, and expects users to do the same. If you believe, in good faith, that any material provided on or in connection with the Turpio Platform infringes your copyright or other intellectual property right, please send us your copyright infringement request through our contact information. , with the following information:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Identification of the allegedly infringed intellectual property right. Any relevant registration numbers or a statement of ownership of the work must be included.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    A statement specifically identifying the location of the infringing material, in sufficient detail so that Turpio can find it on the platform.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Your name, address, telephone number and email address.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    A statement by you that you have a good faith belief that use of the allegedly infringing material is not authorized by the copyright owner, or its agents, or by law.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    A statement by you, made under penalty of perjury, that the information in your notification is accurate, and that you are the copyright owner or authorized to act on its behalf.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    An electronic or physical signature of the copyright owner or person authorized to act on their behalf.
                                </li>
                            </ol>
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Upon receipt of a copyright infringement request, Turpio will contact the allegedly infringing user so that the user can respond to the copyright infringement request.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Responses to copyright infringement requests must contain the following
                            The physical or electronic signature of the user.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The identification of the content that has been removed or the place where the content was posted.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            A statement, under oath, that you have a good faith belief that the content or material was removed due to error.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The user's name, address, and phone number.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            A statement that the user accepts the jurisdiction of the court in which he is located.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            In the event that the allegedly infringing user fails to respond to the copyright infringement request and the alleged copyright owner is able to satisfactorily demonstrate ownership of such copyright in the content and requests removal of such content from the platform, Turpio will remove the content from the platform immediately.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            All copyright infringement requests and responses can be submitted through our contact information.
                        </li>
                    </ol>

                    {/* Article 14 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 14. | USER CONTENT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Some features of the Platform may allow users to provide content and information. The user retains copyright or any rights they may have in the content they provide through the platform. Turpio is not responsible for the accuracy, security or legality of the content published on the platform by users. The user is solely and exclusively responsible for its content and the consequences of its publication. By providing content and information through the platform, the user grants Turpio a worldwide, non-exclusive, royalty-free, fully paid right and license to host, store, transfer, display, perform, reproduce and modify the user content with the sole purpose of showing it through the platform and to the general public.
                        </li>
                    </ol>

                    {/* Article 15 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 15. | REPRESENTATIONS AND WARRANTIES OF USER CONTENT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio disclaims all responsibility in relation to user content. The user is solely responsible for the content and the consequences of providing content through the service. By providing User Content through the Service, you affirm, represent, and warrant that
                            You are the creator and owner of the content that you provide through the platform, or you have the necessary licenses, rights, consents and permissions to authorize Turpio to publish and display your content through the platform.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Your User Content, and the use of your User Content as contemplated in these Terms, does not and will not:
                            <ol className='list-inside list-decimal'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    infringe, violate, or misappropriate any right of any third party, including any copyright, trademark trademark, patent, trade secret, moral right, privacy right, publicity right, or any other intellectual property or proprietary right;
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    slander, libel, slander, or invade the right of privacy, publicity, or other proprietary rights of any other person; or
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    cause Turpio to violate any law or regulation.
                                </li>
                            </ol>
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Your User Content could not be considered by a reasonable person to be objectionable, profane, indecent, pornographic, harassing, threatening, embarrassing, hateful, or otherwise inappropriate.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Your User Content does not and will not contain hateful content, threats of physical harm, or harassment.
                        </li>
                    </ol>

                    {/* Article 16 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 16. | MONITORING USER CONTENT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio may, at any time and without notice, filter, remove, edit, or block any User Content that, in our judgment, violates these Terms or is otherwise objectionable. If a user or content owner notifies us that user content allegedly does not conform to these Terms, we may investigate the allegation and determine in our sole discretion whether to remove the user content, which we reserve the right to do at any time and without prior notice. You acknowledge and agree that Turpio reserves the right to, and may from time to time, monitor any and all information transmitted or received through the Service for operational and other purposes. If at any time Turpio decides to monitor the content, Turbio continues to assume no responsibility for the content or any loss or damage incurred as a result of the use of the content. During monitoring, information may be examined, recorded, copied and used in accordance with our Privacy Policy.
                        </li>
                    </ol>

                    {/* Article 17 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 17. | PERSONAL DATA</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Any personal information you post or submit in connection with the use of the platform will be used in accordance with our privacy policy. Please refer to our privacy policy.
                        </li>
                    </ol>

                    {/* Article 18 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 18. | PROHIBITED ACTIVITIES</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The content and information available on the Platform (including, but not limited to, data, information, text, music, sound, photos, graphics, video, maps, icons, or other material) , as well as the infrastructure used to provide said content and information, is owned by Turpio or licensed to Turpio by third parties. For all content other than your content, you agree not to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or resell any information, software, or services obtained from or through the platform. In addition, the following activities are prohibited
                            Use the services or content for any commercial purpose, outside the scope of those commercial purposes explicitly permitted under this agreement and the related guidelines made available by Turpio.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Access, monitor, reproduce, distribute, transmit, broadcast, display, sell, license, copy, or otherwise exploit any content on the Services, including, but not limited to, the use of any robot, spider, scraper, or other automated means or any manual process for any purpose not in accordance with this agreement or without our express written permission.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Violate the restrictions of any robot exclusion headers on the Services or circumvent or circumvent other measures employed to prevent or limit access to the Services.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Take any action that imposes, or may impose, at our discretion, an unreasonable or disproportionately large load on our infrastructure.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Deep link to any part of the Services for any purpose without our express written permission.
                            "Frame", "mirror" or otherwise incorporate any part of the Services into any other website or service without our prior written permission.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software program used by Turpio in connection with the Services.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Circumvent, disable, or otherwise interfere with security-related features of the Services or features that prevent or restrict the use or copying of any content.
                        </li>
                    </ol>

                    {/* Article 19 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 19. | DISCLAIMER OF WARRANTIES</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio will provide its services with reasonable skill and care, but does not make any warranties or representations with respect to the services of any other person.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Due to the nature of the Internet, Turpio provides and maintains the Platform on an "as is", "as available" basis and does not make any promise that the use of the Platform will be uninterrupted or entirely error free. We are not liable to you if we are unable to provide our Internet services for any reason beyond our control.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Our website may from time to time contain links to other websites that are not under our control or maintained by us. These links are provided for your convenience only and we are not responsible for the content of those websites.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Except as provided above, we cannot make any other warranties, conditions or other terms, express or implied, statutory or otherwise, and all such terms are hereby excluded to the fullest extent permitted by law.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            You will be responsible for any breach of these terms by you and if you use the platform in breach of these terms, you will be responsible for and will reimburse Turbo for any loss or damage caused as a result.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio shall not be liable in any amount for breach of any obligation under this Agreement if such breach is caused by the occurrence of any unforeseen event beyond its reasonable control, including, without limitation, Internet outages, communications outages , fires, floods, wars or acts of God.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            These conditions do not affect your statutory rights as a consumer, which are available to you.
                            Subject to the foregoing, to the maximum extent permitted by law, Turpio excludes liability for any loss or damage of any kind arising, including, without limitation, any direct, indirect or consequential loss, whether or not arising from any problem. that you notify Turpio and Turpio shall have no liability to pay any money by way of compensation, including, without limitation, all liability in connection with:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any incorrect or inaccurate information on the platform.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    The infringement by any person of any intellectual property right of any third party caused by your use of the platform.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any loss or damage resulting from your use of or inability to use the Platform or resulting from unauthorized access to or alteration of your transmissions or data in circumstances beyond our control.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any loss of profit, wasted expense, corruption or destruction of data, or any other loss that does not result directly from something we have done wrong.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Any amount or type of loss or damage due to viruses or other malicious software that may infect a user's computer equipment, software, data or other property, caused by people accessing or using content on the platform or by transmissions through of emails or attachments received from Turpio.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    All representations, warranties, conditions and other terms which, but for this notice, would be in effect.
                                </li>
                            </ol>
                        </li>


                    </ol>

                    {/* Article 20 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 20. | ELECTRONIC COMMUNICATIONS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Turpio will not accept any responsibility for failed, partial or confused computer transmissions, by any computer, telephone, cable, network, electronic or Internet hardware or software malfunction, failure, connection, availability, by the acts or omissions of any user, the accessibility or availability of the Internet or by traffic congestion or unauthorized human act, including any error or mistake.
                        </li>
                    </ol>

                    {/* Article 21 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 21. | THIRD PARTY WEBSITES</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Through your use of the Platform and Services, you may find links to third party sites or be able to interact with third party sites. These third parties may charge a fee for the use of certain content or services provided on or through their websites. Therefore, you should make whatever investigation you deem necessary or appropriate before proceeding with any transaction with any third party to determine whether a charge will be incurred. Where Turpio provides details of fees or charges for such third party content or services, such information is provided for convenience and information purposes only. Any interaction with third party sites and applications is at your own risk. You expressly acknowledge and agree that Turpio is in no way responsible for such third party sites.
                        </li>
                    </ol>


                    {/* Article 22 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 22. | INDEMNITY</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            You agree to defend and indemnify Turbo from and against any and all claims, causes of action, demands, recoveries, losses, damages, fines, penalties, or other costs or expenses of any kind or nature, including but not limited to legal fees and Reasonable accounting statements presented by third parties as a result of:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Your breach of this Agreement or the documents referenced herein.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Your violation of any law or the rights of a third party.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Your use of the platform.
                                </li>
                            </ol>
                        </li>
                    </ol>


                    {/* Article 23 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 23. | CHANGES AND TERMINATION</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            We may modify the platform and these conditions at any time, at our sole discretion and without prior notice. You are responsible for keeping yourself informed about these terms.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Your continued use of the Platform constitutes your acceptance of any changes to these Terms and any changes will supersede all prior versions of the Terms. Unless otherwise specified, all changes to these terms apply to all users when they are effective. In addition, we may terminate our agreement with you under these terms at any time with written notice (including by email) or without notice.
                        </li>
                    </ol>

                    {/* Article 24 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 24. | INTEGRATION CLAUSE</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            This agreement, together with the privacy policy and any other legal notices published by Turpio, will constitute the entire agreement between you and Turpo in relation to and governs the use of the platform.
                        </li>
                    </ol>

                    {/* Article 25 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 25. | DISPUTES</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The user agrees that any dispute, claim or controversy arising out of or in connection with these terms and conditions, or the breach, termination, application, interpretation or validity of the same or the use of the platform, will be resolved by binding arbitration between the user and Turpio, provided that each party retains the right to bring an individual action in a court of competent jurisdiction.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            In the event a dispute arises in connection with the use of the Platform or breach of these terms and conditions, the parties agree to submit their dispute to arbitration before a reputable arbitration organization as mutually agreed upon by the parties. parties and in accordance with the applicable commercial arbitration rules.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            You agree to initiate a formal dispute procedure by sending a communication through our contact information. Turpio may choose to send you a written offer after receiving your initial communication. If we offer and send you a settlement offer and you do not accept the offer, or we are unable to resolve your dispute satisfactorily and you wish to continue with the dispute process, you should initiate the dispute resolution process with a reputable arbitration organization and file a lawsuit. arbitration separately. Any award rendered by the arbitration court shall be final and conclusive for the parties.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            To the extent permitted by law, you agree that you will not file, join, or participate in any class action in connection with any claim, dispute, or controversy that may arise in connection with your use of the Platform and purchase of Posted Products. and offered through the listings available on the platform.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The courts of Panama will have jurisdiction over any dispute, controversy or claim related to Turpio and its business operations. Any dispute or controversy will be presented and resolved in the courts of Panama.
                        </li>
                    </ol>

                    {/* Article 26 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 26. | FINAL PROVISIONS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Although the platform and services are available internationally, these terms and conditions are governed by the laws of Panama and applicable international laws. Use of the Turpio Platform is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and condition
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Our performance of these terms is subject to applicable law and legal process, and nothing in these terms limits our right to comply with law enforcement or other governmental or legal requests or requirements related to the use of our site. website or information provided to or collected by us in connection with such use.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If any part of these conditions is considered invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions will not be affected or impaired in any way. The fact that we do not apply or delay the application of any provision of these Conditions at any time does not imply that we waive our right to apply the same or any provision in the future.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            All rights not expressly granted herein are reserved.
                        </li>
                    </ol>

                    {/* Article 27 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 27. | CONTACT INFORMATION</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If you have any questions or concerns about these conditions, please contact us through our contact page or through the contact information below: Ugly   <a target="__blank" href='mailto:info@turpio.com' className='text-blue-600 hover:underline' > info@turpio.com </a>
                        </li>
                    </ol>












                    {/* PRIVACY POLICY */}

                    <h1 className='text-[20px] font-bold text-zinc-900 mb-4 mt-20' >PRIVACY POLICY</h1>
                    <h2 className='font-semibold text-zinc-800 my-4' >
                        ¡Bienvenido a Turpio!
                    </h2>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        Turpio values your privacy and the protection of your personal data. This privacy policy describes what information we collect from you, how we collect it, how we use it, how we obtain your consent, how long we keep it in our databases, and, if necessary, with whom we share it.
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        By using the Platform, you accept the practices described in this privacy policy. Your use of the Platform is also subject to our terms and conditions. In this privacy policy the words "platform" refer to the Turpio website and platform together, "we", "our" and "Turpio" refer to Turpio and "you" and "user" refer to you, the Turpio user.
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        This privacy policy may change from time to time. Your continued use of the Platform after we make changes is deemed acceptance of those changes, so please check the Policy periodically for updates. This privacy policy has been prepared and is maintained in accordance with all applicable national and international laws and regulations and in particular the California Consumer Privacy Act (CCPA), the General Data Protection Regulation (GDPR) and the Law 81 of Protection of Personal Data of Panama.
                    </p>

                    {/* Article 1 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 1. | GENERAL INFORMATION</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The personal data of users that are collected and processed through:
                            <a target="__blank" className='text-blue-600' href="https://turpio.com" > https://turpio.com</a>
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            They will be under the responsibility and in charge of:
                            Ugly:
                            <a target="__blank" href='mailto:info@turpio.com' className='text-blue-600 hover:underline' > info@turpio.com </a>
                        </li>

                    </ol>

                    {/* Article 2 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 2. | TYPES OF INFORMATION COLLECTED</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The information we collect from our users helps us to deliver our services effectively and to continually personalize and improve the user experience on the platform. These are the types of information we collect:
                            <ol className='list-outside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Information you provide to us. You provide us with information when you register as a user, provide content through the platform, create and publish a reservation page, make a reservation and/or communicate with us through our contact information or contact forms. As a result of those actions, you may provide us with the following information:
                                    <ol className='list-inside list-disc'>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Name and surname
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Username
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Email address
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Phone number
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Direction
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            user content
                                        </li>
                                    </ol>
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                    Any additional information relating to you that you provide to us directly or indirectly through our website or online presence, such as "cookies".
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                    Turpio will not collect any personally identifiable information about you unless you provide it.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                    Information Collected Automatically: By accessing and using the Platform, you automatically provide us with the following information:
                                    <ol className='list-inside list-disc'>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            The device and usage information you use to access the platform
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Your IP address
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Browser and device features
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Operating system
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            referral urls
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Which parts of the website you use and how often
                                        </li>
                                    </ol>
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                    If you access the platform through a mobile phone, we will collect the following information:
                                    <ol className='list-inside list-disc'>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            mobile device ID
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Model and manufacturer
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Operating system
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            Version Information
                                        </li>
                                        <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                            IP address
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Payment information:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Your credit or payment card data will be processed by the processors and payment methods available in Turpio (Credit/Debit Card, Stripe, PayPal, Yappy Payment Button, PagueloFacil), which will process and keep your data with total security and with the sole purpose of processing transactions within the website. Turpio reserves the right to hire and add any processor and payment method available in the market, which will process your data for the sole purpose of processing transactions within the website. Payment information may be stored on our servers for the purpose of facilitating future payments within the platform.
                                </li>
                            </ol>
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Check the privacy policy of PayPal, Stripe, Banco General (Yappy Payment Button) and PagueloFacil here:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    <a target="__blank" className='text-blue-600 hover:underline' href="https://www.paypal.com/myaccount/privacy/privacyhub" >https://www.paypal.com/myaccount/privacy/privacyhub</a>
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    <a target="__blank" className='text-blue-600 hover:underline' href="https://stripe.com/gb/privacy" >https://stripe.com/gb/privacy</a>
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    <a target="__blank" className='text-blue-600 hover:underline' href="https://www.paguelofacil.com/politicas-de-privacidad" >https://www.paguelofacil.com/politicas-de-privacidad</a>
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    <a target="__blank" className='text-blue-600 hover:underline' href="https://www.bgeneral.com/personas/seguridad/" >https://www.bgeneral.com/personas/seguridad/</a>
                                </li>
                            </ol>
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Google Analytics. We use Google Analytics provided by Google, Inc. of the United States ("Google"). These tools and technologies collect and analyze certain types of information, such as IP addresses, device and software identifiers, referring and exit URLs, feature usage statistics and metrics, usage and purchase history, Internet access control address, media (MAC address), unique mobile device identifiers and other similar information through the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use GOOGLE Analytics data collection to improve the website and our service.
                            See Google's privacy policy here:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    <a target="__blank" className='text-blue-600 hover:underline' href="https://policies.google.com/privacy" >https://policies.google.com/privacy</a>
                                </li>
                            </ol>
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Social networks: On our platform you will find links and functions linked to different social networks, in which you can share your information. It is advisable to consult the privacy and data protection policy of each social media used on our platform.
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Facebook:
                                    <a target="__blank" className='text-blue-600 hover:underline' href="https://www.facebook.com/privacy/explanation" >https://www.facebook.com/privacy/explanation</a>
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Instagram:
                                    <a target="__blank" className='text-blue-600 hover:underline' href="http://instagram.com/about/legal/privacy/" >http://instagram.com/about/legal/privacy/</a>
                                </li>
                            </ol>
                        </li>

                    </ol>

                    {/* Article 3 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 3. | HOW LONG WE KEEP YOUR DATA</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            The personal data provided by users through the website will be kept for the time necessary to provide the platform and the functionalities available on the platform or until the user maintains their user account on the platform or decides to close it or until Turpio closes and deletes the user account. Turpio may keep personal data for a longer period when the user has given their consent for such processing, provided that such consent is not withdrawn. In addition, Turpio may be obliged to keep personal data for a longer period if it is necessary to comply with a legal obligation or by order of an authority. Once the retention period expires, the personal data will be deleted. Therefore, the right of access, the right of erasure, the right of rectification and the right to data portability cannot be asserted once the conservation period has expired.
                        </li>

                    </ol>

                    {/* Article 4 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 4. | HOW WE USE YOUR INFORMATION.</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            In general, we use the information we collect primarily to provide, maintain, protect, and improve our platform and services. We use personal information collected through our platform as described below:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Identify you as a user in our system.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    User Registration.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Publish user booking pages.
                                </li>
                                Facilitate the reservation of services.
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Process purchases of service reservations.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Process transactions and collect commission.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Facilitate communication between users.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Understand and improve your experience when using our platform and our services.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Respond to your comments or questions through our support team.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Send you related information, including confirmations, invoices, technical notices, updates, security alerts, and administrative messages.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Communicate with you upcoming events, offers and news about the services offered by Turpio and our selected partners.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    The limits of the marketing of Rude.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Link or combine your information with other information we obtain from third parties to help understand your needs and provide you with better service.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Protect, investigate and deter fraudulent, unauthorized or illegal activities.
                                </li>
                            </ol>
                        </li>
                    </ol>

                    {/* Article 5 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 5. | HOW DO I OBTAIN MY CONSENT?</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            By registering as a user, creating a reservation page, making a reservation, using the functionalities available on the platform in general, communicating with us through the contact forms or our contact information, and providing us with personal information to communicate with you , you accept our use of cookies, consent that we collect, store and use your information in the terms contained in this privacy policy. You can withdraw your consent by sending us your request through the contact information or contact page
                        </li>
                    </ol>

                    {/* Article 6 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 6. | HOW WE SHARE INFORMATION</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            We share user information solely and exclusively as described below.We share user information solely and exclusively as described below.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Third Party Service Providers. We use third party services to perform certain functions on our behalf and through our platform and services. Some examples are payment processing (Credit/Debit Card, PayPal, Stripe, Yappy Payment Button, PagueloFacil), sending emails, data analysis (Google Analytics), creating ads (Facebook, Google) , the provision of marketing assistance and the delivery of search results.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            These third-party services and tools may have access to personal information necessary to perform their functions, but they may not use that information for other purposes. Information shared with these third-party services will be treated and stored in accordance with their respective privacy policies and our privacy policy.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Commercial transfers. In the event that Turpio creates, merges with, or is acquired by another entity, it is very likely that your information will be transferred. Turpio will send you an email or place a prominent notice on our website before your information is made subject to another privacy policy.
                        </li>

                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Protection of Turpio and others. We disclose personal information when we believe it is appropriate to comply with the law, enforce or apply our Terms and Conditions and other agreements, or protect the rights, property, or safety of Turpio, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            anonymous information. Turpio uses anonymous browsing information collected automatically by our servers primarily to help us administer and improve the website. We may also use aggregated anonymous information to provide information about the Website to prospective business partners and other unaffiliated entities. This information is not personally identifiable.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Transfer of information to third parties: By providing your information through the use of the platform, the user authorizes Turpio to transfer and sell your information to third parties for commercial and marketing purposes of said third parties. The user can revoke his consent at any time and his personal information will be deleted and will not be transferred to third parties for commercial purposes.
                        </li>
                    </ol>

                    {/* Article 7 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 7. | PROTECTION OF YOUR INFORMATION</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts the information you provide or share through the Platform. If transactions are processed through the Platform, transaction information is transmitted to and from the Platform or Website in encrypted form using industry standard SSL connections to help protect such information from interception. We restrict authorized access to your personal information to those persons who have a legitimate need to know such information to provide certain functions and to those persons whom you have authorized to have access to such information. Turpio follows generally accepted industry data security standards to protect the personal information you provide and share through the Platform, both during transmission and once Turpio receives it. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, although Turpio strives to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
                        </li>

                    </ol>

                    {/* Article 8 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 8. | RIGHTS</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Users who provide information through our platform, as data subjects and owners, have the right to access, rectify, download or delete their information, as well as to restrict and oppose certain processing of their information. While some of these rights apply generally, others only apply in certain limited circumstances. We describe these rights below:
                            <ol className='list-inside list-disc'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Access and portability: to access and know what information is stored on our servers, you can send us your request through our contact information.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Rectification, restriction, limitation and/or deletion: You can also rectify, restrict, limit or delete much of your information.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Right to be informed: Users of our website will be informed, upon request, about what data we collect, how it is used, how long it is kept and if it is shared with third parties.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Opposition: When we process your data based on our legitimate interests, as explained above, or in the public interest, you can object to this processing in certain circumstances. In such cases, we will stop processing your information unless we have compelling legitimate reasons to continue processing or where necessary for legal reasons.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Revoking consent: Where you have previously given your consent, for example to allow us to process and store your personal information, you have the right to revoke your consent to the processing and storage of your information at any time. For example, you can withdraw your consent by updating your settings. In certain cases, we may continue to process your information after you have withdrawn your consent if we have a legal basis to do so or if your withdrawal of consent was limited to certain processing activities.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Complaint: If you wish to make a complaint about our use of your information (and without prejudice to any other rights you may have), you have the right to do so with the local control authority. Users can exercise all of these rights by contacting us through the contact information or contact page.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    Rights related to automated decision-making, including profiling: Website users may request that we provide them with a copy of our automated processing activities if they believe the data is being processed unlawfully.
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-1' >
                                    The users or holders of the personal data that they provide through the website can exercise these rights over their personal data at any time and without any limitation, by sending us their request through our contact information.
                                </li>

                            </ol>
                        </li>

                    </ol>

                    {/* Article 9 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 9. | PROTECTION OF CHILDREN'S ONLINE PRIVACY</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            We comply with the requirements of the California Consumer Privacy Act (CCPA), the General Data Protection Regulation (GDPR) and Panama's Personal Data Protection Law 81, in relation to the protection of personal data of minors. We do not collect any information from children under the age of 13 without the respective authorization of their parents or legal guardians. If we learn that a child under the age of 13 has provided us with personal information without the permission of their parent or legal guardian, we will take steps to delete that information and terminate that person's account.
                        </li>

                    </ol>

                    {/* Article 10 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 10. | THIRD PARTIES</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Except as expressly provided in this privacy policy, this document addresses only the use and disclosure of information that Turpio collects from you. If you disclose your information to others, whether other Turpio users or vendors, different rules may apply to their use or disclosure of the information you disclose to them. Turpio does not control the privacy policies of third parties, and you are subject to the privacy policies of those third parties when applicable. Turpio is not responsible for the privacy or security practices of other web sites, including those linked from Turpio.
                        </li>
                    </ol>

                    {/* Article 11 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >ARTICLE 11. | CONTACT</h2>
                    <ol className='list-outside list-decimal mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If you have any questions or concerns about this privacy policy and the treatment and security of your data, please contact us through our contact page or using the following contact information:
                            Ugly <a target="__blank" href='mailto:info@turpio.com' className='text-blue-600 hover:underline' > info@turpio.com </a>
                        </li>

                    </ol>














                    {/* COOKIES POLICY */}

                    <h1 className='text-[20px] font-bold text-zinc-900 mb-4 mt-20' >COOKIES POLICY</h1>
                    <h2 className='font-semibold text-zinc-800 my-4' >
                        ¡Bienvenido a Turpio!
                    </h2>

                    <p className='text-[16px] text-zinc-700 mb-3' >
                        This cookie policy explains how and why cookies and other similar technologies may be stored and accessed from your device when you use or visit:
                        <a target="__blank" href='https://turpio.com ' className='text-blue-600 hover:underline' > https://turpio.com  </a>
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        The information collected through cookies will be under the responsibility and in charge of: Ugly (Insert contact information, email, phone, etc.)
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        This cookie policy should be read in conjunction with our privacy policy and our terms and conditions.
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        By using the website, you accept the use of cookies by Turpio, under the terms contained in this policy.
                    </p>
                    {/* Article 1 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >1. WHAT ARE COOKIES?</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you have been to the website before. Cookies are a very common web technology; most websites use cookies and have done so for years. Cookies are widely used to make the website work more efficiently. Cookies are used to measure which parts of the website users visit and to personalize their experience. Cookies also provide information that helps us monitor and improve the performance of the website.
                        </li>

                    </ol>


                    {/* Article 2 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >2. DENY OR WITHDRAW CONSENT FOR THE USE OF COOKIES</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If you do not want cookies to be placed on your device, you can adjust your Internet browser settings to refuse the installation of all or some cookies and to notify you when a cookie is placed on your device. For more information on how to do this, consult the "help", "tool" or "edit" section of your browser. Please note that if you use your browser settings to block all cookies, including strictly necessary ones, you may not be able to access or use all or part of Turpio's functionality.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If you want to delete previously stored cookies, you can manually delete them at any time. However, this will not prevent Turpio from placing further cookies on your device, unless and until you adjust your Internet browser settings as described above.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            We provide you with the links for managing and blocking cookies depending on the browser you use.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Microsoft Edge: https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?ui=en-us&rs=en-us&ad=us
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Firefox: https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Chrome: https://support.google.com/chrome/answer/95647?hl=en
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Safari: https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            In cases where you access the website through an iOS or Android mobile device, please follow the instructions below to delete or block cookies on your device:
                            <ol className='list-inside list-decimal'>
                                <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                    Android: https://support.google.com/answer/32050
                                </li>
                                <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                    iOS: https://support.apple.com/en-us/HT201265
                                </li>
                            </ol>
                        </li>


                    </ol>


                    {/* Article 3 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >3. COOKIES ORIGIN</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            We use cookies to improve the performance of our website and to personalize your Turpio online experience. Cookies help us collect information about how users use our website and which pages they visit. They allow us to monitor the number of visitors and to analyze website usage patterns and trends. We collect this information anonymously, so we do not identify anyone as an individual and no personal information is stored in our cookies. We always use cookie data responsibly.
                        </li>

                    </ol>



                    {/* Article 4 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >4. THIRD PARTY COOKIES</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Third-party cookies may come from partners or third-party companies that provide functional web services or tools for our website and the optimal functioning and operation of our services. We use third-party cookies responsibly and for the sole purpose of providing optimal operation of the platform and services. You can choose to exclude these cookies by following the information on the elimination of cookies contained in this document or the technical information of the browser from which you access our website and services.
                        </li>

                    </ol>


                    {/* Article 5 */}

                    <h2 className='font-bold text-zinc-800 mt-3' >5. SESSION COOKIES</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Session cookies are used to keep users' sessions open when they connect to the website with their credentials and password. Session cookies are temporary and are removed from your device when you log out and close your browser. We use session cookies to keep you logged in when you use our website and to identify you as a user on our website each time you connect. Session cookies will not be retained on your device for longer than necessary and will only be used for the purposes listed above.
                        </li>

                    </ol>

                    {/* Article 6 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >6. PURPOSES OF OUR COOKIES</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Our cookies are used for the following purposes:
                        </li>

                        <ol className='list-inside list-decimal'>
                            <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                Strictly Necessary: ​​These cookies are essential for Turpio to perform its basic functions.
                            </li>
                            <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                                Security: We use these cookies to help identify and prevent potential security risks.
                            </li>
                        </ol>

                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Analysis and performance: Performance cookies collect information about how users interact with our website, including the most visited pages, as well as other analytical data. We use this data to improve how our website works and to understand how users interact with it.
                            Google Analytics. We use Google Analytics provided by Google, Inc. of the United States ("Google"). These tools and technologies collect and
                        </li>
                    </ol>


                    {/* Article 7 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >7. CONTACT</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If you have questions or concerns about this cookie policy and the handling and security of your data, please contact us through our contact page or through the contact information that appears below: Ugly (Insert contact information, email, phone, etc.)
                        </li>

                    </ol>





                    {/* Refund Policy */}

                    <h1 className='text-[20px] font-bold text-zinc-900 mb-4 mt-20' >REFUND POLICY</h1>
                    <h2 className='font-semibold text-zinc-800 my-4' >
                        ¡Bienvenido a Turpio!
                    </h2>

                    <p className='text-[16px] text-zinc-700 mb-3' >
                        This refund policy applies to all reservations made through:
                        <a target="__blank" href='https://turpio.com ' className='text-blue-600 hover:underline' > https://turpio.com  </a>
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        Our refund policy is part of our terms and conditions, our privacy policy and should be read together. We reserve the right to change this refund policy at any time.
                    </p>
                    <p className='text-[16px] text-zinc-700 mb-3' >
                        By making a reservation through our platform, you declare and accept the conditions described below. Our refund policy does not affect your statutory rights.
                    </p>

                    {/* Article 1 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >
                        1. REFUNDS AND RESCHEDULES</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            Reservations made through our platform and the reservation pages of our users are final and non-refundable. Please confirm the availability of reservations, the schedule, the reservation mode and all the characteristics and policies of the services, before making a reservation.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If the user wishes to cancel or reschedule a reservation please contact the owner of the reservation page to reschedule the service reservation, but note that reservations are non-refundable. The rescheduling of reservations would be made at the sole disposal and discretion of the users who own the reservations.
                        </li>
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            In cases where the Booking Page Owner cancels the reservation, the Booking Page Owner may reschedule the reservation with the User and if it is not possible to reschedule the reservation, the User may request a full refund from the respective Booking Page Owner. Please note that the refund and any claim made in relation to the reservation of the service must be managed between the owner of the reservation page and the user.
                        </li>

                    </ol>


                    {/* Article 2 */}
                    <h2 className='font-bold text-zinc-800 mt-3' >2. CONTACT</h2>
                    <ol className='list-outside list-disc mb-4' >
                        <li className='text-[16px] text-zinc-600 font-medium pt-3'>
                            If you have any questions about this return policy, please contact us through our contact page or using the contact information below:
                            <a target="__blank" href='mailto:info@turpio.com' className='text-blue-600 hover:underline' > info@turpio.com </a>
                        </li>
                    </ol>



                </div>
            </div>
            <Footer />
        </div>
    )
}

export default termsConditions