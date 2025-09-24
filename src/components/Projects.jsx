import React, { useState } from 'react';

const allProjects = [
	{
		title: 'E-Commerce Microservices Platform',
		description: 'Scalable microservices architecture built with Spring Boot and Docker. Features user management, product catalog, order processing, and payment integration with 99.9% uptime.',
		tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
		featured: true,
		type: 'Backend',
	},
	{
		title: 'Real-Time Analytics Dashboard',
		description: 'Full-stack web application with real-time data processing and visualization. Built with React frontend and Python backend, processing over 10K events per second.',
		tags: ['Python', 'FastAPI', 'WebSocket', 'Chart.js', 'PostgreSQL'],
		featured: true,
		type: 'Full-Stack',
	},
	{
		title: 'DevOps Automation Pipeline',
		description: 'Complete CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 80% and improved code quality with automated testing and monitoring.',
		tags: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Monitoring'],
		featured: true,
		type: 'DevOps',
	},
];

const filterOptions = ['All', 'Backend', 'Full-Stack', 'DevOps'];

const Projects = () => {
	const [filter, setFilter] = useState('All');
	const projects =
		filter === 'All'
			? allProjects
			: allProjects.filter((p) => p.type === filter);

	return (
		<section id="projects" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
			<div className="max-w-5xl mx-auto px-4">
				<div className="text-center mb-12">
					<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">SELECTED WORK</span>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Featured Projects</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">A showcase of my recent work demonstrating expertise in full-stack development, backend architecture, and DevOps practices. Each project reflects my commitment to clean code and scalable solutions.</p>
				</div>
				<div className="flex justify-center gap-4 mb-8">
					{filterOptions.map((option) => (
									<button
										key={option}
										className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 border ${filter === option ? 'bg-primary text-white border-primary shadow-lg scale-105' : 'bg-white text-gray-700 border-gray-200 hover:bg-primary/10 hover:text-primary'}`}
										onClick={() => setFilter(option)}
									>
										{option}
									</button>
					))}
				</div>
						<div className="grid md:grid-cols-3 gap-8">
							{projects.map((project) => (
								<div
									key={project.title}
									className="bg-white border border-gray-100 rounded-2xl p-7 shadow-lg flex flex-col transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/40 group"
									style={{ background: 'linear-gradient(135deg, #f8fafc 60%, #e0f2fe 100%)' }}
								>
									<div className="flex items-center gap-2 mb-2">
										{project.featured && <span className="text-xs bg-primary text-white px-2 py-1 rounded shadow">Featured</span>}
										<span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">{project.type}</span>
									</div>
									<div className="font-bold text-lg mb-2 text-black group-hover:text-primary transition-colors duration-200">{project.title}</div>
									<div className="text-gray-600 text-sm mb-4">{project.description}</div>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag) => (
											<span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium border border-primary/10">{tag}</span>
										))}
									</div>
									<div className="flex gap-2 mt-auto">
										<button className="px-4 py-2 rounded-lg bg-white border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors duration-200 shadow-sm">View Code</button>
										<button className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-sm">Live Demo</button>
									</div>
								</div>
							))}
						</div>
				<div className="flex justify-center mt-12">
					<button className="px-6 py-3 rounded bg-white border text-black font-semibold flex items-center gap-2">
						<span>View All Projects on GitHub</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
