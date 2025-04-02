import { FaUserCircle } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import React, { useState, useRef, useEffect } from "react";


function Dropdown({ setSelectedSite }) {  // Accept setSelectedSite as a prop
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown
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

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={toggleDropdown} style={{fontWeight:"600"}}>
      <FaUserCircle style={{  marginRight: "5px", marginTop: "-3px"}} /> Nishika 
      </div> 
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item" onClick={() => setSelectedSite("site1")}>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;



