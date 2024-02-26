import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Box, Sphere } from "@react-three/drei";

const WaterMaterial = ({ waterTexture }) => {
  const material = useRef(
    new THREE.ShaderMaterial({
      uniforms: {
        waterTexture: { value: waterTexture },
        waterColor: { value: new THREE.Color(0x0089f9) },
        fresnelFactor: { value: 0.5 },
        cameraPosition: { value: new THREE.Vector3(0, 0, 5) }, // Adjust camera position as needed
      },
      //       vertexShader: ```uniform vec3 cameraPosition;
      // uniform mat4 modelMatrix;
      // uniform mat4 projectionMatrix;

      // attribute vec3 position;

      // varying vec3 vNormal;
      // varying vec3 vPositionW;

      // void main() {
      //   gl_Position = projectionMatrix * modelMatrix * vec4(position, 1.0);
      //   vNormal = normalize(mat3(modelMatrix) * normal);
      //   vPositionW = (modelMatrix * vec4(position, 1.0)).xyz;
      // }```,
      //       fragmentShader: ```
      //       uniform sampler2D waterTexture;
      // uniform vec3 waterColor;
      // uniform float fresnelFactor;

      // varying vec3 vNormal;
      // varying vec3 vPositionW;

      // void main() {
      //   vec3 viewDirection = normalize(cameraPosition - vPositionW);
      //   vec3 reflectDirection = reflect(viewDirection, vNormal);
      //   float fresnel = dot(viewDirection, vNormal);
      //   fresnel = max(0.0, pow(fresnel, fresnelFactor));
      //   vec3 refractedColor = texture2D(waterTexture, refract(viewDirection, vNormal, 1.0)).rgb;
      //   vec3 reflectedColor = texture2D(waterTexture, reflectDirection).rgb;
      //   gl_FragColor = mix(refractedColor, reflectedColor, fresnel) * waterColor;
      // }```,
    })
  );

  useEffect(() => {
    material.current.uniforms.waterTexture.value = waterTexture;
  }, [waterTexture]);

  return <meshBasicMaterial attach="material" {...material.current} />;
};

extend({ WaterMaterial });

function Water2() {
  const [waterTexture, setWaterTexture] = useState(null);

  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load("../../public/waternormal2.jpeg", (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      setWaterTexture(texture);
    });
  }, []);

  return (
    <Box args={[1, 1, 1]}>
      <WaterMaterial waterTexture={waterTexture} />
    </Box>
  );
}

export default Water2;
