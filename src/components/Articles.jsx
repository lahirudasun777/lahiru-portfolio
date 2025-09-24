import React from 'react';

const articles = [
	{
		title: 'Building Scalable Microservices with Spring Boot',
		date: 'January 14, 2024',
		read: '8 min read',
		description: 'Learn how to design and implement microservices architecture that scales with your business needs.',
		tags: ['Java', 'Spring Boot', 'Microservices', 'Architecture'],
	},
	{
		title: 'DevOps Best Practices for Modern Applications',
		date: 'December 19, 2023',
		read: '12 min read',
		description: 'Essential DevOps practices every developer should know for efficient deployment and monitoring.',
		tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes'],
	},
	{
		title: 'Python vs Java: Choosing the Right Backend Technology',
		date: 'November 9, 2023',
		read: '10 min read',
		description: 'A comprehensive comparison of Python and Java for backend development with real-world examples.',
		tags: ['Python', 'Java', 'Backend', 'Performance'],
	},
];

const topics = [
	{ name: 'Backend Development', count: 8 },
	{ name: 'DevOps', count: 5 },
	{ name: 'System Architecture', count: 6 },
	{ name: 'Java & Spring', count: 4 },
	{ name: 'Python Development', count: 3 },
	{ name: 'Cloud Computing', count: 7 },
];

const stats = [
	{ label: 'Articles Published', value: '3+' },
	{ label: 'Topics Covered', value: '12' },
	{ label: 'Avg. Read Time (min)', value: '10' },
];

const Articles = () => (
	<section id="articles" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">THOUGHT LEADERSHIP</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Latest Articles</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">Sharing insights, tutorials, and experiences in software development, backend architecture, and modern development practices through technical writing.</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8 mb-12">
				{articles.map((a) => (
					<div key={a.title} className="bg-white border rounded-xl p-6 shadow-sm flex flex-col">
						<div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
							<span>{a.date}</span>
							<span>•</span>
							<span>{a.read}</span>
						</div>
						<div className="font-bold text-lg mb-2 text-black">{a.title}</div>
						<div className="text-gray-600 text-sm mb-4 flex-1">{a.description}</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{a.tags.map((tag) => (
								<span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">{tag}</span>
							))}
						</div>
						<a href="#" className="text-primary font-semibold text-sm flex items-center gap-1 mt-auto">Read More <span>→</span></a>
					</div>
				))}
			</div>
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				<div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
					<div className="flex gap-8">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="text-3xl font-bold text-black">{stat.value}</div>
								<div className="text-gray-500 text-sm">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
				<div className="bg-white border rounded-xl p-6 shadow-sm">
					<div className="font-bold text-lg mb-4 text-black">Popular Topics</div>
					<div className="flex flex-col gap-2">
						{topics.map((topic) => (
							<div key={topic.name} className="flex justify-between items-center">
								<span className="text-gray-700">{topic.name}</span>
								<span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">{topic.count}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Articles;