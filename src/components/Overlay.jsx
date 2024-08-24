import { Scroll } from "@react-three/drei";

const Section = (props) => {
	return (
		<section
			className={`h-screen flex flex-col justify-start mx-40 pt-20 gap-20 ${
				props.right ? "items-end" : "items-start"
			}`}
		>
			{props.children}
		</section>
	);
};

export const Overlay = () => {
	return (
		<Scroll html>
			<div className="w-screen max-h-screen">
				<Section>
					{/* <p>
						Powered <br /> by CGC landran
					</p> */}
					<h1 className="font-anton text-4xl pb-10">
						Khushal Grover
					</h1>

					<div className="flex flex-col gap-10">
						<div className="flex flex-col w-[420px] gap-5">
							<h1 className="font-rubik text-5xl tracking-widest">
								Passionate About Bringing Your Startup's Vision
								to Life
							</h1>

							<p className="font-light">
								Helping startups with versatile design skills to
								meet all your graphic and UI/UX needs, from 3D
								modeling to web and graphic design.
							</p>
						</div>

						<button className="py-2 w-1/2 px-4 rounded-full tracking-widest shadow-glow">
							Explore in 3D
						</button>
					</div>
				</Section>

				<Section right>
					<div className="flex flex-col gap-10">
						<div className="flex flex-col w-[520px] gap-5">
							<h1 className="font-anton text-9xl text-right text-[#00000010] ">
								Overview
							</h1>
							<h1 className="font-rubik text-5xl tracking-widest text-right">
								Introduction
							</h1>

							<p className="font-light text-right">
								I'm a self-taught game developer. Curious about
								technology. This website was made to showcase
								all of what I can do and plan to do. I like to
								describe my self as CG lover and Creative
								person. Currently I am learning how to build
								awesome 3D websites/games using Three.JS and
								React.
							</p>
						</div>
					</div>
				</Section>

				<Section>
					<div className="flex flex-col gap-10">
						<div className="flex flex-col w-[420px] gap-5">
							<h1 className="font-anton text-9xl text-[#00000010]">
								WHAT I HAVE DONE SO FAR
							</h1>
							<h1 className="font-rubik text-5xl tracking-widest">
								Work Experience
							</h1>

							<p className="font-light">
								I'm a self-taught game developer. Curious about
								technology. This website was made to showcase
								all of what I can do and plan to do. I like to
								describe my self as CG lover and Creative
								person. Currently I am learning how to build
								awesome 3D websites/games using Three.JS and
								React.
							</p>
						</div>
					</div>
				</Section>
				<Section>
					<h1>Our Exports</h1>
				</Section>
				<Section right>
					<h1>Our Special Guests</h1>
				</Section>
				<Section>
					<h1>Our International Guests</h1>
				</Section>
				<Section right>
					<h1>Our Speakers</h1>
				</Section>
			</div>
		</Scroll>
	);
};
