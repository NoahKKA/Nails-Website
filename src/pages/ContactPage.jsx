import React, { useState } from "react";
import Default from "./DefaultPage";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Form response was not ok");
                }

                setSubmitted(true);
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    };
    return (
        <Default className=" bg-green-100">
            <div className="bg-green-100 pt-20">
                <div className="max-w-7xl mx-auto  pt-10">
                    <h2 className="pt-5 pb-20 text-center">Got something to say! Let us know!</h2>
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div className="pb-3 pt-0">
                            <input
                                type="text"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Enter your name"
                                placeholder="Your name"
                                name="name"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="pb-3 pt-0">
                            <input
                                type="email"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Enter your Email"
                                placeholder="Email"
                                name="email"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="pb-3 pt-0">
                            <textarea
                                placeholder="Your message"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Enter your Message"
                                name="message"
                                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required
                            />
                        </div>
                        <div className="pb-3 pt-0 mx-auto">
                            <button
                                className="text-center bg-gradient-to-r from-green-300 to-cyan-300 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 pb-1 ease-linear transition-all duration-150"
                                type="submit"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Send"
                            >
                                Send a message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="py-20 bg-green-100"> </div>
            <div className="py-20 bg-green-100"> </div>
        </Default>
    );
};

export default ContactForm;
