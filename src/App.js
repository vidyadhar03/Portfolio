import { projects } from "./Data";

function App() {
  console.log(projects);

  return (
    <div className=" h-screen">
      <div className="p-6 font-medium text-4xl">Vidyadhar Gowd J</div>
      <div className="px-6 font-semibold">
        Github:{" "}
        <a
          href="https://github.com/vidyadhar03"
          target="_blank"
          className="hover:text-blue-800"
        >
          @vidyadhar03
        </a>
        <div>
          Contact: vidyadhariitkgp@gmail.com , +917478022333
        </div>
      </div>
      <div className="px-6 font-bold text-2xl mt-6">Projects</div>
      <div className="grid grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="">
            <div className="flex flex-col p-4 border-2 border-black-200 rounded-md shadow-md m-4 bg-white">
              <div className="mb-4 font-medium text-xl">{project.title}</div>
              <div className="flex">
                <div className="font-semibold mr-2">Tech Stack :</div>
                <div className=""> {project.stack}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
