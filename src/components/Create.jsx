import React, { useState } from "react";

import jdArray from "./MyData"; 
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./Create.css"; // Import the cyberpunk CSS

function Create() {
    const [cname, setCname] = useState("");
    const [category, setCategory] = useState("");
    const [jdate, setJdate] = useState("");
    const [domain, setDomain] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!cname || !category || !jdate || !domain) {
            alert("All fields are required!");
            return;
        }

        const id = uuid().slice(0, 8); // Generate unique ID
        jdArray.push({ id, CompanyName: cname, CompanyCategory: category, JDdate: jdate, Domain: domain });

        navigate("/home"); // Redirect to Home page
    };

    return (
        <div className="cyberpunk-create-container">
            <h2 className="cyberpunk-header">Create New Job</h2>
            <form onSubmit={handleSubmit}>
                <div className="cyberpunk-form-group">
                    <label className="cyberpunk-label">Company Name</label>
                    <input
                        className="cyberpunk-input"
                        type="text"
                        placeholder="Enter Company Name"
                        value={cname}
                        onChange={(e) => setCname(e.target.value)}
                        required
                    />
                </div>

                <div className="cyberpunk-form-group">
                    <label className="cyberpunk-label">Category</label>
                    <input
                        className="cyberpunk-input"
                        type="text"
                        placeholder="Enter Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>

                <div className="cyberpunk-form-group">
                    <label className="cyberpunk-label">Posted Date</label>
                    <input
                        className="cyberpunk-input"
                        type="date"
                        value={jdate}
                        onChange={(e) => setJdate(e.target.value)}
                        required
                    />
                </div>

                <div className="cyberpunk-form-group">
                    <label className="cyberpunk-label">Domain</label>
                    <input
                        className="cyberpunk-input"
                        type="text"
                        placeholder="Enter Domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        required
                    />
                </div>

                <button className="cyberpunk-btn submit" type="submit">
                    Submit
                </button>

                <button 
                    className="cyberpunk-btn cancel" 
                    type="button" 
                    onClick={() => navigate("/home")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default Create;
