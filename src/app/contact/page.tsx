'use client';

import { useState } from 'react';
import Header from '@/components/_common/Header';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />

        <section className="bg-[#F8F7FF] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              Get in Touch
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Let&apos;s Start a Conversation</h2>
                <p className="mt-3 text-slate-600">
                  Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    { icon: '📧', title: 'Email', value: 'support@edugate.com' },
                    { icon: '📞', title: 'Phone', value: '+1 (408) 555-0134' },
                    { icon: '📍', title: 'Address', value: 'Silicon Valley, California, USA' },
                    { icon: '🕐', title: 'Hours', value: 'Mon - Fri, 9AM - 6PM PST' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-lg">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl bg-slate-50 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-green-100 text-3xl">✓</div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">Message Sent!</h3>
                    <p className="mt-2 text-slate-600">We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-violet-600 font-medium hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">First Name</label>
                        <input type="text" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Last Name</label>
                        <input type="text" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Email</label>
                      <input type="email" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Subject</label>
                      <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200">
                        <option>General Inquiry</option>
                        <option>Course Information</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Message</label>
                      <textarea rows={4} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200" />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-violet-600 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700 transition">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <FooterWithCTABanner />
      </div>
    </div>
  );
}
