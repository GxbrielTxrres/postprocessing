import { Html } from "@react-three/drei";
import styles from "../src/styles/Effects.module.css";
import { Effects } from "./Effects";
import { useRef, useState } from "react";
export default function EffectMenu() {
	const [option, setOption] = useState();
	const htmlRef = useRef();
	return (
		<>
			<Effects option={option} />
			<Html
				ref={htmlRef}
				center
				className={styles.effectMenu}
				position={[2, 17, 0]}
			>
				<div
					onClick={() => {
						htmlRef.current.style.display = "none";
					}}
					style={{ position: "absolute", top: 10, left: 10 }}
				>
					X
				</div>
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
							setOption(null);
						}}
					>
						Reset
					</button>
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
