import React from 'react';

const testimonials = [
	{
		name: 'Sarah Johnson',
		title: 'Tech Lead at InnovaCorp',
		feedback: "Lahiru's expertise in backend architecture and DevOps practices significantly improved our system reliability and scalability.",
		avatar: '',
	},
	{
		name: 'Michael Chen',
		title: 'Senior Developer at TechFlow',
		feedback: 'Working with Lahiru on microservices was amazing. His Java expertise and clean code practices helped us scale our platform to handle millions of requests daily.',
		avatar: '',
	},
	{
		name: 'Emily Rodriguez',
		title: 'Product Manager at StartupX',
		feedback: 'Lahiru delivered our full-stack solution ahead of schedule. His ability to understand business requirements and deliver robust solutions is outstanding.',
		avatar: '',
	},
];

const Testimonials = () => (
	<section id="testimonials" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">CLIENT FEEDBACK</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">What People Say</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">Testimonials from colleagues, clients, and team members I've had the pleasure to work with throughout my career.</p>
			</div>
			<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
				{testimonials.map((t, idx) => (
					<div key={idx} className="bg-white border rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-between min-w-[280px] max-w-[350px]">
						<div className="mb-4">
							<div className="text-gray-700 mb-2">"{t.feedback}"</div>
						</div>
						<div className="flex items-center gap-3 mt-auto">
							{t.avatar ? (
								<img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
							) : (
								<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-500">{t.name[0]}</div>
							)}
							<div>
								<div className="font-bold text-black leading-tight">{t.name}</div>
								<div className="text-xs text-gray-500">{t.title}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Testimonials;
