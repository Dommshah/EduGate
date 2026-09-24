'use client';

import Header from '@/components/_common/Header';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';

export default function AboutPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="bg-[#F8F7FF] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              About EduGate
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Empowering Learners <br /> Across the Globe
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We believe education should be accessible, engaging, and transformative. Since 2020, EduGate has helped thousands of learners unlock their potential.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="rounded-2xl bg-violet-50 p-8">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-violet-600 text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-3 text-slate-600">
                  To provide world-class education that is affordable, accessible, and aligned with industry needs. We bridge the gap between learning and real-world application through practical, project-based courses.
                </p>
              </div>
              <div className="rounded-2xl bg-indigo-50 p-8">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-indigo-600 text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-3 text-slate-600">
                  To become the global leader in online education, empowering 10 million learners by 2030 with skills that matter. We envision a world where quality education knows no borders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: '120K+', label: 'Students Enrolled' },
                { number: '7.8K+', label: 'Courses Available' },
                { number: '3.5K+', label: 'Partner Companies' },
                { number: '95%', label: 'Completion Rate' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-violet-400">{stat.number}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-extrabold text-slate-900">Meet Our Leadership</h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-slate-500">The passionate people behind EduGate&apos;s success.</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Radwan Anik', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
                { name: 'Sophia Carter', role: 'Head of Curriculum', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop' },
                { name: 'Liam Johnson', role: 'CTO', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop' },
                { name: 'Olivia Martinez', role: 'Head of Partnerships', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
              ].map((person) => (
                <div key={person.name} className="group text-center">
                  <img src={person.img} alt={person.name} className="mx-auto h-40 w-40 rounded-2xl object-cover shadow-sm ring-1 ring-slate-200 transition group-hover:shadow-md" />
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">{person.name}</h4>
                  <p className="text-sm text-slate-500">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F8F7FF] py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-extrabold text-slate-900">Our Core Values</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: 'Innovation', desc: 'We constantly evolve our curriculum to match industry trends and emerging technologies.' },
                { title: 'Accessibility', desc: 'Education should be available to everyone, regardless of location or background.' },
                { title: 'Excellence', desc: 'We maintain the highest standards in teaching quality and student support.' },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterWithCTABanner />
      </div>
    </div>
  );
}
