import { myProjects } from "../constants/index"

export const Projects = () => {
  const currentProject = myProjects[0];

  return (
    <section className="sm:px-10 px-5 my-20">
      <p className="text-xl font-semibold mb-2 text-white">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-[#0E0E10]">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div>

          <div className="flex flex-col gap-5 text-[#AFB0B6] my-5">
            <p className="text-white text-2xl font-semibold">{currentProject.title}</p>
            <p>{currentProject.desc}</p>
            <p>{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="w-10 h-10 rounded-md p-2 bg-neutral-900 border-1 border-gray-700 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a href=""></a>
          </div>

        </div>
      </div>
    </section>
  );
}