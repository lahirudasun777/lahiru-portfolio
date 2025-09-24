import React from 'react';

const Contact = () => (
	<section id="contact" className="py-24 bg-gradient-to-br from-green-50 via-white to-primary/5">
		<div className="max-w-5xl mx-auto px-4">
			<div className="text-center mb-12">
				<span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">GET IN TOUCH</span>
				<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Let's Work Together</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">Ready to bring your ideas to life? I'm available for freelance projects, full-time opportunities, and consulting. Let's discuss how we can create something amazing together.</p>
			</div>
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				<div className="bg-white border rounded-xl p-6 shadow-sm">
					<div className="font-bold text-lg mb-2 text-black">Send me a message</div>
					<div className="text-gray-600 text-sm mb-4">Fill out the form below and I'll get back to you within 24 hours.</div>
					<form className="flex flex-col gap-4">
						<div className="flex gap-4">
							<input type="text" placeholder="Full Name *" className="w-1/2 px-3 py-2 border rounded" />
							<input type="email" placeholder="Email Address *" className="w-1/2 px-3 py-2 border rounded" />
						</div>
						<input type="text" placeholder="Subject *" className="px-3 py-2 border rounded" />
						<textarea placeholder="Message *" className="px-3 py-2 border rounded min-h-[100px]"></textarea>
						<button type="submit" className="bg-black text-white px-6 py-2 rounded flex items-center gap-2 justify-center mt-2">
							<span>Send Message</span>
						</button>
					</form>
				</div>
				<div className="flex flex-col gap-6">
					<div className="bg-white border rounded-xl p-6 shadow-sm">
						<div className="font-bold text-lg mb-2 text-black">Contact Information</div>
						<div className="flex flex-col gap-2 text-gray-700 text-sm">
							<div className="flex items-center gap-2"><span className="font-bold">Email</span> <span className="text-gray-500">lahiru@example.com</span></div>
							<div className="flex items-center gap-2"><span className="font-bold">Phone</span> <span className="text-gray-500">+94 77 123 4567</span></div>
							<div className="flex items-center gap-2"><span className="font-bold">Location</span> <span className="text-gray-500">Colombo, Sri Lanka</span></div>
						</div>
					</div>
					<div className="bg-white border rounded-xl p-6 shadow-sm">
						<div className="font-bold text-lg mb-2 text-black">Follow me on</div>
						<div className="flex gap-4">
							<a href="https://github.com" className="bg-gray-100 px-4 py-2 rounded hover:bg-primary/10">GitHub</a>
							<a href="https://linkedin.com" className="bg-gray-100 px-4 py-2 rounded hover:bg-primary/10">LinkedIn</a>
							<a href="https://twitter.com" className="bg-gray-100 px-4 py-2 rounded hover:bg-primary/10">Twitter</a>
						</div>
					</div>
					<div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm flex items-center gap-4">
						<span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
						<div>
							<div className="font-bold text-green-700 mb-1">Available for new projects</div>
							<div className="text-gray-600 text-sm">Currently accepting new freelance projects and full-time opportunities. Response time: Usually within 24 hours.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Contact;
