"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
    let data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }

      const resData = await response.json();
      console.log(resData.body);
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-teal-500 text-lg font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <div className="mb-6 w-6/12">
            <label
              className="block text-teal-500 text-lg font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              autoComplete="given-name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 mx-4 w-6/12">
            <label
              className="block text-teal-500 text-lg font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              autoComplete="last-name"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="message block mb-4">
          <label
            className="block text-teal-500 text-lg font-bold mb-2"
            htmlFor="frm-message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline border rounded peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            name="message"
            placeholder=" "
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="rounded-lg bg-teal-500 text-white py-2 px-6"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
