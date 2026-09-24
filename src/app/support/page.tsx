'use client';

import { useState } from 'react';
import Header from '@/components/_common/Header';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';

const faqs = [
  { q: 'How do I enroll in a course?', a: 'Browse our courses, click "Enroll Now", and complete the checkout process. You\'ll get instant access to all course materials.' },
  { q: 'Can I get a refund?', a: 'Yes! We offer a 30-day money-back guarantee on all courses. If you\'re not satisfied, contact support for a full refund.' },
  { q: 'Do I get a certificate?', a: 'Yes, you receive a verified certificate of completion for every course you finish. Certificates can be shared on LinkedIn.' },
  { q: 'Are courses self-paced?', a: 'Most courses are self-paced. You can learn at your own speed and revisit lessons anytime within your subscription period.' },
  { q: 'How do I access live workshops?', a: 'Register for a workshop from the Workshops page. You\'ll receive a Zoom link via email before the session starts.' },
  { q: 'Can I download course materials?', a: 'Yes, most courses offer downloadable resources including slides, code files, and supplementary materials.' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />

        <section className="bg-[#F8F7FF] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              Help Center
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              How Can We Help?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find answers to common questions or reach out to our support team.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: '📚', title: 'Course Help', desc: 'Issues with course access, content, or playback.' },
                { icon: '💳', title: 'Billing & Payments', desc: 'Refunds, invoices, and payment methods.' },
                { icon: '🎓', title: 'Certificates', desc: 'Download or verify your course certificates.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md cursor-pointer">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F8F7FF] py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-slate-900">{faq.q}</span>
                    <svg viewBox="0 0 24 24" className={`h-5 w-5 text-slate-500 transition ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-slate-600">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Still Have Questions?</h2>
            <p className="mt-2 text-slate-600">Our support team is available Monday to Friday, 9AM - 6PM EST.</p>
            <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700 transition">
              Contact Support
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </section>

        <FooterWithCTABanner />
      </div>
    </div>
  );
}
