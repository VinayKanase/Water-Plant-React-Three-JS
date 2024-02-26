import React, { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

function WaterScene() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "../../public/waternormal2.jpeg"
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(
    () => new THREE.CylinderGeometry(800, 800, 2000, 40000),
    []
  );
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      // sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x0289f9,
      distortionScale: 10,
      fog: false,
      format: gl.encoding,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals]
  );
  useMemo(() => {
    if (ref.current) {
      ref.current.material.side = THREE.DoubleSide;
    }
  }, [ref]);
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI * 2}
      position={[0, 0, 0]}
      material-side={THREE.DoubleSide}
    />
  );
}

export default WaterScene;
