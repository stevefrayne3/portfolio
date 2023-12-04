import hello from "../../assests/illustration/Hello-amico.svg";
import moniter from "../../assests/illustration/Monitor-bro.svg";
import collab from "../../assests/illustration/Live-collaboration.svg";
import explore from "../../assests/illustration/Market-launch.svg";

const Home = () => {
  return (
    <div className="card-container">
      {/* card 1 */}
      <section className="card">
        <div className="card-data">
          <div
            className="card-data-title"
            style={{ textAlign: "start", fontSize: "1.4rem" }}
          >
            <h1>
              YO <span>!</span>
            </h1>
            <h1>
              I'm <span className="span-color">Yash Avasekar</span>
            </h1>
            <h1>
              <span>Full Stack Developer | UI/UX Designer</span>
            </h1>
          </div>
          <div className="card-data-desc"></div>
        </div>
        <div className="card-image">
          <img src={hello} alt="" />
        </div>
      </section>

      {/* card 2 */}
      <section className="card">
        <div className="card-data">
          <div className="card-data-title">
            <h1>
              Let Me <span>Introduce Myself</span>
            </h1>
          </div>
          <div className="card-data-desc">
            <p className="card-data-sub-head">
              👨‍💻 <span className="span-color">Full Stack Developer</span>
            </p>
            <p className="card-data-desc-p">
              Fluent in the language of innovation, my expertise lies in
              <span className="span-color">full-stack developement</span>, with
              <span className="span-color"> Python</span> as my language of
              choice.
            </p>
            <p className="card-data-sub-head">
              🎨 <span className="span-color">UI/UX Designer</span>
            </p>
            <p className="card-data-desc-p">
              Beyond the lines of code, I'm{" "}
              <span className="span-color">passionate</span> about designing
              <span className="span-color"> user-centric</span> experiences.
            </p>
          </div>
        </div>
        <div className="card-image">
          <img src={moniter} alt="" />
        </div>
      </section>

      {/* card 3 */}
      <section className="card-2">
        <div className="card-2-data">
          <div className="card-2-data-title">
            <h1>
              Ready to embark on a <span className="span-color">journey</span>{" "}
              where <span className="span-color">technology</span> meets
              <span className="span-color"> creativity?</span>
            </h1>
            <h1>
              Let's <span className="span-color">build</span> something
              <span className="span-color"> extraordinary </span> together !
            </h1>
          </div>
        </div>
        <div className="card-2-image">
          <img src={collab} alt="" style={{ width: "25rem" }} />
        </div>
      </section>

      {/* card 4 */}
      <section className="card-2">
        <div className="card-2-data">
          <div className="card-2-data-title">
            <h1>
              Explore <span>My Work</span>
            </h1>
          </div>
        </div>
        <div className="card-2-image card-2-image-2">
          <img src={explore} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
