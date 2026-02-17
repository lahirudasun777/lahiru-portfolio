import React from 'react';


const GitHub = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.295-1.23 3.295-1.23.655 1.652.245 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.815 1.1.815 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.216.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
	</svg>
);

const LinkedIn = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.452v6.291zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zM6.964 20.452H3.71V9h3.254v11.452z" />
	</svg>
);

const Mail = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
	</svg>
);

const Footer = () => (
	<footer className="bg-gradient-to-br from-green-50 via-white to-primary/5 py-16 mt-12">
		<div className="max-w-6xl mx-auto px-6">
			<div className="bg-white/90 shadow-2xl rounded-3xl px-8 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-8 border border-primary/10 glass-card">
				<div className="flex flex-col gap-4 md:gap-2">
					<div className="font-extrabold text-2xl text-black mb-1 tracking-tight">Lahiru'sDev</div>
					<div className="text-gray-600 max-w-xs">Building scalable backend systems, implementing DevOps practices, and creating efficient full-stack solutions.</div>
					<div className="flex gap-3 mt-3">
						<a href="https://github.com" className="hover:bg-green-100 hover:text-green-700 transition-colors p-2 rounded-full text-gray-600"><GitHub /></a>
						<a href="https://linkedin.com" className="hover:bg-green-100 hover:text-green-700 transition-colors p-2 rounded-full text-gray-600"><LinkedIn /></a>
						<a href="mailto:lahiru@example.com" className="hover:bg-green-100 hover:text-green-700 transition-colors p-2 rounded-full text-gray-600"><Mail /></a>
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
						<a href="https://github.com" className="hover:text-primary text-gray-400 text-lg"><GitHub /></a>
						<a href="https://linkedin.com" className="hover:text-primary text-gray-400 text-lg"><LinkedIn /></a>
						<a href="mailto:lahiru@example.com" className="hover:text-primary text-gray-400 text-lg"><Mail /></a>
					</div>
					<div className="flex flex-col md:items-end gap-0.5 mt-2">
						<div className="text-xs text-gray-400">© 2026 Lahiru'sDev. All rights reserved.</div>
						<div className="text-xs text-gray-400">Made with <span className="text-red-500">♥</span> using React</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
