import { MdPlace } from "react-icons/md";
import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Dropdown({ setSelectedSite, setActiveTab }) {  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSiteClick = (site) => {
    setSelectedSite(site);
    setActiveTab("site");  // Mark site as the active tab
    setIsOpen(false); 
  };

  return (
    <div className="dropdown" ref={dropdownRef} style={{ fontWeight: "600" }}>
      <div onClick={toggleDropdown}>
        <MdPlace style={{ marginRight: "0px", marginTop: "-3px", fontWeight: "600" }} /> Site
        <IoMdArrowDropdown />
      </div> 
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => handleSiteClick("site1")}>Site 1</li>
          <li className="dropdown-item" onClick={() => handleSiteClick("site2")}>Site 2</li>
          <li className="dropdown-item" onClick={() => handleSiteClick("site3")}>Site 3</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;


