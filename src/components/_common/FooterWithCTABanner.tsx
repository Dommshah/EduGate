'use client'

import { useState } from 'react'
import Link from 'next/link'
import BrandLogo from "./BrandLogo"

function DoodleBook(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16"/></svg>)}
function WaveLines(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M2 12c2-2 6-2 8 0s6 2 8 0 6-2 8 0"/></svg>)}
function ArrowIcon(props:any){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>)}
function MapPin(props:any){return(<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>)}
function Phone(props:any){return(<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.08 4.1 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.56-.15a2 2 0 0 1 2.11.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92z"/></svg>)}


export default function FooterWithCTABanner(){
  const [year] = useState(() => new Date().getFullYear())
  return (
    <footer className="bg-[#F8F7FF] pt-10">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-[#4F37D9] px-6 py-10 text-white sm:px-10">
          {/* decorative shapes */}
          <div className="pointer-events-none absolute inset-0">
            <svg viewBox="0 0 1440 320" className="absolute -bottom-24 right-0 h-72 w-[900px] opacity-20" fill="currentColor"><path d="M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,144C840,181,960,235,1080,229.3C1200,224,1320,160,1380,122.7L1440,85V320H0Z"/></svg>
          </div>

          {/* doodles */}
          <WaveLines className="absolute left-16 top-16 h-10 w-10 text-white/60" />
          <DoodleBook className="absolute right-40 top-16 h-7 w-7 text-white/70 rotate-12" />

          <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
            {/* Left: text + image */}
            <div className="relative flex items-center  gap-6">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop"
                alt="Happy learner"
                className=" hidden h-40 w-40 rounded-full object-cover ring-4 ring-white/20 sm:block"
              />
              <div>
                <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl">Boost Your Career With<br/>EduGate Certificates</h3>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex justify-end">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-[#4F37D9] shadow hover:shadow-md">
                Explore Programs <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto max-w-7xl px-4 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / about */}
          <div>
            <Link href="/"><BrandLogo /></Link>
            <p className="mt-4 max-w-xs text-sm text-slate-600">At EduGate, we empower individuals with modern learning experiences designed to unlock new opportunities worldwide.</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><MapPin/> Silicon Valley, California, USA</li>
              <li className="flex items-center gap-2"><Phone/> +1 (408) 555-0134</li>
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="font-semibold text-slate-900">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-violet-600" href="/about">About Us</Link></li>
              <li><Link className="hover:text-violet-600" href="/courses">Our Courses</Link></li>
              <li><Link className="hover:text-violet-600" href="/workshops">Workshops</Link></li>
              <li><Link className="hover:text-violet-600" href="/blog">Blog</Link></li>
              <li><Link className="hover:text-violet-600" href="/support">Support</Link></li>
            </ul>
          </nav>

          {/* Explore */}
          <nav aria-label="Explore">
            <h4 className="font-semibold text-slate-900">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link className="hover:text-violet-600" href="/courses">Web Development</Link></li>
              <li><Link className="hover:text-violet-600" href="/courses">AI & Data Science</Link></li>
              <li><Link className="hover:text-violet-600" href="/courses">UI/UX Design</Link></li>
              <li><Link className="hover:text-violet-600" href="/courses">Business Management</Link></li>
              <li><Link className="hover:text-violet-600" href="/courses">Digital Marketing</Link></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-slate-900">Newsletter</h4>
            <p className="mt-4 text-sm text-slate-600">Subscribe to receive the latest course updates, tips, and learning resources.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="Enter Your Email" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"/>
              <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700">Subscribe</button>
            </form>
            <label className="mt-3 flex items-start gap-2 text-xs text-slate-500">
              <input type="checkbox" className="mt-0.5" /> I agree to the terms of service and privacy policy.
            </label>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-slate-500 md:flex-row">
          <p>© {year} EduGate. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['facebook','twitter','linkedin','github','youtube'].map((s)=> (
              <a key={s} href="#" aria-label={s} className="rounded-full border border-slate-300 p-1 hover:border-violet-500 hover:text-violet-600">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
