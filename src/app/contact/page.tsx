import React from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Main content container */}
      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 flex-grow h-screen">
        <div className="bg-gray-200 flex justify-center items-center">
          <h1 className="sticky top-40 text-4xl md:text-6xl font-bold text-center">D'ECONTRAKAN</h1>
        </div>

        <div className="col-span-2 bg-white p-10">
          <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
          <p className="text-lg text-gray-600 mb-8">We're excited to hear more about your feedback.</p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="font-bold mb-1">Name</label>
                <input type="text" id="firstName" placeholder="Enter name" className="p-3 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="font-bold mb-1">Last Name</label>
                <input type="text" id="lastName" placeholder="Enter last name" className="p-3 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-bold mb-1">Phone number</label>
                <input type="text" id="phone" placeholder="Enter phone number" className="p-3 border border-gray-300 rounded" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold mb-1">E-mail address</label>
                <input type="email" id="email" placeholder="Enter e-mail address" className="p-3 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="font-bold mb-1">Message</label>
              <textarea id="description" placeholder="Write a message" maxLength="1000" className="p-3 border border-gray-300 rounded h-32"></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="fileUpload" className="font-bold mb-1">Attach file(s) (max file size 10MB)</label>
              <input type="file" id="fileUpload" className="p-3 border border-gray-300 rounded" />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="completeForm" className="h-5 w-5 text-blue-600" />
              <label htmlFor="completeForm" className="text-gray-700">I understand that uncompleted forms will be rejected and I have completed my form.</label>
            </div>

            <button type="submit" className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Footer outside of the grid, sticking to the bottom */}
      <Footer />
    </div>
  );
}
