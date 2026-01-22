"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    query: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };
  return (
    <section id="form">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 bg-saffron-light text-primary font-semibold rounded-full text-sm mb-4">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
          Contact Shri
          <span className="text-gradient">Susanta Ghosh</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          For suggestions, grievances, or public matters, feel free to connect.
        </p>
      </div>

      <div className="flex gap-24 container mx-auto px-12 mb-30">
        <div className="bg-muted px-8 py-10 rounded-2xl w-3/5">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full Name"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="query"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Query
              </label>
              <input
                type="text"
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Enter your query"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="col-span-2 w-full bg-[#FF6600] text-white py-3 rounded-xl"
              style={{ background: "#FF6600" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-2/5">
          <div className="flex flex-col gap-5 border-b border-[#36415333] mb-6">
            <span className="text-xl flex items-center gap-2 font-normal">
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
              Phone:
            </span>
            <span className="mb-5 text-lg font-normal text-[#364153CC]">
              +91 7063762957
            </span>
          </div>
          <div className="flex flex-col gap-5 border-b border-[#36415333] mb-6">
            <span className="text-xl flex items-center gap-2 font-normal">
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
              Whatsapp Number:
            </span>
            <span className="mb-5 text-lg font-normal text-[#364153CC]">
              +91 7063762957
            </span>
          </div>

          <div className="flex flex-col gap-5 border-b border-[#36415333] mb-6">
            <span className="text-xl flex items-center gap-2 font-normal">
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
              Email:
            </span>
            <span className="mb-5 text-lg font-normal text-[#364153CC]">
              contact@susantaghosh.com
            </span>
          </div>

          <div className="flex flex-col gap-5 border-b border-[#36415333] mb-6">
            <span className="text-xl flex items-center gap-2 font-normal">
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 18C2 19.886 2 20.828 2.586 21.414C3.172 22 4.114 22 6 22H18C19.886 22 20.828 22 21.414 21.414C22 20.828 22 19.886 22 18V13C22 12.529 22 12.293 21.854 12.146C21.707 12 21.47 12 21 12H3C2.529 12 2.293 12 2.146 12.146C2 12.293 2 12.53 2 13V18ZM7 15C7 14.529 7 14.293 7.146 14.146C7.293 14 7.53 14 8 14H10C10.471 14 10.707 14 10.854 14.146C11 14.293 11 14.529 11 15C11 15.471 11 15.707 10.854 15.854C10.707 16 10.47 16 10 16H8C7.529 16 7.293 16 7.146 15.854C7 15.707 7 15.47 7 15ZM7.146 18.146C7 18.293 7 18.53 7 19C7 19.47 7 19.707 7.146 19.854C7.293 20 7.53 20 8 20H10C10.471 20 10.707 20 10.854 19.854C11 19.707 11 19.47 11 19C11 18.53 11 18.293 10.854 18.146C10.707 18 10.47 18 10 18H8C7.529 18 7.293 18 7.146 18.146ZM13 15C13 14.529 13 14.293 13.146 14.146C13.293 14 13.53 14 14 14H16C16.471 14 16.707 14 16.854 14.146C17 14.293 17 14.529 17 15C17 15.471 17 15.707 16.854 15.854C16.707 16 16.47 16 16 16H14C13.529 16 13.293 16 13.146 15.854C13 15.707 13 15.47 13 15ZM13.146 18.146C13 18.293 13 18.53 13 19C13 19.47 13 19.707 13.146 19.854C13.293 20 13.529 20 14 20H16C16.471 20 16.707 20 16.854 19.854C17 19.707 17 19.47 17 19C17 18.53 17 18.293 16.854 18.146C16.707 18 16.47 18 16 18H14C13.529 18 13.293 18 13.146 18.146Z"
                  fill="#1A1A1A"
                />
                <path
                  d="M7 3V6M17 3V6"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  stroke-linecap="round"
                />
              </svg>{" "}
              Opening Hours:
            </span>
            <span className="mb-5 text-lg font-normal text-[#364153CC]">
              Monday – Saturday: 10:00 AM – 6:00 PM
            </span>
          </div>

          <div className="mt-12 flex gap-4 items-start justify-start">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" stroke="#364153" />
              <path
                d="M25.0007 11.666H22.5007C21.3956 11.666 20.3358 12.105 19.5544 12.8864C18.773 13.6678 18.334 14.7276 18.334 15.8327V18.3327H15.834V21.666H18.334V28.3327H21.6673V21.666H24.1673L25.0007 18.3327H21.6673V15.8327C21.6673 15.6117 21.7551 15.3997 21.9114 15.2434C22.0677 15.0871 22.2796 14.9993 22.5007 14.9993H25.0007V11.666Z"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#364153"
              />
              <path
                d="M28.3327 13.3327C28.3327 13.3327 27.7493 15.0827 26.666 16.166C27.9993 24.4994 18.8327 30.5827 11.666 25.8327C13.4993 25.916 15.3327 25.3327 16.666 24.166C12.4993 22.916 10.416 17.9994 12.4993 14.166C14.3327 16.3327 17.166 17.5827 19.9993 17.4994C19.2493 13.9994 23.3327 11.9994 25.8327 14.3327C26.7493 14.3327 28.3327 13.3327 28.3327 13.3327Z"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#364153"
              />
              <path
                d="M24.166 11.666H15.8327C13.5315 11.666 11.666 13.5315 11.666 15.8327V24.166C11.666 26.4672 13.5315 28.3327 15.8327 28.3327H24.166C26.4672 28.3327 28.3327 26.4672 28.3327 24.166V15.8327C28.3327 13.5315 26.4672 11.666 24.166 11.666Z"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.3337 19.4753C23.4366 20.1688 23.3181 20.8771 22.9952 21.4994C22.6723 22.1218 22.1614 22.6264 21.5351 22.9416C20.9088 23.2569 20.1991 23.3666 19.5069 23.2552C18.8147 23.1438 18.1752 22.817 17.6794 22.3212C17.1837 21.8255 16.8569 21.186 16.7455 20.4938C16.6341 19.8015 16.7438 19.0918 17.059 18.4656C17.3742 17.8393 17.8789 17.3284 18.5012 17.0055C19.1236 16.6825 19.8319 16.5641 20.5254 16.6669C21.2328 16.7718 21.8878 17.1015 22.3935 17.6072C22.8992 18.1129 23.2288 18.7678 23.3337 19.4753Z"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.584 15.416H24.5923"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#364153"
              />
              <path
                d="M12.0833 24.1667C11.5012 21.4194 11.5012 18.5806 12.0833 15.8333C12.1598 15.5543 12.3076 15.3001 12.5122 15.0955C12.7167 14.8909 12.971 14.7432 13.25 14.6667C17.7195 13.9262 22.2805 13.9262 26.75 14.6667C27.029 14.7432 27.2833 14.8909 27.4878 15.0955C27.6924 15.3001 27.8402 15.5543 27.9167 15.8333C28.4988 18.5806 28.4988 21.4194 27.9167 24.1667C27.8402 24.4457 27.6924 24.6999 27.4878 24.9045C27.2833 25.1091 27.029 25.2568 26.75 25.3333C22.2805 26.0739 17.7195 26.0739 13.25 25.3333C12.971 25.2568 12.7167 25.1091 12.5122 24.9045C12.3076 24.6999 12.1598 24.4457 12.0833 24.1667Z"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.333 22.5L22.4997 20L18.333 17.5V22.5Z"
                stroke="#364153"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#364153"
              />
              <path
                d="M25.875 14.0915C25.1109 13.32 24.2009 12.7082 23.198 12.2919C22.195 11.8755 21.1193 11.663 20.0334 11.6665C15.4834 11.6665 11.775 15.3749 11.775 19.9249C11.775 21.3832 12.1584 22.7999 12.875 24.0499L11.7084 28.3332L16.0834 27.1832C17.2917 27.8416 18.65 28.1915 20.0334 28.1915C24.5834 28.1915 28.2917 24.4832 28.2917 19.9332C28.2917 17.7249 27.4334 15.6499 25.875 14.0915ZM20.0334 26.7915C18.8 26.7915 17.5917 26.4582 16.5334 25.8332L16.2834 25.6832L13.6834 26.3665L14.375 23.8332L14.2084 23.5749C13.523 22.4808 13.1591 21.2159 13.1584 19.9249C13.1584 16.1415 16.2417 13.0582 20.025 13.0582C21.8584 13.0582 23.5834 13.7749 24.875 15.0749C25.5147 15.7114 26.0216 16.4687 26.3664 17.3027C26.7111 18.1366 26.8869 19.0308 26.8834 19.9332C26.9 23.7165 23.8167 26.7915 20.0334 26.7915ZM23.8 21.6582C23.5917 21.5582 22.575 21.0582 22.3917 20.9832C22.2 20.9165 22.0667 20.8832 21.925 21.0832C21.7834 21.2915 21.3917 21.7582 21.275 21.8916C21.1584 22.0332 21.0334 22.0499 20.825 21.9415C20.6167 21.8415 19.95 21.6166 19.1667 20.9165C18.55 20.3665 18.1417 19.6915 18.0167 19.4832C17.9 19.2749 18 19.1665 18.1084 19.0582C18.2 18.9665 18.3167 18.8165 18.4167 18.6999C18.5167 18.5832 18.5584 18.4915 18.625 18.3582C18.6917 18.2165 18.6584 18.0999 18.6084 17.9999C18.5584 17.8999 18.1417 16.8832 17.975 16.4665C17.8084 16.0665 17.6334 16.1165 17.5084 16.1082H17.1084C16.9667 16.1082 16.75 16.1582 16.5584 16.3665C16.375 16.5749 15.8417 17.0749 15.8417 18.0915C15.8417 19.1082 16.5834 20.0915 16.6834 20.2249C16.7834 20.3666 18.1417 22.4499 20.2084 23.3415C20.7 23.5582 21.0834 23.6832 21.3834 23.7749C21.875 23.9332 22.325 23.9082 22.6834 23.8582C23.0834 23.7999 23.9084 23.3582 24.075 22.8749C24.25 22.3915 24.25 21.9832 24.1917 21.8916C24.1334 21.7999 24.0084 21.7582 23.8 21.6582Z"
                fill="#364153"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
