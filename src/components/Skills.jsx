import React from 'react';

const skillsData = [
	{
		title: 'Backend Development',
		items: ['Java', 'Spring Boot', 'Python', 'Django', 'FastAPI', 'Node.js', 'Express.js'],
	},
	{
		title: 'Frontend Development',
		items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
	},
	{
		title: 'Database & Storage',
		items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase'],
	},
	{
		title: 'DevOps & Cloud',
		items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab CI/CD'],
	},
	{
		title: 'Tools & Platforms',
		items: ['Git', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Jira', 'Slack'],
	},
];

const Skills = () => (
	<section id="skills" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">TECHNICAL EXPERTISE</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Skills &amp; Technologies</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">A comprehensive overview of the technologies and tools I use to build modern, scalable applications and deliver exceptional user experiences.</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8">
				{skillsData.map((skill) => (
					<div key={skill.title} className="bg-white border rounded-xl p-6 shadow-sm flex flex-col">
						<div className="font-bold text-lg mb-4 text-black">{skill.title}</div>
						<div className="flex flex-wrap gap-2">
							{skill.items.map((item) => (
								<span key={item} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">{item}</span>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center gap-16 mt-16">
				<div className="text-center">
					<div className="text-3xl font-bold text-black">25+</div>
					<div className="text-gray-500">Technologies</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold text-black">8+</div>
					<div className="text-gray-500">Programming Languages</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold text-black">15+</div>
					<div className="text-gray-500">Frameworks &amp; Libraries</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold text-black">10+</div>
					<div className="text-gray-500">Development Tools</div>
				</div>
			</div>
		</div>
	</section>
);

export default Skills;
