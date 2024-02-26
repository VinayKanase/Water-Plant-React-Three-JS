import React from "react";
import WaterScene from "./Water";
import { Water } from "three/examples/jsm/objects/Water.js";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
extend({ Water });

function CylinderModel({ geometry, material, position, rotation }) {
  material.opacity = 0.5;
  material.transparent = true;
  return (
    <group>
      <mesh
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
      />
      <WaterScene />
    </group>
  );
}

export default CylinderModel;
