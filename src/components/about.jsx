function About() {
  return (
    <>
      <section className=" mx-auto px-20 py-20 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="border-b-2 border-violet-600">Abo</span>ut Me
          </h2>
          <p className="text-white">
            {" "}
            My name is Zainab and I am a Frontend developer.I'm working with
            react and next.js, My goale is to become a professional Frontend
            Developer and build useful applications.
          </p>
          <button className="font-bold text-white mt-6 px-5 py-3 bg-violet-500 rounded-lg hover:bg-violet-700">
            Show More
          </button>
        </div>
        <div className="text-white">
          <h3 className="text-3xl font-semibold mb-4 text-violet-500">
            Hobbies   
          </h3>
          <ul className="list-disc pl-6 space-y-4 marker:text-violet-500">
            <li>Coding</li>
            <li>Reading</li>
            <li>Photography</li>
            <li>Traveling</li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default About;
