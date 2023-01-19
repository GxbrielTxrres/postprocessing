import {
	EffectComposer,
	ChromaticAberration,
	Glitch,
	Scanline,
	Pixelation,
	Noise,
	DotScreen,
	DepthOfField,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { useRef, useEffect } from "react";
import gsap from "gsap";
export function Effects({ option }) {
	const scanRef = useRef();
	useEffect(() => {
		gsap.to(scanRef.current, {
			bokehScale: 0,
			yoyo: true,
			repeat: -1,
			duration: 2.5,
		});
	});

	return (
		<EffectComposer>
			{option === 0 ? (
				<ChromaticAberration ref={scanRef} offset={[0.02, 0.05]} />
			) : null}
			{option === 1 ? (
				<Glitch
					delay={[0.5, 3.5]}
					ratio={0.5}
					mode={GlitchMode.SPORADIC}
				/>
			) : null}
			{option === 2 ? <Pixelation /> : null}
			{option === 3 ? <Scanline /> : null}
			{option === 4 ? <DotScreen /> : null}
		</EffectComposer>
	);
}
