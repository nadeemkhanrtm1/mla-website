"use client";
import Link from "next/link";
import { useState } from "react";
import UnhoveredFb from "@/assets/unhovered_fb.svg";
import UnhoveredX from "@/assets/unhovered_x.svg";
import UnhoveredUTube from "@/assets/unhovered_youtube.svg";
import UnhoveredWhatsapp from "@/assets/unhovered_whatsapp.svg";
import UnhoveredIg from "@/assets/unhovered_ig.svg";
import HoveredFb from "@/assets/hovered_fb.svg";
import HoveredX from "@/assets/hovered_x.svg";
import HoveredUTube from "@/assets/hovered_youtube.svg";
import HoveredWhatsapp from "@/assets/hovered_whatsapp.svg";
import HoveredIg from "@/assets/hovered_ig.svg";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const Form = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    query: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [hovered, setHovered] = useState({
    fb: false,
    x: false,
    youtube: false,
    whatsapp: false,
    ig: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          query: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="form" className="my-30 my-40px">
      <div className="text-center max-w-3xl mx-auto mb-16 mb-16px">
        <span className="inline-block text-[#f60] bg-[rgba(255,102,0,0.1)] px-4 py-2 rounded-full text-sm mb-2 mukta-medium">
          {t.home.contact.badge}
        </span>
        <h2 className="text-[44px] leading-15 text-foreground mb-4 open-sans-semibold-normal text-mobile-32">
          {t.home.contact.title}{" "}
          <span className="text-gradient">{t.home.contact.titleHighlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground mukta-regular text-16px">
          {t.home.contact.description}
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-24 gap-40px container mx-auto px-12">
        <div className="bg-muted px-8 py-10 rounded-2xl w-3/5 w-mobile-100-perc padding-with-radius">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mobile-style-form">
            <div>
              <label
                htmlFor="name"
                className="self-stretch h-5 justify-center text-[#1a1a1a] text-lg font-medium font-['Mukta'] leading-5"
              >
                {t.home.contact.form.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.home.contact.form.namePlaceholder}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="self-stretch h-5 justify-center text-[#1a1a1a] text-lg font-medium font-['Mukta'] leading-5"
              >
                {t.home.contact.form.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.home.contact.form.emailPlaceholder}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="self-stretch h-5 justify-center text-[#1a1a1a] text-lg font-medium font-['Mukta'] leading-5"
              >
                {t.home.contact.form.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.home.contact.form.phonePlaceholder}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="query"
                className="self-stretch h-5 justify-center text-[#1a1a1a] text-lg font-medium font-['Mukta'] leading-5"
              >
                {t.home.contact.form.queryLabel}
              </label>
              <select
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
                required
              >
                <option
                  value=""
                  className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
                >
                  {t.home.contact.form.queryPlaceholder}
                </option>
                <option value="suggestion">{t.home.contact.form.queryOptions.suggestion}</option>
                <option value="complaint">{t.home.contact.form.queryOptions.complaint}</option>
                <option value="feedback">{t.home.contact.form.queryOptions.feedback}</option>
                <option value="grievance">{t.home.contact.form.queryOptions.grievance}</option>
                <option value="other">{t.home.contact.form.queryOptions.other}</option>
              </select>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="message"
                className="self-stretch h-5 justify-center text-[#1a1a1a] text-lg font-medium font-['Mukta'] leading-5"
              >
                {t.home.contact.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.home.contact.form.messagePlaceholder}
                rows={4}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            {submitStatus.type && (
              <div
                className={`col-span-2 p-4 rounded-lg ${submitStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`col-span-2 w-full py-3 rounded-xl margin-top-16px text-white ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FF6600] hover:bg-[#e55a00]"
                }`}
              style={{
                background: isSubmitting ? "#9ca3af" : "#FF6600",
                marginTop: "24px",
              }}
            >
              {isSubmitting ? "Sending..." : t.home.contact.form.submitButton}
            </button>
          </form>
        </div>
        <div className="w-2/5 w-mobile-100-perc">
          <div className="flex flex-col gap-4.75 border-b border-[#36415333] mb-6 mb-16px">
            <span className="text-xl flex items-center gap-2 font-normal text-18px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.23 15.2598L16.69 14.9698C16.3913 14.9347 16.0886 14.9678 15.8045 15.0665C15.5205 15.1652 15.2625 15.327 15.05 15.5398L13.21 17.3798C10.3714 15.9357 8.06404 13.6284 6.61998 10.7898L8.46998 8.93977C8.89998 8.50977 9.10998 7.90977 9.03998 7.29977L8.74998 4.77977C8.6935 4.29186 8.45944 3.84179 8.09244 3.51536C7.72544 3.18893 7.25115 3.00897 6.75998 3.00977H5.02998C3.89998 3.00977 2.95998 3.94977 3.02998 5.07977C3.55998 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
                  fill="#1A1A1A"
                />
              </svg>{" "}
              {t.home.contact.info.phone}
            </span>
            <span className="mb-5 text-[18px] font-normal text-[#364153CC] leading-5.75 text-16px">
              +91 7063762957
            </span>
          </div>

          <div className="flex flex-col gap-4.75 border-b border-[#36415333] mb-6 mb-16px">
            <span className="text-xl flex items-center gap-2 font-normal text-18px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.05 4.91005C18.1331 3.98416 17.041 3.25002 15.8375 2.75042C14.634 2.25081 13.3431 1.99574 12.04 2.00005C6.57999 2.00005 2.12999 6.45005 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27005 20.92 6.78005 19.05 4.91005ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22754 14.9771 3.79091 13.4593 3.78999 11.9101C3.78999 7.37005 7.48999 3.67005 12.03 3.67005C14.23 3.67005 16.3 4.53005 17.85 6.09005C18.6176 6.85392 19.2259 7.7626 19.6396 8.76338C20.0533 9.76417 20.2642 10.8371 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86005 10.39 9.72005 10.33 9.60005C10.27 9.48005 9.76999 8.26005 9.56999 7.76005C9.36999 7.28005 9.15999 7.34005 9.00999 7.33005H8.52999C8.35999 7.33005 8.09999 7.39005 7.86999 7.64005C7.64999 7.89005 7.00999 8.49005 7.00999 9.71005C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901Z"
                  fill="#1A1A1A"
                />
              </svg>{" "}
              {t.home.contact.info.whatsapp}
            </span>
            <span className="mb-5 text-[18px] font-normal text-[#364153CC] leading-5.75 text-16px">
              +91 7063762957
            </span>
          </div>

          <div className="flex flex-col gap-4.75 border-b border-[#36415333] mb-6 mb-16px">
            <span className="text-xl flex items-center gap-2 font-normal text-18px">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
                  fill="#1A1A1A"
                />
              </svg>{" "}
              {t.home.contact.info.email}
            </span>
            <span className="mb-5 text-[18px] font-normal text-[#364153CC] leading-5.75 text-16px">
              contact@susantaghosh.com
            </span>
          </div>

          <div className="flex flex-col gap-4.75 border-b border-[#36415333] mb-6 mb-16px">
            <span className="text-xl flex items-center gap-2 font-normal text-18px">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C2 7.114 2 6.172 2.586 5.586C3.172 5 4.114 5 6 5H18C19.886 5 20.828 5 21.414 5.586C22 6.172 22 7.114 22 9C22 9.471 22 9.707 21.854 9.854C21.707 10 21.47 10 21 10H3C2.529 10 2.293 10 2.146 9.854C2 9.707 2 9.47 2 9Z"
                  fill="#1A1A1A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 18C2 19.886 2 20.828 2.586 21.414C3.172 22 4.114 22 6 22H18C19.886 22 20.828 22 21.414 21.414C22 20.828 22 19.886 22 18V13C22 12.529 22 12.293 21.854 12.146C21.707 12 21.47 12 21 12H3C2.529 12 2.293 12 2.146 12.146C2 12.293 2 12.53 2 13V18ZM7 15C7 14.529 7 14.293 7.146 14.146C7.293 14 7.53 14 8 14H10C10.471 14 10.707 14 10.854 14.146C11 14.293 11 14.529 11 15C11 15.471 11 15.707 10.854 15.854C10.707 16 10.47 16 10 16H8C7.529 16 7.293 16 7.146 15.854C7 15.707 7 15.47 7 15ZM7.146 18.146C7 18.293 7 18.53 7 19C7 19.47 7 19.707 7.146 19.854C7.293 20 7.53 20 8 20H10C10.471 20 10.707 20 10.854 19.854C11 19.707 11 19.47 11 19C11 18.53 11 18.293 10.854 18.146C10.707 18 10.47 18 10 18H8C7.529 18 7.293 18 7.146 18.146ZM13 15C13 14.529 13 14.293 13.146 14.146C13.293 14 13.53 14 14 14H16C16.471 14 16.707 14 16.854 14.146C17 14.293 17 14.529 17 15C17 15.471 17 15.707 16.854 15.854C16.707 16 16.47 16 16 16H14C13.529 16 13.293 16 13.146 15.854C13 15.707 13 15.47 13 15ZM13.146 18.146C13 18.293 13 18.53 13 19C13 19.47 13 19.707 13.146 19.854C13.293 20 13.529 20 14 20H16C16.471 20 16.707 20 16.854 19.854C17 19.707 17 19.47 17 19C17 18.53 17 18.293 16.854 18.146C16.707 18 16.47 18 16 18H14C13.529 18 13.293 18 13.146 18.146Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M7 3V6M17 3V6"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>{" "}
              {t.home.contact.info.openingHours}
            </span>
            <span className="mb-5 text-[18px] font-normal text-[#364153CC] leading-5.75 text-16px">
              {t.home.contact.info.openingHoursValue}
            </span>
          </div>

          <div className="mt-12 mt-24px flex gap-4 items-start justify-start">
            <Link
              href="https://www.facebook.com/SusantaGhoshBJP"
              target="_blank"
              onMouseEnter={() => setHovered((h) => ({ ...h, fb: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, fb: false }))}
            >
              {hovered.fb ? (
                <Image
                  src={HoveredFb}
                  alt="Facebook"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              ) : (
                <Image
                  src={UnhoveredFb}
                  alt="Facebook"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              )}
            </Link>

            <Link
              href="https://x.com/SusantaGhoshBJP"
              target="_blank"
              onMouseEnter={() => setHovered((h) => ({ ...h, x: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, x: false }))}
            >
              {hovered.x ? (
                <Image
                  src={HoveredX}
                  alt="X"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              ) : (
                <Image
                  src={UnhoveredX}
                  alt="X"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              )}
            </Link>

            <Link
              href="https://www.instagram.com/mr.susantaghosh/"
              target="_blank"
              onMouseEnter={() => setHovered((h) => ({ ...h, ig: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, ig: false }))}
            >
              {hovered.ig ? (
                <Image
                  src={HoveredIg}
                  alt="Instagram"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              ) : (
                <Image
                  src={UnhoveredIg}
                  alt="Instagram"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              )}
            </Link>

            <Link
              href="https://www.youtube.com/@SusantaGhoshBJP"
              target="_blank"
              onMouseEnter={() => setHovered((h) => ({ ...h, youtube: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, youtube: false }))}
            >
              {hovered.youtube ? (
                <Image
                  src={HoveredUTube}
                  alt="YouTube"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              ) : (
                <Image
                  src={UnhoveredUTube}
                  alt="YouTube"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              )}
            </Link>

            <Link
              href="https://whatsapp.com/channel/0029Vb7mo4H7YSd1yLblW60b"
              target="_blank"
              onMouseEnter={() => setHovered((h) => ({ ...h, whatsapp: true }))}
              onMouseLeave={() => setHovered((h) => ({ ...h, whatsapp: false }))}
            >
              {hovered.whatsapp ? (
                <Image
                  src={HoveredWhatsapp}
                  alt="Facebook"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              ) : (
                <Image
                  src={UnhoveredWhatsapp}
                  alt="Facebook"
                  className="w-10 h-10"
                  width={100}
                  height={100}
                  unoptimized
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
