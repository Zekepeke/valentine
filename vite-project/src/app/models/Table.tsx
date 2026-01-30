import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Table = (props: any) => {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/table.glb");

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Table;

useGLTF.preload("/table.glb");