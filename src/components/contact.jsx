import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .send(
        "service_bi7ivfs",
        "template_anm6sik",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "kihm3m1ggdoM2fBMI",
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setSuccess("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className={`py-24 ${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact <span className="text-green-500">Me</span>
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Feel free to reach out for internships, collaborations, or
            cybersecurity opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Let’s connect</h3>

            <div className="space-y-4">
              <InfoItem
                icon={<Mail />}
                title="Email"
                text="manithbanular@gmail.com"
                darkMode={darkMode}
              />
              <InfoItem
                icon={<Phone />}
                title="Phone"
                text="+94 71 102 7280"
                darkMode={darkMode}
              />
              <InfoItem
                icon={<MapPin />}
                title="Location"
                text="Sri Lanka"
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6">Send a message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                darkMode={darkMode}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                darkMode={darkMode}
              />
            </div>

            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              darkMode={darkMode}
              className="mt-4"
            />

            <div className="mt-4">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className={`mt-2 w-full rounded-xl px-4 py-3 border outline-none resize-none ${
                  darkMode
                    ? "bg-[#0f0f0f] border-white/10 text-white"
                    : "bg-white border-gray-200"
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="mt-3 text-sm text-green-500 text-center">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

/* Reusable Components */
const InfoItem = ({ icon, title, text, darkMode }) => (
  <div className="flex items-start gap-3">
    <div
      className={`p-3 rounded-xl border ${
        darkMode ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"
      }`}
    >
      {icon}
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{text}</p>
    </div>
  </div>
);

const Input = ({
  label,
  name,
  value,
  onChange,
  darkMode,
  type = "text",
  className = "",
}) => (
  <div className={className}>
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className={`mt-2 w-full rounded-xl px-4 py-3 border outline-none ${
        darkMode
          ? "bg-[#0f0f0f] border-white/10 text-white"
          : "bg-white border-gray-200"
      }`}
    />
  </div>
);

export default Contact;
