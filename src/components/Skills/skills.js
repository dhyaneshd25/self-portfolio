import React from "react";
import { Link } from "react-scroll";
import './skillstyle.css'
const Skills=()=>{
    return (<section id="skills">
        <h1 className="h">Skills</h1>
 <section id="skill">
    <div className="skill-container">
        <div>
        <span>Languages</span>
        </div>
        <div className="card-container">
        <div className="card"><img src="c.png"/>C</div>
        <div className="card"><img src="c++.png"/>C++</div>
        <div className="card"><img src="java.png"/>Java</div>
        <div className="card"><img src="python.png"/>Python</div>
        <div className="card"><img src="javascript.png"/>Javascript</div>
        <div className="card"><img src="html.png"/>HTML</div>
        </div>
    </div>
    <div className="skill-container">
        <div>
        <span>Frameworks and Tools</span>
        </div>
        <div className="card-container">
        <div className="card"><img src="css.png"/>CSS</div>
        <div className="card"><img src="react.png"/>React Js</div>
        <div className="card"><img src="github.png"/>Github</div>
        <div className="card"><img src="git.png"/>Git</div>
        <div className="card"><img src="figma.png"/>Figma</div>
        <div className="card"><img src="vscode.png"/>VS Code</div>
        <div className="card"><img src="eclipse.png"/>Eclipse</div>
        </div>
    </div>
    <div className="skill-container">
        <div>
        <span>Core Subjects</span>
        </div>
        <div className="card-container">
        <div className="card">Database Management System</div>
        <div className="card">Operating System</div>
        <div className="card">Object-Oritend Programming</div>
        <div className="card">Computer Network</div>
        <div className="card">Design Patterns</div>
        </div>
    </div>

 </section>
    </section>
    );
}

export default Skills;