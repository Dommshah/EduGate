'use client';

import Header from '@/components/_common/Header';
import FooterWithCTABanner from '@/components/_common/FooterWithCTABanner';

const workshops = [
  { title: 'Build a SaaS App with Next.js', instructor: 'Liam Johnson', date: 'Sep 20, 2025', time: '10:00 AM - 2:00 PM EST', spots: 15, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop', price: 'Free' },
  { title: 'Introduction to Prompt Engineering', instructor: 'Radwan Anik', date: 'Sep 27, 2025', time: '11:00 AM - 1:00 PM EST', spots: 25, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', price: 'Free' },
  { title: 'Figma to Code: Design Systems', instructor: 'Sophia Carter', date: 'Oct 4, 2025', time: '2:00 PM - 5:00 PM EST', spots: 20, img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', price: '$29' },
  { title: 'Data Visualization with Python', instructor: 'Olivia Martinez', date: 'Oct 11, 2025', time: '10:00 AM - 12:30 PM EST', spots: 30, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', price: 'Free' },
  { title: 'AWS Cloud Practitioner Crash Course', instructor: 'Ethan Walker', date: 'Oct 18, 2025', time: '1:00 PM - 4:00 PM EST', spots: 18, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', price: '$19' },
  { title: 'Building Mobile Apps with React Native', instructor: 'Liam Johnson', date: 'Oct 25, 2025', time: '10:00 AM - 1:00 PM EST', spots: 22, img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop', price: 'Free' },
];

export default function WorkshopsPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="min-h-screen">
        <Header />

        <section className="bg-[#F8F7FF] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm text-violet-700">
              Live Workshops
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Hands-On Learning Sessions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Join live workshops led by industry experts. Practice, ask questions, and build real projects.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {workshops.map((ws) => (
                <div key={ws.title} className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img src={ws.img} alt={ws.title} className="h-48 w-full object-cover transition group-hover:scale-105" />
                    <span className={`absolute right-3 top-3 rounded-md px-3 py-1 text-xs font-semibold ${ws.price === 'Free' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {ws.price}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{ws.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">by {ws.instructor}</p>
                    <div className="mt-3 space-y-1 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        {ws.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        {ws.time}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500">{ws.spots} spots left</span>
                      <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700 transition">
                        Register
                      </button>
                    </div>
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
