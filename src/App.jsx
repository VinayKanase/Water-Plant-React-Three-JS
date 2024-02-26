import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import "./App.css";
import Sphere from "./components/Sphere";
import { Model } from "./components/Model";
import { Center, Environment, OrbitControls, Sky } from "@react-three/drei";
import WaterScene from "./components/Water";
import WaterBox from "./components/WaterBox";
import { Model2 } from "./components/Model2";
import Water2 from "./components/Water2";

function App() {
  return (
    <Canvas
      shadows
      style={{
        height: "100vh",
        width: "100vw",
      }}
      camera={{ position: [0, 0, -80] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <ambientLight intensity={0.5} /> */}
      {/* <pointLight position={[0, 0, 0]} /> */}
      <Environment files="/potsdamer_platz_1k.hdr" />
      <OrbitControls />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
      {/* <Sphere position={[-4, 0, 0]} /> */}
      {/* <spotLight position={[10, 20, 10]} angle={0.3} penumbra={1} castShadow /> */}
      <Sky />
      <Center>
        <Model2 />
        {/* <WaterScene /> */}
        {/* <WaterBox /> */}
      </Center>
    </Canvas>
  );
}

export default App;
