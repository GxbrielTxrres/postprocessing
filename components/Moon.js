/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/moon-4db2273f6dd943b8ad7fa5e3b1b2431a
title: Moon
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
export function Moon(props) {
	const moonRef = useRef();
	function moonAnim() {
		gsap.to(moonRef.current.position, {
			y: 130,
			x: -2,
			duration: 3,
			delay: 1,
		});
	}

	useFrame((state) => {
		moonRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25);
		moonRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.25);
	});
	if (props.open) {
		moonAnim();
	}

	const { nodes, materials } = useGLTF("/moon.glb");
	return (
		<group
			ref={moonRef}
			scale={0.08}
			position={[-5, 50, 120]}
			{...props}
			dispose={null}
		>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Sphere_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/moon.glb");