import React from 'react';

const About = () => (
	<section id="about" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">WHO I AM</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">About Me</h2>
			</div>
			<div className="md:flex md:space-x-12">
				<div className="md:w-2/3 text-lg text-gray-700 mb-8 md:mb-0">
					<p className="mb-4">I'm a passionate software engineer with <span className="font-bold text-black">6+ years of experience</span> building robust, scalable applications. My expertise spans across backend development, full-stack engineering, and DevOps practices.</p>
					<p className="mb-4">I specialize in Java and Python ecosystems, with deep knowledge of Spring Boot, Django, FastAPI, and modern frontend frameworks like React. My approach focuses on writing clean, maintainable code while ensuring optimal performance and security.</p>
					<p>When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and staying up-to-date with the latest industry trends and best practices.</p>
				</div>
				<div className="md:w-1/3 flex flex-col space-y-6">
					<div className="bg-white border rounded-xl p-6 shadow-sm">
						<h3 className="font-bold text-lg mb-2 text-black">What I Do</h3>
						<div className="mb-4">
							<div className="font-semibold text-black">Full-Stack Development</div>
							<div className="text-gray-600 text-sm">Building end-to-end applications with modern technologies</div>
						</div>
						<div className="mb-4">
							<div className="font-semibold text-black">Backend Architecture</div>
							<div className="text-gray-600 text-sm">Designing scalable microservices and APIs</div>
						</div>
						<div className="mb-4">
							<div className="font-semibold text-black">DevOps & Cloud</div>
							<div className="text-gray-600 text-sm">Implementing CI/CD pipelines and cloud solutions</div>
						</div>
						<div>
							<div className="font-semibold text-black">Database Design</div>
							<div className="text-gray-600 text-sm">Optimizing data storage and retrieval systems</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-16 mt-16">
				<div className="text-center">
					<div className="text-3xl font-bold text-black">50+</div>
					<div className="text-gray-500">Projects Completed</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold text-black">5+</div>
					<div className="text-gray-500">Years Experience</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold text-black">10+</div>
					<div className="text-gray-500">Technologies Mastered</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
