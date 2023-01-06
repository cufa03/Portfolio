import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import smallPhoto from '../styles/small_photo.jpg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi my name is Facundo',
			'Guy-who-loves-Cofee.tsx',
			'<ButLovesToCodeMore />',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={smallPhoto}
				alt="Picture of me"
			/>
			<div className="z-20">
				<h2 className="text-small uppercase text-gray-500 pb-2 tracking-[13px]">
					Frontend Developer
				</h2>
				<h1 className="text-4xl lg:text-5xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroBtn">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroBtn">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroBtn">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroBtn">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
