function ContactMe() {
  return (
    <div className=" bg-primary h-full md:px-20 py-0 px-4 flex flex-col items-center" id="contact">
      <article className="text-center mb-6 mt-10 sm:mt-20">
        <h2 className=" text-5xl sm:text-6xl md:text-7xl font-semibold text-background pt-5 myName">
          <p className=" text-sm sm:text-base text-background font-normal">Interested in collaborating?</p>
          Contact me
        </h2>
        <p className="pt-5 text-background">
          Get in touch or email directly on
          <a className="font-bold pl-2" href="mailto:mo7ammed9290@gmail.com" target="_blank" rel="noreferrer">mo7ammed9290@gmail.com</a>
        </p>
      </article>
      <form action="https://formspree.io/f/mvonlarn" method="post" className="flex items-center justify-center flex-col w-full  sm:w-3/4 sm:min-w-[500px] my-10 sm:mb-20 px-20" id="contact-form">

        <div className="w-full relative flex sm:flex-row flex-col justify-between gap-10">
          <label htmlFor="full-name" className="w-full">
            <input
              type="text"
              id="full-name"
              placeholder="Full name"
              maxLength="30"
              required
              aria-required="true"
              className="border-0 p-[1rem] pl-0 relative bg-transparent  border-b-secondary border-b-[1px] border-solid w-full placeholder:text-secondary text-background focus:outline-0 focus:border-b-2 focus:border-b-accent focus:border-solid  focus:pl-2"
            />
          </label>
          <label htmlFor="email" className="w-full">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              required
              aria-required="true"
              className="placeholder:text-secondary border-0 p-[1rem] pl-0 relative bg-transparent  border-b-secondary border-b-[1px] border-solid w-full text-background focus:outline-0 focus:border-b-2 focus:border-b-accent focus:border-solid   focus:pl-2"
            />
          </label>
        </div>

        <div className="relative w-full flex">
          <label htmlFor="text-area-msg" className=" w-full">
            <textarea
              name="message"
              id="text-area-msg"
              maxLength="500"
              className="placeholder:text-secondary border-0 p-[1rem]
              pl-0 relative bg-transparent border-b-secondary border-b-[1px]
              border-solid
            focus:outline-0 focus:border-b-2 focus:border-accent  focus:border-solid  focus:pl-2
              w-full
              text-background
              mt-10"
              placeholder="Write me something..."
              required
              aria-required="true"
            />
          </label>
        </div>

        <div className="buttonContainer">
          <span className="error" />
          <button
            type="submit"
            aria-label="Send Message"
            className="btn rounded-xl bg-background text-text px-14 py-4 mt-10 w-60 text-lg cursor-pointer"
            id="getInTouch"
          >
            Get in touch
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactMe;
