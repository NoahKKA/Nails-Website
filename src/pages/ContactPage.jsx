import React, { useState } from "react";
import Default from "./DefaultPage";
import Button from "react-bootstrap/Button";

const FORM_ENDPOINT = "/contact"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.log(error);
      // Handle error or display error message to the user
    }
  };

  return (
    <Default className="bg-green-100">
      <div className="bg-green-100 pt-20">
        <div className="max-w-7xl mx-auto pt-10">
          <h2 className="pt-5 pb-20 text-center">
            Got something to say? Let us know!
          </h2>
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
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
              <Button
                className="mx-auto text-center bg-gradient-to-r from-green-300 to-cyan-300 rounded-lg p-2 text-black"
                type="submit"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Send"
              >
                Send a message
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-20 bg-green-100"> </div>
    </Default>
  );
};

export default ContactForm;
