import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import defaultimage from "../../assests/default.jpg";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    try {
      const FetchProjects = async () => {
        const response = await axios.get("/api/projects/");
        if (response.data) {
          setProjects(response.data);
        }
      };

      FetchProjects();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", padding: "0", margin: "0" }}>
        My <span> Recent Work</span>
      </h1>
      <div className="project-card-container">
        {/* card 1 */}
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card-image">
              <img
                src={defaultimage}
                alt=""
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
            <div className="project-card-data">
              <div className="project-card-data-title">
                <h3>{project.title}</h3>
              </div>
              <div className="project-card-data-desc">
                <p className="desc-size">{project.description}</p>
              </div>
              <div className="links">
                <Link to={project.demo} target="_blank">
                  Demo
                </Link>
                <Link to={project.source} target="_blank">
                  Source
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
