import React from 'react';


const Footer = () => (
	<footer className="bg-gradient-to-br from-green-50 via-white to-primary/5 py-16 mt-12">
		<div className="max-w-4xl mx-auto px-4">
			<div className="bg-white/90 shadow-2xl rounded-3xl px-8 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-8 border border-primary/10">
				<div className="flex flex-col gap-4 md:gap-2">
					<div className="font-extrabold text-2xl text-primary mb-1 tracking-tight">Lahiru'sDev</div>
					<div className="text-gray-600 max-w-xs">Building scalable backend systems, implementing DevOps practices, and creating efficient full-stack solutions.</div>
					<div className="flex gap-4 mt-2">
						<a href="https://github.com" className="hover:bg-green-100 hover:text-green-700 transition-colors p-2 rounded-full text-xl text-gray-500" aria-label="GitHub"><i className="fab fa-github"></i></a>
						<a href="https://linkedin.com" className="hover:bg-green-100 hover:text-green-700 transition-colors p-2 rounded-full text-xl text-gray-500" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
						<a href="mailto:your@email.com" className="hover:bg-green-100 hover:text-green-700 transition-colors p-2 rounded-full text-xl text-gray-500" aria-label="Contact"><i className="fas fa-envelope"></i></a>
					</div>
				</div>
				<div className="flex flex-col items-start md:items-end gap-3">
					<nav className="flex gap-6 text-gray-600 text-base mb-1">
						<a href="#about" className="hover:text-primary">About</a>
						<a href="#projects" className="hover:text-primary">Projects</a>
						<a href="#experience" className="hover:text-primary">Experience</a>
						<a href="#contact" className="hover:text-primary">Contact</a>
					</nav>
					<div className="flex gap-3">
						<a href="https://github.com" className="hover:text-primary text-gray-400 text-lg" aria-label="GitHub"><i className="fab fa-github"></i></a>
						<a href="https://linkedin.com" className="hover:text-primary text-gray-400 text-lg" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
						<a href="mailto:your@email.com" className="hover:text-primary text-gray-400 text-lg" aria-label="Contact"><i className="fas fa-envelope"></i></a>
					</div>
					<div className="flex flex-col md:items-end gap-0.5 mt-2">
						<div className="text-xs text-gray-400">© 2025 Lahiru'sDev. All rights reserved.</div>
						<div className="text-xs text-gray-400">Made with <span className="text-red-500">♥</span> using React &amp; FastAPI</div>
					</div>
				</div>
			</div>
		</div>

	</footer>
	);

	export default Footer;
