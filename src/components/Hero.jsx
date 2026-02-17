import React from 'react';



const Hero = () => (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 text-center border-b border-gray-200 overflow-hidden"
		>
			{/* decorative blobs */}
			<div className="blob bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300 w-[420px] h-[420px] rounded-full left-1/4 top-10 -z-10 animate-float" style={{left: '-6%', top: '8%'}} />
			<div className="blob bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 w-[320px] h-[320px] rounded-full right-6 top-40 -z-10 animate-float" style={{right: '-6%', top: '30%', animationDelay: '1.5s'}} />

			<div className="glass-card shadow-2xl rounded-3xl px-8 py-14 max-w-3xl w-full flex flex-col items-center border border-primary/10 relative z-10 fade-in-up">
				<h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text tracking-tight">Lahiru'sDev</h1>
				<div className="flex flex-col md:flex-row justify-center gap-4 mb-6 opacity-90">
					<span className="bg-white/60 px-4 py-2 rounded-full font-semibold text-sm border border-white/40">Backend Development</span>
					<span className="bg-white/60 px-4 py-2 rounded-full font-semibold text-sm border border-white/40">DevOps & System Architecture</span>
				</div>
				<p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">I design and build scalable backend systems, implement resilient DevOps workflows, and craft full-stack solutions that scale.</p>

				<div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
					<a href="#projects" className="px-6 py-3 rounded-lg text-white font-semibold gradient-btn shadow-md hover:shadow-lg flex items-center gap-3">View My Work <span className="text-xl">→</span></a>
					<a href="#" className="px-6 py-3 rounded-lg border border-gray-200 text-gray-800 font-semibold bg-white/60 hover:bg-white flex items-center gap-3">⬇ Download Resume</a>
				</div>

				<div className="flex justify-center gap-12 mt-6 text-gray-800">
					<div className="text-center">
						<div className="text-2xl md:text-3xl font-bold">50+</div>
						<div className="text-sm text-gray-500">Projects Completed</div>
					</div>
					<div className="text-center">
						<div className="text-2xl md:text-3xl font-bold">6+</div>
						<div className="text-sm text-gray-500">Years Experience</div>
					</div>
					<div className="text-center">
						<div className="text-2xl md:text-3xl font-bold">10+</div>
						<div className="text-sm text-gray-500">Technologies</div>
					</div>
				</div>
			</div>
		</section>
);

export default Hero;