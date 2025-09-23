// app/components/StatsSection.tsx
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Globe, GraduationCap, Briefcase, Users, BookOpen, Award, Star, Rocket } from 'lucide-react'

/* --------------------------------------------------
   Utilities
-------------------------------------------------- */
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

const formatCompact = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M+`
  if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K+`
  return `${n.toLocaleString()}+`
}

/* --------------------------------------------------
   Count-up hook with visibility + easing
-------------------------------------------------- */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

const useCountUp = (end: number, duration = 2000, startOnVisible = true) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(!startOnVisible)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!startOnVisible || !ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [startOnVisible])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const t = clamp((now - startTime) / duration, 0, 1)
      const eased = easeOutCubic(t)
      setCount(Math.floor(end * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, started])

  return { count, ref }
}

/* --------------------------------------------------
   Stat Card
-------------------------------------------------- */
const StatCard = ({ value, label, Icon }: { value: number; label: string; Icon: any }) => {
  const { count, ref } = useCountUp(value, 2200)
  const pretty = useMemo(() => formatCompact(value), [value])

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl bg-white/70  backdrop-blur-md p-6 md:p-8 shadow-sm ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/0 via-fuchsia-500/0 to-sky-500/0 group-hover:from-indigo-500/10 group-hover:via-fuchsia-500/10 group-hover:to-sky-500/10 blur-2xl transition" />

      <div className="flex items-center justify-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-md ring-1 ring-black/10 group-hover:scale-105 transition-transform">
          <Icon className="h-6 w-6" />
        </span>
      </div>

      <div className="mt-4 text-center">
        <div className="text-2xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 0">
          {/* Live count visually increments, aria shows the final number for ATs */}
          <span aria-hidden>{count.toLocaleString()}</span>
          <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">+</span>
          <span className="sr-only">{pretty}</span>
        </div>
        <p className="mt-2 text-sm md:text-base font-medium text-slate-600 ">{label}</p>
      </div>

      {/* Subcopy */}
      <p className="mt-3 text-xs text-slate-500  leading-relaxed">
        Backed by real outcomes and verified by our community. Updated quarterly.
      </p>
    </div>
  )
}

/* --------------------------------------------------
   Section
-------------------------------------------------- */
export default function StatsSection() {
  const stats = [
    { value: 120000, label: 'Global Students', icon: Globe },
    { value: 8600, label: 'Graduates Placed', icon: GraduationCap },
    { value: 3500, label: 'Partner Companies', icon: Briefcase },
    { value: 98000, label: 'Community Members', icon: Users },
    { value: 7800, label: 'Courses Available', icon: BookOpen },
    { value: 4500, label: 'Certified Mentors', icon: Award },
    { value: 15000, label: 'Positive Reviews', icon: Star },
    { value: 2400, label: 'Career Success Stories', icon: Rocket },
  ]

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 px-6 sm:px-10"
      aria-labelledby="stats-heading"
    >
      {/* Animated background layers */}
      {/* 1) Soft radial blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl animate-blob" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl animate-blob [animation-delay:0.9s]" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-blob [animation-delay:1.8s]" />

      {/* 2) Subtle grid */}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* 3) Noise overlay */}
      <div aria-hidden className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md  ">
            Trusted Outcomes
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 animate-pulse" />
          </span>
          <h2 id="stats-heading" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 ">
            Proof our learning community actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">delivers</span>
          </h2>
          <p className="mt-3 text-slate-600 ">
            Numbers that reflect real people leveling up—students, mentors, and partners working together worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} Icon={s.icon} />
          ))}
        </div>

        {/* Footnote / CTA */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm text-slate-500 ">
            Data audited quarterly from course completions, placement records, and verified partner reports.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href="#methodology"
              className="rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md hover:shadow transition"
            >
              View methodology
            </a>
            <a
              href="#get-started"
              className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 hover:scale-[1.02] active:scale-[0.99] transition"
            >
              Start learning
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 [mask-image:linear-gradient(90deg,transparent,black,transparent)] animate-[shine_2s_ease-in-out_infinite]" />
            </a>
          </div>
        </div>
      </div>

      {/* Keyframes (scoped) */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, -10px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.98); }
        }
        .animate-blob { animation: blob 12s infinite ease-in-out; }
        @keyframes shine {
          0% { transform: translateX(-120%); }
          60% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </section>
  )
}
