import React from 'react';

const jobs = [
	{
		title: 'Senior Full-Stack Engineer',
		company: 'TechCorp Solutions',
		period: '2022 - Present',
		description: 'Lead development of enterprise applications using Java Spring Boot and React. Implemented microservices architecture serving 100K+ daily active users.',
		achievements: [
			'Reduced API response time by 40% through optimization',
			'Led a team of 4 developers on critical projects',
			'Implemented CI/CD pipelines reducing deployment time by 70%'
		]
	},
	{
		title: 'Backend Developer',
		company: 'Innovation Labs',
		period: '2020 - 2022',
		description: 'Developed scalable backend systems using Python and Java. Worked on data processing pipelines and API integrations.',
		achievements: [
			'Built real-time data processing system handling 50K events/hour',
			'Integrated 15+ third-party APIs for client projects',
			'Mentored junior developers on best practices'
		]
	}
];

const Experience = () => (
	<section id="experience" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">PROFESSIONAL JOURNEY</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Work Experience</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">My professional journey showcasing growth in software development, leadership roles, and impactful contributions to various organizations and their technological advancement.</p>
			</div>
			<div className="flex flex-col gap-8">
				{jobs.map((job) => (
					<div key={job.title} className="bg-white border rounded-xl p-6 shadow-sm">
						<div className="font-bold text-xl text-black mb-1">{job.title}</div>
						<div className="text-gray-700 font-semibold mb-2">{job.company} <span className="bg-gray-100 text-xs px-2 py-1 rounded ml-2">{job.period}</span></div>
						<div className="text-gray-600 mb-4">{job.description}</div>
						<div>
							<div className="font-bold text-black mb-2">Key Achievements:</div>
							<ul className="list-disc pl-6 text-gray-700">
								{job.achievements.map((ach, idx) => (
									<li key={idx}>{ach}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Experience;
