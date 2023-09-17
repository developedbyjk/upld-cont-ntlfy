import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Steps</h1>
                <ul>
                    <li>dont forget to add git ignore</li>
                    <li>
                        git ignore will have files like npm,etc that we dont wan to uplod 
                    </li>
                    <li>
                    then do This.. git init then git status.. then git add . then git commit -m 'message' then git push
                    </li>
                    <li>then it will be uploded to github</li>

<li>this is your react proejct so netlfiy will automatically understand and apply</li>                
                <li>once you build </li>
                <li>boom you didi it</li>
                <li>continously deployment started</li>
                <li>next time just do git pull then.. git add . then git commit -m 'msg' then git push</li>



</ul>
            </div>
            <div className="about-page-cta">
                <h2>hope you learn something new. checkout our other learnings</h2>
                <Link className="link-button" to="/vans">I wanna learn!</Link>
            </div>
        </div>
    );
}