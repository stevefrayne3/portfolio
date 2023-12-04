import know from "../../assests/illustration/Developer-activity.svg";
import education from "../../assests/illustration/Education.svg";
import expert from "../../assests/illustration/Experts.svg";
import skill from "../../assests/illustration/Application-programming.svg";
import anime from "../../assests/illustration/Tv.svg";

const About = () => {
  return (
    <div className="card-container">
      {/* card 1 */}
      <section className="card">
        <div className="card-data">
          <div className="card-data-title">
            <h1>
              Know Who <span>I Am</span>
            </h1>
          </div>
          <div className="card-data-desc">
            <p>
              Hello <span>there !</span>
            </p>
            <p>
              I'm <span style={{ fontStyle: "italic" }}>Yash Avasekar</span> and
              I'm more than just a{" "}
              <span>Full Stack Developer and UI/UX Designer</span>
            </p>
            <p>
              Let me share a bit about the person behind<span> the screen</span>
            </p>
          </div>
        </div>

        <div className="card-image">
          <img src={know} alt="developer" />
        </div>
      </section>

      {/* card 2 */}
      <section className="card">
        <div className="card-data">
          <div className="card-data-title">
            <h1>
              Educ<span>ation</span>
            </h1>
          </div>
          <div className="card-data-desc">
            <p>
              I hold a Bachelor's degree in{" "}
              <span>Computer Science Engineering </span>
              from Fabtech Technical College of Engineering <span>(FTCOE)</span>
              , Sangola.
            </p>
            <p>
              My academic <span>journey</span> has laid a solid foundation for
              my <span>technical endavours</span>, equipping me with a
              comprehensive understanding of engineering{" "}
              <span>principles.</span>
            </p>
          </div>
        </div>
        <div className="card-image">
          <img src={education} alt="developer" />
        </div>
      </section>

      {/* card 3 */}
      <section className="card">
        <div className="card-data">
          <div className="card-data-title">
            <h1>
              Professional <span>Journey</span>
            </h1>
          </div>
          <div className="card-data-desc">
            <p>As a Full-Stack Developer and UI/UX Designer,</p>
            <p>
              I find joy in the synergy of <span>technology</span> and{" "}
              <span>creativity</span>.
            </p>
            <p>
              Crafting seamless digital experiences is not just my profession;
              it's <span>my passion</span>.
            </p>
          </div>
        </div>

        <div className="card-image">
          <img src={expert} alt="developer" />
        </div>
      </section>

      {/* card 4 */}
      <section className="card">
        <div className="card-data">
          <div className="card-data-title">
            <h1>
              Ski<span>lls</span>
            </h1>
          </div>
          <div className="card-data-desc">
            <p>
              Designing with <span>Figma</span>
            </p>
            <p>
              Frontend developement with <span>HTML/CSS and React js</span>
            </p>
            <p>
              Backend developement with{" "}
              <span>Django / Django rest framework</span>
            </p>
            <p>
              Databases with <span>MySql ,Oracle</span>
            </p>
            <p>
              Other langauge{" "}
              <span>C / C++ ,Java ,Spring , Spring Boot ,Hibernate</span>
            </p>
          </div>
        </div>
        <div className="card-image">
          <img src={skill} alt="developer" />
        </div>
      </section>

      {/* card 5 */}
      <section className="card">
        <div className="card-data">
          <div className="card-data-title">
            <h1>
              Beyond <span>Code and Design</span>
            </h1>
          </div>
          <div className="card-data-desc">
            <p>
              Away from the keyboard, you'll find me diving into the vibrant{" "}
              <span>world of anime </span>, exploring captivating{" "}
              <span>manga</span>, and occasionally immersing myself in the
              virtual <span>realms of games</span>.
            </p>
            <p>
              These activites not only provide <span>entertaintment</span> but
              also <span>inspire creativity</span> in unexpected ways.
            </p>
          </div>
        </div>

        <div className="card-image">
          <img src={anime} alt="developer" />
        </div>
      </section>
    </div>
  );
};

export default About;
