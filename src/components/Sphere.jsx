import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Sphere(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Adding rotation grade per each frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 4 : 1}
      onClick={(e) => {
        setActive(!active);
        setHover(!hovered);
      }}
    >
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshBasicMaterial
        wireframe
        attach="material"
        color={hovered ? "yellow" : "pink"}
      />
    </mesh>
  );
}

export default Sphere;
