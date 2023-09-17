import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Upload Continusly with VS code,Git hub, and Netlify</h1>
            <p>This tutorial will give you step by step  process to continously upload to neflify with just your vs code when you connet it with gihtub !.</p>
            <Link to="vans">Show me how</Link>
        </div>
    )
};