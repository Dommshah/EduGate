'use client'
function BrandLogo(){
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-full bg-violet-600 text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning><path d="M12 2l9 4v12l-9 4-9-4V6z"/></svg>
      </div>
      <span className="text-lg font-bold text-slate-900">EduGate</span>
    </div>
  );
}
export default BrandLogo;