import "@/styles/globals.css";
import { Canvas } from "@react-three/fiber";
import { Model } from "components/Model";
import { Environment } from "@react-three/drei";
import Menu from "components/Menu";
import { useState } from "react";
import EffectMenu from "components/EffectMenu";
import { Moon } from "components/Moon";
export default function App({ Component, pageProps }) {
	const [wait, start] = useState(false);
	return (
		<div className="webgl">
			<Canvas camera={{ position: [0, 0, 0] }}>
				<Environment
					blur={1} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
					preset="dawn"
					background
				></Environment>
				<Model open={wait} />
				<Moon open={wait} />
				<Menu
					close={wait}
					start={start}
					rotation={[0, Math.PI / 1.55, 0]}
					position={[4.67, 11.125, -2.56]}
					text="Press"
				/>
				<EffectMenu />
			</Canvas>
			<Component {...pageProps} />
		</div>
	);
}
