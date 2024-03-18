import Lottie from "react-lottie";
import {
  about_description,
  about_title,
  intro_description,
  intro_link,
  intro_title,
  LottieFiles,
  skill_description,
  skill_title,
} from "./home_data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-sections">
        <Intro />
        <HiAside />
      </div>

      <div className="container-sections">
        <Aboutme />
        <AboutAside />
      </div>

      <div className="container-sections">
        <Skills />
        <SkillsAside />
      </div>
    </>
  );
};

//  intro

const Intro = () => {
  return (
    <section>
      {intro_title.map((title) => (
        <>
          <h1>{title[0]}</h1>
          <h1>
            {title[1]} <span className="fancy-color">{title[2]}</span>
          </h1>
          <h1 className="full-stack-margin">
            {title[3]} <span className="fancy-color">{title[4]}</span>
          </h1>
        </>
      ))}

      {/* descrition */}
      {intro_description.map((desc) => (
        <li className="p-intro-line-height" key={desc}>
          {desc}
        </li>
      ))}

      <br />
      <br />
      <br />

      {/* project link */}
      <Link className="project-link" to={"/project"}>
        {intro_link[0]} &gt;
      </Link>
    </section>
  );
};

const HiAside = () => {
  return (
    <aside>
      <Lottie options={LottieFiles[0]} />
    </aside>
  );
};

// about me

const Aboutme = () => {
  return (
    <section>
      <h2>{about_title[0]}</h2>
      <h1>
        {about_title[1]} <span className="fancy-color">{about_title[2]}</span>
      </h1>

      {/* description */}
      {about_description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </section>
  );
};

const AboutAside = () => {
  return (
    <aside>
      <Lottie options={LottieFiles[1]} />
    </aside>
  );
};

// skills
const Skills = () => {
  return (
    <section>
      <h1>
        {skill_title[0]} <span className="fancy-color">{skill_title[1]}</span>
      </h1>
      {skill_description.map((desc) => (
        <p className="skills-list-style" key={desc}>
          &gt; <span>{desc[0]}</span> {desc[1]}
        </p>
      ))}
    </section>
  );
};

const SkillsAside = () => {
  return (
    <aside>
      <Lottie options={LottieFiles[2]} />
    </aside>
  );
};

export default Home;
