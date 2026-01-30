import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Thing = (props: any) => {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/thing.glb");

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Thing;

useGLTF.preload("/thing.glb");