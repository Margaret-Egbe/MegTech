import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);  // new state for error

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current!);
    const name = formData.get("user_name")?.toString().trim();
    const email = formData.get("user_email")?.toString().trim();
    const message = formData.get("user_message")?.toString().trim();

    // validation
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError(null); // clear any previous error

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        form.current as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          form.current?.reset();

          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setSent(false);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-white">
      <FadeInWhenVisible>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261C82]">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            We'd love to hear from you. Drop a message and we'll get back to you.
          </p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible direction="up">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl/20 p-8 md:p-12">
          <form
            target="_blank"
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-[#261C82]">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F25D9C]"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-[#261C82]">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F25D9C]"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-[#261C82]">
                Message
              </label>
              <textarea
                name="user_message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F25D9C]"
              ></textarea>
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#261C82] hover:bg-[#1f1768] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>

              {sent && (
                <p className="text-green-600 mt-3">
                  Message sent successfully ✅
                </p>
              )}
              {error && (
                <p className="text-red-600 mt-3">{error}</p>
              )}
            </div>
          </form>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Contact;
