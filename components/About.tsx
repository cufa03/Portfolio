import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import photo from '../styles/profile_photo.jpg';
type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img
				initial={{
					x: -300,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				src="https://scontent.fcph5-1.fna.fbcdn.net/v/t39.30808-6/246351618_4963114567049523_932861602485167984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=j67-1RVQ0kQAX_zM7rA&_nc_ht=scontent.fcph5-1.fna&oh=00_AfD0qK5XOp87-dTS4DljYFJaqv5ERN_dE11u-WhJ6pcLlQ&oe=63A8A694"
				width="500"
				height="500"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{' '}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
					background
				</h4>
				<p className="text-base">
					I&apos;m Facundo, Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Ad suscipit laborum, repudiandae debitis quasi et sit aperiam
					excepturi maxime odio deleniti non, sed atque consectetur labore
					ipsum, perferendis nihil. Quia. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Odit quaerat, culpa odio sequi fugit
					debitis voluptate optio ab explicabo consectetur dolor earum illo
					deserunt id et aliquid vel excepturi? Ipsam! Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Quisquam voluptatibus in reiciendis
					enim minima, odio repellat voluptate voluptates ullam consectetur
					alias repellendus eius error ex ipsa excepturi dolorum nihil ab?.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					consectetur iure ipsum consequatur? Fugit, mollitia! Vero recusandae
					ea, reiciendis architecto quis numquam tenetur sapiente illum illo.
					Nihil, at rem. Officiis.
				</p>
			</div>
		</motion.div>
	);
}
