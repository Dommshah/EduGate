'use client'

import React, { useState } from "react";
import Link from "next/link";

function SparklesIcon(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/><path d="M5 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/></svg>)}
function BookIcon(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16"/></svg>)}
function BulbIcon(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M9 18h6M10 22h4"/><path d="M2 11a10 10 0 1 1 20 0c0 3-2 5-4 7H6c-2-2-4-4-4-7z"/></svg>)}
function NetworkIcon(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="4" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 12h12M12 8v8"/></svg>)}
function TrophyIcon(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M8 21h8"/><path d="M12 17a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5z"/><path d="M18 8h2a2 2 0 0 0 2-2V4h-4M6 8H4a2 2 0 0 1-2-2V4h4"/></svg>)}

export default function HeroUnlockPotential(){
  const [offset, setOffset] = useState({x:0, y:0});

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 40;
    const y = (e.clientY - innerHeight / 2) / 40;
    setOffset({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove} 
      className="relative overflow-hidden bg-[#F8F7FF]"
    >
      {/* floating icons */}
      <NetworkIcon 
        className="pointer-events-none absolute left-64 top-64 hidden h-8 w-8 text-violet-300 sm:block"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      />
      <BookIcon 
        className="pointer-events-none absolute right-1/3 top-24 hidden h-8 w-8 text-violet-300 sm:block"
        style={{ transform: `translate(${-offset.x}px, ${offset.y}px)` }}
      />
      <BulbIcon 
        className="pointer-events-none absolute right-40 top-40 hidden h-9 w-9 text-emerald-300 sm:block"
        style={{ transform: `translate(${offset.y}px, ${-offset.x}px)` }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-16 lg:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          
          {/* Left copy */}
          <div className="pb-3">
            <div className="mb-3 flex items-center gap-2 text-sm text-violet-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <SparklesIcon className="h-3.5 w-3.5" />
              </span>
              Learn Anywhere, Anytime
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Empower Your Future
              <br />
              with <span className="underline decoration-amber-300 decoration-8 underline-offset-8">Smart Learning</span>
            </h1>

            <p className="mt-4 max-w-xl text-slate-600">
              Gain real-world skills with expert-led courses designed to help you grow in your career, expand your knowledge, and achieve your goals.
            </p>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link href="/courses" className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500">
                Explore Courses
                <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>

              {/* Students count */}
              <div className="flex items-center gap-3">
                <div className="-space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop" alt="avatar" />
                  <img className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop" alt="avatar" />
                  <img className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop" alt="avatar" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">5k+ learners</div>
                  <div className="text-xs text-slate-500 -mt-0.5">Already enrolled today</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7693736/pexels-photo-7693736.jpeg"
              alt="students learning online"
              className="mx-auto max-h-[360px] w-auto object-cover drop-shadow-xl lg:max-h-[420px]"
            />

            {/* rating chip */}
            <div 
              className="absolute -left-2 top-8 rounded-xl bg-violet-200 p-3 shadow ring-1 ring-slate-200 backdrop-blur transition-transform"
              style={{ transform: `translate(${offset.x / 2}px, ${offset.y / 2}px)` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-100 text-violet-700"><TrophyIcon className="h-5 w-5"/></span>
                <div>
                  <div className="text-slate-900 font-bold leading-tight">4.9</div>
                  <div className="text-xs text-slate-500">(2.1k Reviews)</div>
                </div>
              </div>
            </div>

            {/* 200+ badge */}
            <div 
              className="absolute right-6 bottom-8 rounded-xl bg-white/90 px-4 py-3 shadow ring-1 ring-slate-200 backdrop-blur transition-transform"
              style={{ transform: `translate(${-offset.x / 2}px, ${-offset.y / 2}px)` }}
            >
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <BookIcon className="h-5 w-5 text-violet-600"/> 300+ 
                <span className="ml-1 font-normal text-slate-500">Courses Available</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
