import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-10 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeading>Contact Me</SectionHeading>

      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:heonjwa@cs.washington.edu"></a>
        or through this form.
      </p>
      <form>
        <input type="email" />
        <textarea />
        <button type="submit">
          Submit <FaPaperPlane /> {" "}
        </button>
      </form>
    </section>
  );
}
