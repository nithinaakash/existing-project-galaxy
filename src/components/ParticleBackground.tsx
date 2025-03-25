import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load the slim version of tsparticles
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles container loaded", container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // Your particle configuration here
      }}
    />
  );
}

export default ParticleBackground;