import { useEffect, useState } from "react";
import axios from "axios";
import SUM from "./SUM";
import Footer from "./componenets/Footer";
import Main from "./componenets/Main";
import Navigation from "./componenets/Navigation";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    try {
      const checkServerConnection = async () => {
        const response = await axios.get("/admin/");
        if (response) {
          setIsConnected(true);
        }
      };
      checkServerConnection();
    } catch (error) {
      setIsConnected(false);
    }
  }, []);

  return (
    <div className="App">
      {isConnected ? (
        <>
          <Navigation />
          <Main />
          <Footer />
        </>
      ) : (
        <SUM />
      )}
    </div>
  );
}

export default App;
