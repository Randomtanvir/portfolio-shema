export default function Contact() {
  return (
    <div className="bg-gray-700 bg-gradient-to-b from-gray-900 to-gray-950 py-16">
      <form className="flex flex-col items-center text-sm">
        {/* Section Title */}
        <p className="text-lg text-orange-500 font-medium pb-2">Contact Me</p>
        <h1 className="text-4xl font-semibold text-slate-300 pb-4">
          Let's Work Together
        </h1>

        {/* Section Description */}
        <p className="text-sm text-gray-400 text-center pb-10 max-w-md">
          I am always open to discussing new projects, collaborations, or
          opportunities in the field of Public Administration. Feel free to
          reach out to me with your ideas or questions, and I will get back to
          you as soon as possible.
        </p>

        {/* Name & Email Inputs */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-gray-300" htmlFor="name">
              Your Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 bg-gray-800 text-white"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-gray-300" htmlFor="email">
              Your Email
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 bg-gray-800 text-white"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-gray-300" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300 bg-gray-800 text-white"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 bg-orange-600 hover:bg-orange-700 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
