import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../Components/HackerRoom"
import { Suspense } from "react"
import { CanvasLoader } from "../Components/CanvasLoader"
// import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"

import { calculateSizes } from "../constants/index"
import { Target } from "../Components/Target"
import ReactLogo from "../Components/ReactLogo"
import Rings from "../Components/Rings"
import Cube from "../Components/Cube"
import { HeroCamera } from "../Components/HeroCamera"
import { Button } from "../Components/Button"

export const Hero = () => {
  // const controls = useControls('HackerRoom',
  //   {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     rotationX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     rotationY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     rotationZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     scale: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     }
  //   }
  // )

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 gap-3">
        <p className="sm:text-3xl text-2xl font-semibold text-center text-gray-300">
          Hey, I am Adithya B R<span className="waving-hand">👋</span>
        </p>

        <p className=" text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal text-gray_gradient text-white">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/*<Leva controls />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // position={[0, 0, 0]}
                // rotation={[0, 280, 0]}
                // scale={0.05}
                // position={[2, -8, 2]}
                // rotation={[0, -Math.PI, 0]}
                // scale={[0.1, 0.1, 0.1]}
                // scale={isMobile ? 0.07 : 0.1}

                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group> {/*renderOrder={100}*/}
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
              <Target position={sizes.targetPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>

    </section>
  )
}  