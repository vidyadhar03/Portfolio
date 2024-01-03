import { projects } from "./Data";

function App() {
  console.log(projects);

  return (
    <div className="bg-slate-200">
      <div className="px-6 py-4 font-medium text-6xl ">Vidyadhar Gowd</div>

      {/* <div className="px-6 font-semibold">
        Github:{" "}
        <a
          href="https://github.com/vidyadhar03"
          target="_blank"
          className="hover:text-blue-800"
        >
          @vidyadhar03
        </a>
        <div>Contact: vidyadhariitkgp@gmail.com , +917478022333</div>
      </div> */}

      <div className="px-6 py-4 font-semibold text-xl w-96 break-words">
        Senior Software Engineer with over 3 years of experience with passion to
        develop useful websites for people.
      </div>

      <div className="flex rounded-xl shadow-lg mx-12 my-8">
        <div className="flex-1 p-8 text-xl text-center font-medium border-gray-800 border-r-2 my-2">
          Bajaj Finserv Ltd.
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-cente text-lg text-center px-6">
            Wroked on 3in1 App and managed 7 out of the 23 App modules and did
            android development of store locator module using MMI Map SDK.
          </div>
        </div>
      </div>

      <div className="px-6 font-bold text-2xl mt-6">Full Stack Projects</div>

      <div className="grid grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-4 border-2 rounded-xl shadow-lg my-4 mx-12 bg-blur"
          >
            <div className="mb-4 font-medium text-xl ">{project.title}</div>
            <div className="mb-2 ">{project.description}</div>
            <div className="flex ">
              <div className="font-semibold mr-2">Tech Stack :</div>
              <div className="">{project.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
