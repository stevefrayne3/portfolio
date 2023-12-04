import axios from "axios";
import { useEffect, useState } from "react";
import instagram from "../../assests/icons/instagram/instagram.svg";
import github from "../../assests/icons/github/github.json";
import linkedin from "../../assests/icons/linkedin/linkedin.json";
import gmail from "../../assests/icons/gmail.svg";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    try {
      const FetchContact = async () => {
        const response = await axios.get("/api/contact/");
        if (response.data) {
          setContacts(response.data);
        }
      };

      FetchContact();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="card-container">
      <h1 style={{ marginTop: "0", textAlign: "center" }}>
        Connect <span>With Me</span>
      </h1>
      {contacts.map((contact) => (
        <div className="contact-icons-container" key={contact.id}>
          <div className="contact-icons">
            <Link
              to={contact.instagram}
              style={{ display: "flex" }}
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </Link>
          </div>
          <div className="contact-icons">
            <Link to={contact.github} style={{ display: "flex" }} target="_blank">
              <Lottie animationData={github} />
            </Link>
          </div>
          <div className="contact-icons">
            <Link to={contact.linkedin} style={{ display: "flex" }} target="_blank">
              <Lottie animationData={linkedin} />
            </Link>
          </div>
          <div className="contact-icons">
            <Link to={contact.gmail} style={{ display: "flex" }} target="_blank">
              <img src={gmail} alt="gmail" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
