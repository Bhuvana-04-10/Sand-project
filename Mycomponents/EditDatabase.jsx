import React, { useState, useRef, useEffect } from 'react';
import './Datepicker.css';
import EditDropdown from './EditDropdown'; // Import the dropdown component

export default function EditDatabase() {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is open
  const dropdownRef = useRef(null); // Reference for detecting clicks outside

  const toggleDropdown = (dropdownType) => {
    setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType); // Toggle logic
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      {/* First Navbar */}
      <div className="Navbar1" onClick={() => toggleDropdown('sites')} style={{backgroundColor:"rgb(0, 119, 182)",color:"white",fontWeight:"600",width:"97%"}}>
        <div className="left1"  style={{backgroundColor:"rgb(0, 119, 182)"}}>Edit Sites</div>
      </div>
      {activeDropdown === 'sites' && <EditDropdown title="Site" />}

      {/* Second Navbar */}
      <div className="Navbar1" onClick={() => toggleDropdown('companies')} style={{backgroundColor:"rgb(0, 119, 182)",color:"white",fontWeight:"600",width:"97%"}}>
        <div className="left1" style={{backgroundColor:"rgb(0, 119, 182)"}}>Edit Companies</div>
      </div>
      {activeDropdown === 'companies' && <EditDropdown title="Company" />}

      {/* Third Navbar */}
      <div className="Navbar1" onClick={() => toggleDropdown('vehicles')} style={{backgroundColor:"rgb(0, 119, 182)",color:"white",fontWeight:"600",width:"97%"}}>
        <div className="left1" style={{backgroundColor:"rgb(0, 119, 182)"}}>Edit Vehicle No.</div>
      </div>
      {activeDropdown === 'vehicles' && <EditDropdown title="Vehicle No." />}
    </div>
  );
}
