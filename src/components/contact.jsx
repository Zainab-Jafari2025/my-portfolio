import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

function Contact() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("contactForm");

    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          message: "",
        };
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const hasSavedData =
    formData.name || formData.email || formData.message;

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Auto Save
  useEffect(() => {
    localStorage.setItem(
      "contactForm",
      JSON.stringify(formData)
    );
  }, [formData]);

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSuccess(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    localStorage.removeItem("contactForm");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="px-20 py-20">
      <h2 className="text-4xl font-bold mb-8">
        Contact Me
      </h2>

      {success && (
        <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6">
          ✅ Message sent successfully!
        </div>
      )}

      {hasSavedData && (
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-xl mb-6">
          💾 You have unsent message data saved!
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-lg w-full"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-3 rounded-lg"
          />

          {errors.name && (
            <p className="text-red-500">
              {errors.name}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-3 rounded-lg"
          />

          {errors.email && (
            <p className="text-red-500">
              {errors.email}
            </p>
          )}

          {/* Message */}
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border p-3 rounded-lg"
          />

          {errors.message && (
            <p className="text-red-500">
              {errors.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:shadow-[0_0_20px_#8b5cf6] transition active:scale-95"
          >
            Send Message
          </button>
        </form>

        {/* Live Preview */}
        <div className="max-w-lg w-full p-6 rounded-2xl shadow-lg border">
          <h3 className="text-2xl font-bold mb-5">
            👀 Live Preview
          </h3>

          <p>
            <strong>Name:</strong>{" "}
            {formData.name || "Your Name"}
          </p>

          <p className="mt-3">
            <strong>Email:</strong>{" "}
            {formData.email || "example@gmail.com"}
          </p>

          <div className="mt-4">
            <strong>Message:</strong>

            <p className="mt-2 text-gray-500">
              {formData.message ||
                "Your message will appear here..."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;