import React, { useState } from "react";
import { useNavigate, Link, BrowserRouter } from "react-router-dom";
import MyData from "./MyData";
import NavScrollExample from "./NavScrollExample";
import "./Home.css"; // Make sure to create this file with the CSS above

function Home() {
    
    const navigate = useNavigate();

    // State for job data
    const [jdArray, setJdArray] = useState(MyData);

    function setID(id, cname, category, jdate, domain) {
        localStorage.setItem("id", id);
        localStorage.setItem("CompanyName", cname);
        localStorage.setItem("CompanyCategory", category);
        localStorage.setItem("JDdate", jdate);
        localStorage.setItem("Domain", domain);
        navigate("/edit");
    }

    function deleted(id) {
        const updatedList = jdArray.filter(item => item.id !== id);
        setJdArray(updatedList);
    }

    return (
        <div className="cyberpunk-container">
            <h1 className="cyberpunk-header">Job Details</h1>

            {/* Create Button */}
            <div className="mb-3">
                <Link to="/create" className="cyberpunk-btn create">
                    Create Job
                </Link>
            </div>

            <table className="cyberpunk-table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Category</th>
                        <th>Posted Date</th>
                        <th>Domain</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jdArray.map((item, index) => (
                        <tr key={index}>
                            <td>{item.CompanyName}</td>
                            <td>{item.CompanyCategory}</td>
                            <td>{item.JDdate}</td>
                            <td>{item.Domain}</td>
                            <td className="cyberpunk-actions">
                                <button 
                                    className="cyberpunk-btn update"
                                    onClick={() => setID(item.id, item.CompanyName, item.CompanyCategory, item.JDdate, item.Domain)}
                                >
                                    Update
                                </button>
                                <button 
                                    className="cyberpunk-btn delete"
                                    onClick={() => deleted(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;