"use client";

import { type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, "", message].join("\n");

    window.location.href = `mailto:support@getmyneurocare.com?subject=${encodeURIComponent("GetMyNeurocare enquiry")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="landing-contact-form" onSubmit={handleSubmit}>
      <div className="landing-form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label>
        <span>Phone</span>
        <input type="tel" name="phone" placeholder="+233 54 859 9553" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" placeholder="Tell us how we can help" rows={4} required />
      </label>
      <button type="submit">
        Send message <ArrowRight size={20} />
      </button>
    </form>
  );
}
