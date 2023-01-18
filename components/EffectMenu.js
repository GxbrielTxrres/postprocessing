import { Html } from "@react-three/drei";
import styles from "../src/styles/Effects.module.css";
import { Effects } from "./Effects";
import { useState } from "react";
export default function EffectMenu() {
	const [option, setOption] = useState();
	return (
		<>
			<Effects option={option} />
			<Html center className={styles.effectMenu} position={[2, 17, 0]}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "",
					}}
				>
					<h1 style={{ textAlign: "center" }}>Effect Menu</h1>

					<button
						onClick={() => {
							setOption(0);
						}}
					>
						3D Effect
					</button>
					<button
						onClick={() => {
							setOption(1);
						}}
					>
						Glitch
					</button>
					<button
						onClick={() => {
							setOption(2);
						}}
					>
						Pixelate
					</button>
					<button
						onClick={() => {
							setOption(3);
						}}
					>
						Scanlines
					</button>
					<button
						onClick={() => {
							setOption(4);
						}}
					>
						Dot Screen
					</button>
				</div>
			</Html>
		</>
	);
}
