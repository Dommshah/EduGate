'use client';

import { useState } from 'react';
import Header from '@/components/_common/Header';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';

const categories = ['All', 'Technology', 'Creative', 'Business', 'Data Science'];

const courses = [
  { title: 'Full-Stack Web Development', category: 'Technology', level: 'Intermediate', duration: '12 weeks', students: '8.2K', rating: '4.9', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', price: '$199' },
  { title: 'AI & Machine Learning', category: 'Technology', level: 'Advanced', duration: '10 weeks', students: '5.6K', rating: '4.8', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', price: '$249' },
  { title: 'UI/UX Design Masterclass', category: 'Creative', level: 'Beginner', duration: '8 weeks', students: '6.1K', rating: '4.9', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', price: '$179' },
  { title: 'Data Science with Python', category: 'Data Science', level: 'Intermediate', duration: '10 weeks', students: '4.8K', rating: '4.7', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', price: '$229' },
  { title: 'Digital Marketing Strategy', category: 'Business', level: 'Beginner', duration: '6 weeks', students: '7.3K', rating: '4.8', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', price: '$149' },
  { title: 'Cloud Computing with AWS', category: 'Technology', level: 'Advanced', duration: '8 weeks', students: '3.9K', rating: '4.7', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', price: '$219' },
  { title: 'Video Editing & Production', category: 'Creative', level: 'Beginner', duration: '6 weeks', students: '5.2K', rating: '4.6', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', price: '$159' },
  { title: 'Business Analytics', category: 'Business', level: 'Intermediate', duration: '8 weeks', students: '4.1K', rating: '4.8', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', price: '$199' },
  { title: 'Deep Learning & Neural Networks', category: 'Data Science', level: 'Advanced', duration: '12 weeks', students: '2.8K', rating: '4.9', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', price: '$279' },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? courses : courses.filter(c => c.category === activeCategory);

  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />

        <section className="bg-[#F8F7FF] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              Explore Our Programs
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Find Your Perfect Course
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Choose from hundreds of expert-led courses designed to help you grow your career.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeCategory === cat
                      ? 'bg-violet-600 text-white shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <div key={course.title} className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img src={course.img} alt={course.title} className="h-48 w-full object-cover transition group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-md bg-violet-100 px-2 py-1 text-xs font-medium text-violet-700">{course.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span>{course.level}</span>
                      <span>&middot;</span>
                      <span>{course.duration}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{course.title}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/></svg>
                        {course.rating}
                        <span className="ml-1">({course.students} students)</span>
                      </div>
                      <span className="text-lg font-bold text-violet-600">{course.price}</span>
                    </div>
                    <button className="mt-4 w-full rounded-lg bg-violet-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-violet-700 transition">
                      Enroll Now
                    </button>
                  </div>
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
