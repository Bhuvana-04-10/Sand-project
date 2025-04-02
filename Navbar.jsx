import { MdPlace } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { BsDatabaseFillAdd } from "react-icons/bs";
import Dropdown from './Mycomponents/Dropdown';
import './Mycomponents/Dropdown.css';
import Dropdown1 from "./Mycomponents/Nishika";

function Navbar({ setActiveTab, setSelectedSite, setUserAction, activeTab, selectedSite }) {  
    return (
        <div className="Navbar">
          <div className="left">
            <div 
              className={`anchordivs ${activeTab === "home" && !selectedSite ? "active" : ""}`} 
              onClick={() => { 
                setActiveTab("home");
                setSelectedSite(null);
                setUserAction(null);
              }}
            >
              <FaHome className="icons" style={{ marginRight: "5px", marginTop: "-3px" }} /> Home
            </div>
            
            <div 
              className={`anchordivs database ${activeTab === "database" ? "active" : ""}`} 
              onClick={() => {
                setActiveTab("database");
                setSelectedSite(null);
                setUserAction(null);
              }}
            >
              <FaDatabase style={{ marginRight: "5px", marginTop: "-3px" }} /> Database  
            </div>

            <div 
              className={`anchordivs ${activeTab === "editDatabase" ? "active" : ""}`} 
              onClick={() => {
                setActiveTab("editDatabase");
                setSelectedSite(null);
                setUserAction(null);
              }}
            >
              <BsDatabaseFillAdd style={{ marginRight: "5px", marginTop: "-3px" }} /> Edit Database  
            </div>

            {/* Dropdown for Site Selection */}
            <div className={`anchordivs dropdown ${selectedSite ? "active" : ""}`}>
              <Dropdown setSelectedSite={setSelectedSite} setActiveTab={setActiveTab} />
            </div>
          </div>
          
          <div className="right">
              <div className="anchordivs">
                <Dropdown1 setUserAction={setUserAction} />
              </div>
          </div>
        </div>
    );
}

export default Navbar;

