import { Inter } from '@next/font/google';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>My Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience />
			</section>

			<section id="skills" className="snap-start">
				<Skills />
			</section>

			<section id="projects" className="snap-start">
				<Projects />
			</section>

			{/* Contact Me */}
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-fit mx-auto cursor-pointer">
					<div className="flex items-center justify-center bg-slate-500 opacity-40 hover:opacity-100 hover:bg-[#F7AB0A]/80 rounded-full">
						<img
							className="h-10 w-10 rounded-full filter cursor-pointer"
							src="https://www.vestusa.com/Images/icon-top-arrow.jpg"
							alt="go to top arrow"
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
}
