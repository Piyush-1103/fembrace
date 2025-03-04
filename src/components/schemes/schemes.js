import React, { useState } from "react";
import "./schemes.css";

const schemesData = [
  {
    id: 1,
    name: "Pradhan Mantri Matru Vandana Yojana",
    description: "A maternity benefit scheme for pregnant and lactating women."
  },
  {
    id: 2,
    name: "Beti Bachao Beti Padhao",
    description: "A government initiative to promote girl child education and welfare."
  },
  {
    id: 3,
    name: "Janani Suraksha Yojana",
    description: "A scheme to promote institutional deliveries and reduce maternal mortality."
  },
  {
    id: 4,
    name: "Mahila Shakti Kendra",
    description: "Empowers rural women through community participation."
  }
];

const Schemes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchemes = schemesData.filter(scheme =>
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="schemes-container">
      <h2>Government Schemes</h2>
      <input
        type="text"
        placeholder="Search schemes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="schemes-list">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="scheme-card">
              <h3>{scheme.name}</h3>
              <p>{scheme.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No schemes found.</p>
        )}
      </div>
    </div>
  );
};

export default Schemes;
