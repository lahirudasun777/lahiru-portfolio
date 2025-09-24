import React from 'react';

const certifications = [
	{
		title: 'AWS Certified Solutions Architect',
		issuer: 'Amazon Web Services',
		year: '2024',
		credentialId: 'AWS-SAA-2024-081',
		verified: true,
	},
	{
		title: 'Oracle Certified Java Developer',
		issuer: 'Oracle',
		year: '2023',
		credentialId: 'OCP-JAVA-2023-082',
		verified: true,
	},
	{
		title: 'Certified Kubernetes Administrator',
		issuer: 'Cloud Native Computing Foundation',
		year: '2023',
		credentialId: 'CKA-2023-083',
		verified: true,
	},
	{
		title: 'Docker Certified Associate',
		issuer: 'Docker Inc.',
		year: '2022',
		credentialId: 'DCA-2022-084',
		verified: true,
	},
];

const stats = [
	{ label: 'Professional Certifications', value: '4' },
	{ label: 'Issuing Organizations', value: '4' },
	{ label: 'Years of Experience', value: '5+' },
	{ label: 'Key Achievements', value: '6+' },
	{ label: 'Verification Rate', value: '100%' },
	{ label: 'Companies', value: '2+' },
];

const Certifications = () => (
	<section id="certifications" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">CREDENTIALS &amp; ACHIEVEMENTS</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Certifications</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional certifications demonstrating expertise in cloud computing, programming languages, and modern development practices from industry-leading organizations.</p>
			</div>
			<div className="flex flex-wrap justify-center gap-8 mb-12">
				{certifications.map((cert) => (
					<div key={cert.title} className="bg-white border rounded-xl p-6 shadow-sm w-72 flex flex-col items-center">
						<div className="mb-2">
							<span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">Certified</span>
							{cert.verified && <span className="ml-2 text-green-500 text-xs">✔ Verified</span>}
						</div>
						<div className="font-bold text-lg text-black mb-1 text-center">{cert.title}</div>
						<div className="text-gray-600 text-sm mb-2 text-center">Issued by {cert.issuer}</div>
						<div className="text-gray-400 text-xs mb-2">{cert.year}</div>
						<div className="text-xs text-gray-500 mb-2">Credential ID<br /><span className="font-mono text-black">{cert.credentialId}</span></div>
						<button className="w-full mt-2 px-4 py-2 rounded bg-white border text-black font-semibold flex items-center gap-2 justify-center text-sm">View Credential</button>
					</div>
				))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
				{stats.map((stat) => (
					<div key={stat.label} className="bg-white border rounded-xl p-6 shadow-sm text-center">
						<div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
						<div className="text-gray-500 text-sm">{stat.label}</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Certifications;
