import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Contact Us</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
