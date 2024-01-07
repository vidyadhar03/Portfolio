import { projects } from "./Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [showmail, setShowmail] = useState(false);

  return (
    <div class="parent">
      <div className="font-medium text-6xl">Vidyadhar Gowd</div>

      <div class="info">
        <div className="flex items-center">
          <img src="./githublogo.png" className="w-8 h-8" />
          <a
            href="https://github.com/vidyadhar03"
            target="_blank"
            className="font-semibold underline hover:no-underline"
          >
            vidyadhar03
          </a>
        </div>
        <div
          class="touch"
          onClick={() => {
            showmail ? setShowmail(false) : setShowmail(true);
          }}
        >
          <img src="./gmailogo.png" className="w-6 h-6 mx-1" />
          Get in touch
        </div>
        <div class="email">
          {showmail && <div>vidyadhariitkgp@gmail.com</div>}
        </div>
      </div>

      <div class="designation">
        Senior Software Engineer with over 3 years of experience with passion to
        develop useful websites for people.
      </div>

      <div class="experiencediv">
        <div class="exptitle">
          <div className="cursor-pointer underline hover:no-underline ">
            <a href="https://www.bajajfinserv.in/" target="_blank">
              Bajaj Finserv Ltd.
            </a>
          </div>
          <div className="text-xl mt-1">2020-2023</div>
        </div>
        <div class="expdesc">
          Wroked on 3in1 App and managed 7 out of the 23 App modules and did
          android development of store locator module using MMI Map SDK.
          <br />
          Wroked on 3in1 App and managed 7 out of the 23 App modules and did
          android development of store locator module using MMI Map SDK.
        </div>
      </div>

      <div className="font-bold text-2xl mt-8 ">Projects</div>

      <div class="projectsdiv">
        {projects.map((project, index) => (
          <div key={index} class="projectinddiv">
            <div className="flex mb-4 ">
              <div className="flex-1 font-bold text-2xl underline hover:no-underline cursor-pointer">
                <a href={project.sitelink} target="_blank">
                  {project.title}
                </a>
              </div>
              <div className="flex-1  flex justify-end">
                <a href={project.github} target="_blank">
                  <img src="./githublogo.png" className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="mb-2 text-lg">{project.description}</div>

            <div className=" text-md">
              <div className="font-semibold mt-2 ">Built With:</div>
              <div className="">{project.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
