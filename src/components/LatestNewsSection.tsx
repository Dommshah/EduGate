'use client'

import React from "react";

const POSTS = [
  {
    id: 1,
    category: "AI & Machine Learning",
    title: "Getting Started with Generative AI: A Beginner’s Guide",
    date: "12 Aug 2025",
    author: "Radwan Anik",
    image:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Frontend Development",
    title: "10 Best Practices for Building Scalable React Apps",
    date: "24 July 2025",
    author: "Sophia Martinez",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    title: "Next.js Deployment on Vercel vs Render: A Complete Comparison",
    date: "18 July 2025",
    author: "James Carter",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
];

function SparklesIcon(props:any){
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/>
      <path d="M5 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
      <path d="M19 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
    </svg>
  );
}
function CalendarIcon(props:any){return(<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>)}
function UserIcon(props:any){return(<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>)}
function ArrowIcon(props:any){return(<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>)}

function CategoryBadge({ children }:any){
  return (
    <span className="absolute left-3 top-3 rounded-md bg-violet-100 px-2 py-1 text-xs font-medium text-violet-700 shadow-sm">
      {children}
    </span>
  );
}

function PostCard({ post }:any){
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img src={post.image} alt="Article cover" className="h-52 w-full object-cover" />
        <CategoryBadge>{post.category}</CategoryBadge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1"><CalendarIcon/> {post.date}</span>
          <span className="inline-flex items-center gap-1"><UserIcon/> {post.author}</span>
        </div>
        <h3 className="mb-4 text-lg font-semibold leading-snug text-slate-900">{post.title}</h3>
        <div className="mt-auto">
          <a href="/blog" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
            Read More <ArrowIcon/>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function LatestNewsSection(){
  return (
    <section className="bg-white py-16" aria-labelledby="news-heading">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-center gap-2 text-sm text-violet-700">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>
          News & Article
        </div>
        <h2 id="news-heading" className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Read Our Latest News</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-500">Stay updated with the latest insights in tech and AI innovation.</p>

        {/* Grid */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {POSTS.map((p)=> (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
