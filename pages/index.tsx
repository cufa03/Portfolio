import { Inter } from '@next/font/google';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen">
			<Head>
				<title>My Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Header />

			{/* Hero */}
			<section id="hero">
				<Hero />
			</section>
			{/* About */}

			{/* Experience */}

			{/* Skill */}

			{/* Contact Me */}
		</div>
	);
}
