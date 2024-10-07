import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.subject || !formData.message) {
      return toast.error("All fields are required", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      setFormData({ email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center"> Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          laborum!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
          aria-busy={loading}
          aria-live="polite"
        >
          <div>
            <label htmlFor="email" className="form-label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="form-input mt-1"
              required
              aria-label="Email Address"
            />
          </div>

          <div>
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let us know can we help you"
              className="form-input mt-1"
              required
              aria-label="Subject"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              rows="6"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a comment..."
              className="form-input mt-1"
              required
              aria-label="Message"
            />
          </div>

          <button
            type="submit"
            className="btn rounded sm:w-fit"
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
