const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="tracking-widest max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Welcome to my portfolio website! My name is Rajdeep Singh, and I am a
          passionate Full Stack Developer specializing in creating user-friendly
          web applications using the MERN Stack. With a strong background in BCA
          (Bachelor of Computer Applications). I am a highly collaborative team
          player who values open communication. I am excited about remaining
          current with industry trends and technology, and I am continually
          increasing my knowledge in order to create unique solutions that match
          the changing needs of users.
        </p>
        <br />
        <p className="text-xl">
          Beyond coding, I enjoy problem-solving, brainstorming creative
          solutions, and continuously learning to enhance my skills. I believe
          in the power of technology to make a positive impact on people&apos;s
          lives, and I am excited to contribute to projects that have the
          potential to shape the future.
        </p>
        <br />
        <p className="text-xl">
          Feel free to explore my portfolio and check out some of the projects I
          have worked on. If you have any inquiries or would like to
          collaborate, I would love to hear from you. Let&apos;s build something
          incredible together!
        </p>
      </div>
    </div>
  );
};

export default About;
