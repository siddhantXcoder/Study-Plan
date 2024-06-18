import React from "react";
import Footer from "../Components/ForAll/Footer";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between font-inter gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out to us:
          </p>
          <ul className="mt-4">
            <li className="mt-2">
              <strong>Email:</strong> support@studyplan.com
            </li>
            <li className="mt-2">
              <strong>Phone:</strong> +1 234 567 890
            </li>
            <li className="mt-2">
              <strong>Address:</strong> 123 StudyPlan St, Learnville, EDU 56789
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviews from Other Learners */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, name: "John Doe", review: "This platform is amazing! I learned so much." },
            { id: 2, name: "Jane Smith", review: "The courses are very well structured and easy to follow." },
            { id: 3, name: "Emily Johnson", review: "Great support and awesome content." },
          ].map(({ id, name, review }) => (
            <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">{name}</p>
              <p className="mt-2 text-sm">{review}</p>
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
