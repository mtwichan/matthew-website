import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";

const FORM_ENDPOINT = "";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (event: any) => {
        event.preventDefault();
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
                        action={FORM_ENDPOINT}
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
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-non focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="mb-5 pt-0 font-bold">
                            <label className="inline-block mb-2">Email</label>
                            <input
                                type="text"
                                placeholder="Your email..."
                                name="email"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-non focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="mb-5 pt-0 font-bold">
                            <label className="inline-block mb-2">Message</label>
                            <textarea
                                placeholder="Your message..."
                                name="message"
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