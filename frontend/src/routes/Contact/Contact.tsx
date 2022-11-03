import React, { useState } from "react";
import axios from "axios";

import ContactForm from "../../components/Contact/ContactForm";
import { BACKEND_CONTACT_API_URL } from "../../constants";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [affiliation, setAffiliation] = useState("")
    const [message, setMessage] = useState("")

    const onChangeHandlerName = (event: any) => {setName(event.target.value)};
    const onChangeHandlerEmail = (event: any) => {setEmail(event.target.value)};
    const onChangeHandlerAffiliation = (event: any) => {setAffiliation(event.target.value)};
    const onChangeHandlerMessage = (event: any) => {setMessage(event.target.value)};

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const res = await axios.post(BACKEND_CONTACT_API_URL, {
                name: name,
                email: email,
                affiliation: affiliation,
                message: message
            })
            console.log(res.data)
        } catch (error) {
            console.log("error contact form: ", error)
        }        
    }

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">Matthew will be in touch with you shortly.</div>
            </>
        )
    }
    // TODO: create form component
    return (
        <>
            <div className="flex items-center justify-center h-[calc(100vh_-_125px)]">
                <div className="container border-1 p-10 mx-auto mt-5 mb-5 border-gray-200 border rounded shadow-lg w-6/12">
                    <div className="text-xl font-bold">Contact Me</div>
                    <div className="mt-1">Send me a message and I will be in touch promptly.</div>
                    <form
                        action={BACKEND_CONTACT_API_URL}
                        onSubmit={(event) => handleSubmit(event)}
                        method="POST"
                        target="_blank"
                        className="mt-5"
                    >
                        <div className="mt-5 mb-5 pt-0 font-bold">
                            <label className="inline-block mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your full name..."
                                name="name"
                                minLength={1}
                                maxLength={30}
                                onChange={onChangeHandlerName}
                                value={name}
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-non focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="mb-5 pt-0 font-bold">
                            <label className="inline-block mb-2">Affiliation</label>
                            <input
                                type="text"
                                placeholder="Your affiliation..."
                                name="affiliation"
                                minLength={1}
                                maxLength={30}
                                onChange={onChangeHandlerAffiliation}
                                value={affiliation}
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-non focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="mb-5 pt-0 font-bold">
                            <label className="inline-block mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Your email..."
                                name="email"
                                minLength={1}
                                maxLength={30}
                                onChange={onChangeHandlerEmail}
                                value={email}
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-non focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="mb-5 pt-0 font-bold">
                            <label className="inline-block mb-2">Message</label>
                            <textarea                            
                                placeholder="Your message..."
                                name="message"
                                minLength={1}
                                maxLength={200}
                                onChange={onChangeHandlerMessage}
                                value={message}
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-non focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Contact;