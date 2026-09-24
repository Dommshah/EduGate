'use client'

import React from "react";

const INSTRUCTORS = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Lead UX Designer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop", // woman
  },
  {
    id: 2,
    name: "Liam Johnson",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop", // man
  },
  {
    id: 3,
    name: "Olivia Martinez",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop", // woman
  },
  {
    id: 4,
    name: "Ethan Walker",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1200&auto=format&fit=crop", // man
  },
];

function ShareIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <path d="M8.59 13.51 15.42 17.49M15.41 6.51 8.59 10.49"/>
    </svg>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/>
      <path d="M5 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
      <path d="M19 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
    </svg>
  );
}

function InstructorCard({ person }: any) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <div className="relative">
        <img src={person.image} alt={`${person.name} portrait`} className="h-64 w-full rounded-t-2xl object-cover" />
        <button
          type="button"
          aria-label={`Share ${person.name}'s profile`}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-violet-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <ShareIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="px-6 pb-6 pt-5 text-center">
        <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{person.role}</p>
      </div>
    </article>
  );
}

export default function InstructorsSection() {
  return (
    <section className="bg-white py-14" aria-labelledby="instructors-heading">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading row */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-violet-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <SparklesIcon className="h-3.5 w-3.5" />
              </span>
              Meet Our Experts
            </div>
            <h2 id="instructors-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Learn from Industry Leaders
            </h2>
            <p className="mt-2 max-w-xl text-slate-500">
              Gain knowledge from professionals who are shaping the future of technology and design.
            </p>
          </div>

          <a
            href="/about"
            className="inline-flex items-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Explore All Instructors
            <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTRUCTORS.map((p) => (
            <InstructorCard key={p.id} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
