import { Suspense, useState } from "react";
import { myProjects } from "../constants/index"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei";
import { CanvasLoader } from "../Components/CanvasLoader"
import DemoComputer from "../Components/DemoComputer";

const projectCount = myProjects.length;

export const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNav = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction == 'prev') {
        return prevIndex == 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex == projectCount - 1 ? 0 : prevIndex + 1;
      }
    }
    )
  }

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

            <a className="flex items-center gap-2 cursor-pointer font-medium text-[#AFB0B6]" href={currentProject.href} target="_blank" rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNav('prev')}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
            </button>

            <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNav('next')}
            >
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>


        <div className="border-2 border-[#1C1C21] bg-black-[#0E0E10] rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />} >
                <group scale={2} position={[-0.45, -2.7, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} /> {/*It enables to move the model*/}
          </Canvas>
        </div>

      </div>
    </section>
  );
}