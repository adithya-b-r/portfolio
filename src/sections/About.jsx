import Globe from "react-globe.gl"
import { Button } from "../Components/Button"
import { useState } from "react"

export const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bradithya614@gmail.com")

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  }

  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border-2 border-[#1C1C21] bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">Hi, I'm Adithya</p>
              <p className="text-[#afb0b6] text-base font-medium">With 2 years of experience, I have honed my skills in frontend and backend development, with a focus on animation 3D websites.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border-2 border-[#1C1C21] bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 justify-between items-center">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">Tech Stack</p>
              <p className="text-[#afb0b6] text-base font-medium">I specialize in Javascript/TypeScript with a focus on React and Next.js ecosystems.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border-2 border-[#1C1C21] bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={2}
                showAtmosphere
                showGraticules
                // globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                // globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 15.3173, lng: 75.7139, text: "Karnataka, India", color: 'white', size: 20 }]}
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white">I work remotely across most timezones.</p>
              <p className="text-[#afb0b6] text-base font-medium">I'm based in Karnataka, India, and open to remote opportunities worldwide.</p>
              <Button name="Contact Me" isBeam containerClass={"w-full mt-10"} />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border-2 border-[#1C1C21] bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">My Passion for Coding.</p>
              <p className="text-[#afb0b6] text-base font-medium">I love solving problems and building things though code. Coding isn't just my profession - it is my passion.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border-2 border-[#1C1C21] bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base text-center font-medium">Contact Me</p>
              <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">bradithya614@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}