import React, {useRef} from "react";
import '../css/contact.css';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault()

        //serviceID - templateID - #form - publicKey
        const serviceID = 'service_ignxpag';
        const templateID = 'template_dxr547l';
        const publicKey = 'sfNf_Mkj5lul0nLIF';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((res) => {
            console.log("Email sent successfully ", res)
        })
        .catch((error) => {
            console.log("Sending email fails ", error)
        })
        
        document.getElementsByClassName('contact_mailbox_form_name')[0].value = '';
        document.getElementsByClassName('contact_mailbox_form_mail')[0].value = '';
        document.getElementsByClassName('contact_mailbox_form_subject')[0].value = '';
        document.getElementsByClassName('contact_mailbox_form_message')[0].value = '';
    }

    return (
        <section 
        id='contact'
        className="
        flex
        section
        relative
        h-fit
        w-full
        bg-[var(--container-color)]
        2xl:flex-row
        flex-col
        justify-center
        items-center
        2xl:py-16
        py-8
        text-[var(--text-color)]
    ">
            <div className="
            contact_title
            flex
            flex-row
            text-black
            text-2xl
            font-bold
            absolute
            2xl:text-5xl
            2xl:z-[2]
        ">
                Contacts Me.
            </div>
            <div className="
            contact_note
            2xl:h-[35rem]
            2xl:pt-[4rem]
            pb-12
            pt-4
            flex
            flex-col
            justify-between
            z-[1]
        ">
                <div className="
                contact_note_regard
                w-[23rem]
                2xl:h-[21rem]
                h-[17rem]
                bg-[var(--body-color)]
                2xl:border-b-8
                border-b-4
                border-[var(--first-color)]
                2xl:px-12
                px-8
                py-4
                flex
                flex-col
                justify-end
            ">
                    <p className="mb-8 text-sm text-black font-[600]">I will read all emails. Send me any message you want and I'll get back to you.</p>
                    <p className="mb-8 text-xs">I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.</p>
                    <div className="
                contact_geometricbox
                absolute
                2xl:h-6
                2xl:w-6
                h-4
                w-4
                z-1
                ">
                        <div className="
                    contact_geometricbox_bg
                    h-[90%]
                    w-[90%]
                    bg-[var(--first-color)]
                    "/>
                        <div className="
                    contact_geometricbox_border
                    h-full
                    w-full
                    2xl:border-4
                    border-2
                    border-black
                    "/>
                    </div>
                    <div className="
                contact_curvedarrow
                invert
                absolute
                2xl:w-12
                2xl:h-12
                w-8
                h-8
            ">
                        <img className="
                    h-full
                    w-full
                    object-contain
                " src="/curved-arrow.svg" alt="random lines" />
                    </div>
                </div>
            </div>
            <div className="
            contact_mailbox
            bg-black
            text-white
            2xl:w-[40vw]
            h-[37rem]
            w-full
            flex
            flex-col
            justify-center
            2xl:pl-28
            2xl:pr-20
            px-4
            py-8
            z-[0]
        ">
                <div className="
                contact_mailbox_title
                font-bold
                text-lg
                text-white
                mb-6
                flex
                2xl:w-fit
                2xl:justify-start
                w-full
                justify-center

            ">
                    Send Me A Message
                </div>
                <form
                ref={form}
                id="contact_mailbox_form"
                onSubmit={sendEmail}
                className="
                contact_mailbox_form
            ">
                    <div className="
                    w-full
                    flex
                    justify-between
                ">
                        <input className="
                        contact_mailbox_form_name
                        border-2
                        border-[var(--text-color)]
                        bg-black
                        p-4
                        mr-2
                        text-sm" placeholder="Your Name" type="text" name="from_name"/>
                        <input className="
                        contact_mailbox_form_mail
                        border-2
                        border-[var(--text-color)]
                        bg-black
                        p-4
                        text-sm
                        " placeholder="Email Address" type="text" name='from_email'/>
                    </div>
                    <input className="
                    contact_mailbox_form_subject
                    mt-4
                    border-2
                    border-[var(--text-color)]
                    bg-black
                    p-4
                    text-sm
                    w-full" placeholder="Subject" type="text" name='subject'/>
                    <textarea className="
                    contact_mailbox_form_message
                    mt-4
                    border-2
                    border-[var(--text-color)]
                    bg-black
                    p-4
                    text-sm
                    w-full
                    h-40" placeholder="Message" type="text" name='message'/>
                <div className="
                contact_mailbox_send
                mt-8
                flex
                h-12
                w-full
                2xl:justify-start
                justify-center
                items-center
                text-sm
            ">
                    <button type="submit" className="
                flex
                h-full
                cursor-pointer
                w-40
                justify-center
                bg-[var(--first-color)]
                items-center">
                        <img className="
                2xl:w-[16px]
                2xl:h-[16px]
                w-[12px]
                h-[12px]
                invert
                mr-2
                " src="/send-plane-line.svg" alt="Send" />
                        Send Message
                    </button>
                </div>
                </form>
            </div>
            <div className="
            contact_note_social
            flex
            flex-col
            2xl:flex-row
            2xl:absolute
            items-center
            mt-16
            mb-4
            2xl:m-0
            z-[2]
        ">
                <div className="text-xs 2xl:w-[8rem] w-full flex flex-col items-center 2xl:items-start">
                    <p className="2xl:mb-2 mb-1">Does not send email</p>
                    <p className="text-black font-[600] 2xl:m-0 mb-4">Write me on my social networks</p>
                </div>
                <div className="
                flex
                flex-row
                2xl:justify-start
                justify-center
                gap-4
                2xl: gap-0
                items-center
                2xl:w-[10rem]
                w-full
            ">
                    <div className="contact_note_social_icon h-8 w-8 p-2 flex justify-center items-center 2xl:ml-4 bg-[var(--text-color)]">
                        <Link to={"https://www.facebook.com/lullaby.for.ur.soul/"}><img className="invert w-[1rem] h-[1rem]" src="/facebook-fill.svg" alt="Social icons" /></Link>
                    </div>
                    <div className="contact_note_social_icon h-8 w-8 p-2 flex justify-center items-center 2xl:ml-4 bg-[var(--text-color)]">
                        <Link href="https://www.linkedin.com/in/huy-ph%E1%BA%A1m-810108335/"><img className="invert w-[1rem] h-[1rem]" src="/github-line.svg" alt="Social icons" /></Link>
                    </div>
                    <div className="contact_note_social_icon h-8 w-8 p-2 flex justify-center items-center 2xl:ml-4 bg-[var(--text-color)]">
                        <Link href="https://github.com/Mentoriassssssss"><img className="invert w-[1rem] h-[1rem]" src="/github-line.svg" alt="Social icons" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;