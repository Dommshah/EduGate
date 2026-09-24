'use client';

import Header from '@/components/_common/Header';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';

const posts = [
  { title: 'Getting Started with Generative AI: A Beginner\'s Guide', category: 'AI & Machine Learning', date: '12 Aug 2025', author: 'Radwan Anik', img: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=800&auto=format&fit=crop', excerpt: 'Explore the fundamentals of generative AI and learn how to build your first AI-powered application from scratch.' },
  { title: '10 Best Practices for Building Scalable React Apps', category: 'Frontend Development', date: '24 Jul 2025', author: 'Sophia Martinez', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop', excerpt: 'Master the art of building scalable React applications with these battle-tested best practices from industry experts.' },
  { title: 'Next.js Deployment on Vercel vs Render: A Complete Comparison', category: 'Cloud & DevOps', date: '18 Jul 2025', author: 'James Carter', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop', excerpt: 'Compare two popular deployment platforms and find the best fit for your Next.js project based on performance and cost.' },
  { title: 'The Future of Web Design: Trends to Watch in 2026', category: 'UI/UX Design', date: '10 Jul 2025', author: 'Liam Johnson', img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop', excerpt: 'From AI-generated layouts to immersive 3D experiences, discover the design trends shaping the web in 2026.' },
  { title: 'How to Start a Career in Data Science', category: 'Data Science', date: '05 Jul 2025', author: 'Olivia Martinez', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', excerpt: 'A comprehensive roadmap for aspiring data scientists, from learning Python to landing your first role.' },
  { title: 'Building Accessible Web Applications', category: 'Frontend Development', date: '28 Jun 2025', author: 'Ethan Walker', img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop', excerpt: 'Learn why web accessibility matters and how to implement WCAG guidelines in your projects.' },
];

export default function BlogPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />

        <section className="bg-[#F8F7FF] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              Blog & Articles
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Read Our Latest News
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Stay updated with the latest insights in tech, design, and education.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            {/* Featured Post */}
            <div className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-2">
              <img src={posts[0].img} alt={posts[0].title} className="h-64 w-full object-cover lg:h-full" />
              <div className="p-8">
                <span className="inline-block rounded-md bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">{posts[0].category}</span>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">{posts[0].title}</h2>
                <p className="mt-3 text-slate-600">{posts[0].excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                  <span>{posts[0].date}</span>
                  <span>&middot;</span>
                  <span>{posts[0].author}</span>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-violet-700 transition">
                  Read More
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.slice(1).map((post) => (
                <article key={post.title} className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img src={post.img} alt={post.title} className="h-52 w-full object-cover transition group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-md bg-violet-100 px-2 py-1 text-xs font-medium text-violet-700">{post.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3 text-sm text-slate-500">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900">{post.title}</h3>
                    <p className="text-sm text-slate-600">{post.excerpt}</p>
                    <div className="mt-auto pt-4">
                      <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700 transition">
                        Read More
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FooterWithCTABanner />
      </div>
    </div>
  );
}
