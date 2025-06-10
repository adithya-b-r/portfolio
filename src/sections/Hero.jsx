import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { HackerRoom } from "../Components/HackerRoom"

export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
        <p className="sm:text-3xl text-2xl font-semibold text-white text-center">
          Hey, I am Adithya B R<span className="waving-hand">👋</span>
        </p>

        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal text-gray_gradient text-white">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HackerRoom />
        </Canvas>
      </div>

    </section>
  )
}  