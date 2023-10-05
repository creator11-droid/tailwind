import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section>
      <SectionTitle className="bg-white py-20" text="About" />
      <div className="align-contents grid md:grid-cols-2 item-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am an efficient Full-Stack developer , i schooled in the
            University of Benin, Nigeria. I enjoy playing games and reading on
            my free time.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
