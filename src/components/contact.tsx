"use client";

declare global {
  interface Window {
    submitted: boolean;
  }
}

import { useState } from "react";
import { motion, Variants } from "motion/react";
import toast from "react-hot-toast";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div id="contact" className="px-6 py-20 sm:px-12 lg:px-36">
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Message sent ✅");
          }
        }}
      />

      <motion.div
        className="font-portfolio-instrument-serif text-portfolio-black mb-12 flex justify-center text-4xl font-extrabold sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Contact
      </motion.div>

      <div className="mx-auto flex max-w-4xl flex-col gap-12 sm:flex-row sm:items-start">
        <motion.div
          className="flex flex-col gap-4 sm:w-1/2 sm:pt-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <p className="font-portfolio-sans-serif text-portfolio-black text-2xl font-bold sm:text-3xl">
            Let's work together!
          </p>
          <p className="text-portfolio-darkgray text-sm leading-relaxed">
            I'm currently open to new opportunities — whether it's a full-time
            role, internship, or collaboration. Feel free to reach out and I'll
            get back to you as soon as I can. Looking forward to connecting!
          </p>
          <div className="mt-2 flex flex-col gap-2"></div>
        </motion.div>

        <motion.div
          className="w-full sm:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {isSubmitted ? (
            <motion.div
              className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="font-portfolio-instrument-serif text-portfolio-black text-3xl">
                Thanks for reaching out!
              </p>
              <p className="text-portfolio-gray text-sm">
                I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfxm_nSodpSy8cPdFVOu-1bMXlIgXQopHRjcWsNczxVJLd6ew/formResponse"
              onSubmit={() => (window.submitted = true)}
              target="hidden_iframe"
              className="flex flex-col gap-5"
            >
              {[
                {
                  label: "Name",
                  name: "entry.794047116",
                  type: "text",
                  placeholder: "Yubin Zhen",
                },
                {
                  label: "Email",
                  name: "entry.1862306724",
                  type: "email",
                  placeholder: "yubin@email.com",
                },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  className="flex flex-col gap-1.5"
                  custom={i}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="font-portfolio-sans-serif text-portfolio-black text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="text-portfolio-black placeholder:text-portfolio-gray w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm transition-colors duration-200 outline-none focus:border-black/40"
                  />
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col gap-1.5"
                custom={2}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label className="font-portfolio-sans-serif text-portfolio-black text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="entry.1951277637"
                  placeholder="What's on your mind?"
                  required
                  rows={5}
                  className="text-portfolio-black placeholder:text-portfolio-gray w-full resize-none rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm transition-colors duration-200 outline-none focus:border-black/40"
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="font-portfolio-sans-serif text-portfolio-black w-full rounded-lg border border-black/20 bg-white py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-black hover:text-white"
                >
                  Send message
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
