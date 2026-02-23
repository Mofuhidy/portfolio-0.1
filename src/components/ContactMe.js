import { useForm, ValidationError } from '@formspree/react';

function ContactMe() {
  const [state, handleSubmit] = useForm('mvonlarn');
  if (state.succeeded) {
    return (
      <div className=" bg-primary h-full md:px-20 py-0 px-4 flex flex-col items-center">
        <article className="text-center mb-6 mt-10 sm:mt-20">
          <h2 className=" text-5xl sm:text-6xl md:text-7xl font-semibold text-background pt-5 myName">
            <p>Thanks for contacting!</p>
          </h2>

        </article>
      </div>

    );
  }

  return (
    <div className=" bg-primary h-full md:px-20 py-0 px-4 flex flex-col items-center" id="contact">
      <article className="text-center mb-6 mt-10 sm:mt-20">
        <h2 className="myName text-5xl sm:text-6xl md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-background to-background/70 tracking-tight pt-5">
          <p className="text-sm sm:text-lg text-background/80 font-medium uppercase tracking-widest mb-4 font-sans">Interested in collaborating?</p>
          Contact me
        </h2>
        <p className="pt-5 text-background">
          Get in touch or email directly on
          <a className="font-bold pl-2" href="mailto:mo7ammed9290@gmail.com" target="_blank" rel="noreferrer">mo7ammed9290@gmail.com</a>
        </p>
      </article>
      <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col w-full  sm:w-3/4 sm:min-w-[500px] my-10 sm:mb-20 px-20" id="contact-form">

        <div className="w-full relative flex sm:flex-row flex-col justify-between gap-10">
          <label htmlFor="full-name" className="w-full">
            <input
              type="text"
              id="full-name"
              placeholder="Full name"
              name="fullname"
              maxLength="30"
              required
              aria-required="true"
              className="border-0 p-4 pl-0 relative bg-transparent border-b-secondary/50 border-b-2 border-solid w-full placeholder:text-secondary/70 text-background focus:outline-0 focus:border-b-accent transition-all duration-300 focus:pl-4 focus:bg-white/5 rounded-t-lg"
            />
          </label>
          <label htmlFor="email" className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
              aria-required="true"
              className="placeholder:text-secondary/70 border-0 p-4 pl-0 relative bg-transparent border-b-secondary/50 border-b-2 border-solid w-full text-background focus:outline-0 focus:border-b-accent transition-all duration-300 focus:pl-4 focus:bg-white/5 rounded-t-lg"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-[#e83b46]"
            />
          </label>
        </div>

        <div className="relative w-full flex">
          <label htmlFor="text-area-msg" className=" w-full">
            <textarea
              name="message"
              id="text-area-msg"
              maxLength="500"
              className="placeholder:text-secondary/70 border-0 p-4 pl-0 relative bg-transparent border-b-secondary/50 border-b-2 border-solid focus:outline-0 focus:border-b-accent transition-all duration-300 focus:pl-4 focus:bg-white/5 rounded-t-lg w-full text-background mt-10 min-h-[120px] resize-y"
              placeholder="Write me something..."
              required
              aria-required="true"
            />
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="buttonContainer">
          <span className="error" />
          <button
            type="submit"
            disabled={state.submitting}
            aria-label="Send Message"
            aria-busy={state.submitting}
            className="btn rounded-full bg-white text-primary font-bold px-14 py-4 mt-12 w-64 text-lg cursor-pointer
            hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] active:scale-95 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2 mx-auto"
            id="getInTouch"
          >
            {state.submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : 'Get in touch'}
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactMe;
