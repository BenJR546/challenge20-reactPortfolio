import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email with regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }
        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Send data to Google Form using a POST request
            const googleFormUrl =
                "https://docs.google.com/forms/d/1cDVqW61UDtf7P6coAgTlWplq9F4D3-zFdlycdS-Nllg/formResponse";

            // Prepare the data to match the Google Form field entry IDs
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("entry.410786384", formData.name); // Name field ID //Swap with email (entry.434525412)
            formDataToSubmit.append("entry.1373362617", formData.email); // Email field ID // Swap with message (entry.410786384)
            formDataToSubmit.append("entry.434525412", formData.message); // Message field ID // Swap with name (entry.1373362617)

            fetch(googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: formDataToSubmit,
            })
                .then(() => {
                    setStatus("SUCCESS");
                    setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
                })
                .catch(() => {
                    setStatus("ERROR");
                });
        }
    };

    return (
        <section className="container mx-auto p-8">
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            {status === "SUCCESS" && (
                <p className="text-green-500">
                    Your message was sent successfully!
                </p>
            )}
            {status === "ERROR" && (
                <p className="text-red-500">
                    There was an error submitting the form.
                </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    {errors.message && (
                        <p className="text-red-500">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
