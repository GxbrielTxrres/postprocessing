import { Html } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
export default function Menu(props) {
	const planeRef = useRef();
	const textRef = useRef();

	function meshFade() {
		gsap.to(planeRef.current.material, { opacity: 0, duration: 2 });
		gsap.to(textRef.current, { opacity: 0, duration: 2 });
		props.start(true);
	}

	return (
		<mesh
			ref={planeRef}
			onPointerDown={meshFade}
			position={props.position}
			rotation={props.rotation}
		>
			<planeGeometry args={[0.05, 0.1, 20, 20]} />
			<meshBasicMaterial transparent opacity={0.65} />
			<Html
				ref={textRef}
				center
				transform
				distanceFactor={0.25}
				position-z={0.01}
			>
				{props.text}
			</Html>
		</mesh>
	);
}
