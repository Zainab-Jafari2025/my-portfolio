import { useState, useEffect, useContext } from "react";
import confetti from "canvas-confetti";
import { GlobalContext } from "../context/GlobalContext";

function ContactSection() {
  const { theme } = useContext(GlobalContext);

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

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

    setFormData({ name: "", email: "", message: "" });

    setErrors({});

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      className={`px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8">
        Contact Me
      </h2>

      {/* SUCCESS */}
      {success && (
        <div className="bg-green-100 text-green-700 p-3 sm:p-4 rounded-xl mb-4 md:mb-6 text-sm sm:text-base">
          ✅ Message sent successfully!
        </div>
      )}

      {/* SAVED DATA */}
      {hasSavedData && (
        <div className="bg-yellow-100 text-yellow-700 p-3 sm:p-4 rounded-xl mb-4 md:mb-6 text-sm sm:text-base">
          💾 You have unsent message data saved!
        </div>
      )}

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
        
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:gap-5 w-full lg:max-w-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-2 sm:p-3 rounded-lg text-sm sm:text-base"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-2 sm:p-3 rounded-lg text-sm sm:text-base"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border p-2 sm:p-3 rounded-lg text-sm sm:text-base"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:shadow-[0_0_20px_#8b5cf6] transition active:scale-95 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        {/* PREVIEW */}
        <div
          className={`w-full lg:max-w-lg p-4 sm:p-6 rounded-2xl shadow-lg border ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-gray-300"
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-5">
            👀 Live Preview
          </h3>

          <p className="text-sm sm:text-base">
            <strong>Name:</strong> {formData.name || "Your Name"}
          </p>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base">
            <strong>Email:</strong>{" "}
            {formData.email || "example@gmail.com"}
          </p>

          <div className="mt-3 md:mt-4">
            <strong className="text-sm sm:text-base">Message:</strong>
            <p
              className={`mt-2 text-sm sm:text-base ${
                theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >
              {formData.message ||
                "Your message will appear here..."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;