import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Rose = (props: any) => {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/rose.glb");

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Rose;

useGLTF.preload("/rose.glb");