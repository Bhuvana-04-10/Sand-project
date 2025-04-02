import { useState } from "react";
import "./Mycomponents/Footer.css";
import './App.css';
import './Mycomponents/Cname.css';
import Navbar from './Navbar';
import './Navbar.css';
import Site from "./Mycomponents/Site";
import Site2 from "./Mycomponents/Site2"; // Import Site2 component
import Footer from "./Mycomponents/Footer";
import Carousel from './Mycomponents/Carousel';
import Cname from './Mycomponents/Companyname';
import Cards from './Mycomponents/Cards';
import Database from "./Mycomponents/Database";  
import EditDatabase from "./Mycomponents/EditDatabase";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedSite, setSelectedSite] = useState(null);
  const [userAction, setUserAction] = useState(null);

  return (
    <div className="App">
      <Cname />
      <Navbar 
        setActiveTab={setActiveTab} 
        setSelectedSite={setSelectedSite} 
        setUserAction={setUserAction} 
        activeTab={activeTab} 
        selectedSite={selectedSite} 
      />

      {selectedSite ? (
        <div className="blank-page">
          {selectedSite === "site1" && <Site setActiveTab={setActiveTab} setSelectedSite={setSelectedSite} />}
          {selectedSite === "site2" && <Site2 setActiveTab={setActiveTab} setSelectedSite={setSelectedSite} />}
        </div>
      ) : (
        <>
          {activeTab !== "database" && activeTab !== "editDatabase" && activeTab !== "site" && (
            <>
              <Carousel />
              <Cards />
            </>
          )}
          {activeTab === "database" && <Database />}
          {activeTab === "editDatabase" && <EditDatabase />}
        </>
      )}
      
      <div className="footerdiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
