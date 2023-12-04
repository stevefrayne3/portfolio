import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Project, Resume } from "../screens";
import PageNotFound from "./PageNotFound";

const Main = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Main;

// eslint-disable-next-line no-lone-blocks
{
  /*  */
}
