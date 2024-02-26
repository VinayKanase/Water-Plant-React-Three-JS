import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const WaterBox = () => {
  const boxRef = useRef();
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "../../public/waternormal2.jpeg"
  );
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={boxRef} position={[0, 1, 0]} receiveShadow>
      <boxGeometry args={[10, 10, 10]} />
      <MeshWobbleMaterial
        factor={0.5} // Wobbling factor
        speed={2} // Wobbling speed
        map={waterNormals} // Your water texture
        color={0x0289f9} // Water color
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default WaterBox;
