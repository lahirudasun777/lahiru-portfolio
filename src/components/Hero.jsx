import React from 'react';



const Hero = () => (
		<section
			id="hero"
			className="min-h-screen flex flex-col justify-center items-center pt-32 pb-16 bg-gradient-to-br from-green-100 via-white to-primary/5 text-center border-b border-gray-200"
		>
			<div className="bg-white/95 shadow-2xl rounded-3xl px-8 py-14 max-w-3xl w-full flex flex-col items-center border border-primary/10">
				<h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-primary drop-shadow-lg tracking-tight">Lahiru'sDev</h1>
				<div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
					<span className="bg-green-100 text-green-700 px-4 py-2 rounded font-semibold text-base border border-green-200">Backend Development</span>
					<span className="bg-green-100 text-green-700 px-4 py-2 rounded font-semibold text-base border border-green-200">DevOps & System Architecture</span>
				</div>
				<p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
					Passionate software engineer with expertise in Java, Python, and modern web technologies. I build scalable backend systems, implement DevOps practices, and create efficient full-stack solutions that drive business growth.
				</p>
				<div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
					<a href="#projects" className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2 shadow-md">
						View My Work <span className="ml-2">→</span>
					</a>
					<a href="#" className="border border-green-500 text-green-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 hover:text-green-700 transition-colors flex items-center gap-2 shadow-md">
						<span className="mr-2">⬇</span> Download Resume
					</a>
				</div>
				<div className="flex justify-center gap-12 mt-8 text-green-700">
					<div className="text-center">
						<div className="text-3xl font-bold">50+</div>
						<div className="text-gray-500">Projects Completed</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold">5+</div>
						<div className="text-gray-500">Years Experience</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold">10+</div>
						<div className="text-gray-500">Technologies</div>
					</div>
				</div>
			</div>
		</section>
);

export default Hero;