import Fade from "react-reveal/Fade";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0a833731-f0d6-45e5-bad5-133c7191540b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <Fade bottom delay={150} duration={1000}>
          <div className="pb-8 ">
            <p className="text-6xl font-bold inline border-b-4 border-amber-400 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300  py-4">
              Submit the form below or send me a message +351 910 900 313
            </p>
          </div>
        </Fade>

        <Fade bottom delay={200} distance={"6rem"} duration={1000}>
          <input
            className="bg-[#ccd6f6] p-4"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-4 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </Fade>

        <Fade bottom delay={250} duration={1000}>
          <button className="text-white border-2 hover:bg-amber-400 hover:border-amber-400 px-4 py-4 my-8 mx-auto flex items-center font-bold">
            Let's Collaborate
          </button>
        </Fade>
      </form>
    </div>
  );
};
