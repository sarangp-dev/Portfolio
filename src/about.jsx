// import React from 'react';

// export default function About() {
//     const organizations = [
//         { label: 'TRAINING', name: 'Soften Technologies' },
//         { label: 'INTERNSHIP', name: 'Futura Labs' },
//         { label: 'ACADEMICS', name: 'IGNOU SOCIS' },
//         { label: 'DIPLOMA', name: 'GPTC Mananthavady' },
//     ];

//     return (
//         <section className="relative w-full min-h-screen bg-gradient-to-b from-black from-0% via-[#0f1012] via-40% to-[#18191b] to-100% text-neutral-300 px-6 sm:px-12 md:px-20 lg:px-28 py-24 flex flex-col justify-between overflow-hidden selection:bg-neutral-800 selection:text-white">
//             {/* Smooth Center-Weighted Radial Glow to soften the transition */}

//             {/* ================= BACKGROUND ATMOSPHERE ================= */}
//             {/* Seamless Charcoal-to-Black Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#181b20] via-[#101216] to-[#0a0b0d] pointer-events-none" />

//             {/* Modern Engineering Radial Glow */}
//             <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-sky-500/[0.035] rounded-full blur-[140px] pointer-events-none" />
//             <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] bg-amber-500/[0.025] rounded-full blur-[130px] pointer-events-none" />

//             {/* Subtle Structural Micro-Grid */}
//             <div
//                 className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
//             />

//             {/* ================= MAIN CONTENT ================= */}
//             <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start my-auto">

//                 {/* Left Column: Vision Statement */}
//                 <div className="lg:col-span-7 flex flex-col items-start space-y-8">

//                     {/* Tagline Indicator */}
//                     <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
//                         <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
//                         <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-medium">
//                             About Me
//                         </span>
//                     </div>

//                     {/* Primary Heading */}
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-white tracking-[-0.03em] leading-[1.12]">
//                         Engineering dynamic digital interfaces with focus, precision, and modern systems.
//                     </h2>

//                     {/* Body Narrative */}
//                     <p className="text-sm sm:text-base text-neutral-400/90 leading-[1.8] max-w-xl font-normal tracking-wide">
//                         Full-stack developer focused on architecting resilient, scalable web solutions.
//                         Blending disciplined API design with performant client-side experiences to deliver
//                         applications that are intuitive, maintainable, and built for long-term growth.
//                     </p>


//                     {/* Subtle CTA Anchor */}
//                     <div className="pt-2">
//                         <a
//                             href="#certificates-section"
//                             className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-neutral-300 hover:text-white transition-colors duration-300"
//                         >
//                             <span className="relative">
//                                 More about me
//                                 <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
//                             </span>
//                             <div className="w-6 h-6 rounded-full border border-neutral-700/80 group-hover:border-neutral-400 flex items-center justify-center transition-colors">
//                                 <svg
//                                     className="w-3 h-3 text-neutral-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-200"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                 </svg>
//                             </div>
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Column: Quantitative Proof & Architecture Notes */}
//                 <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-6">

//                     {/* Numerical Highlights */}
//                     <div className="grid grid-cols-2 gap-8 pb-8 border-b border-white/[0.06]">
//                         <div>
//                             <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-sans">
//                                 4<span className="text-neutral-500 font-extralight text-3xl sm:text-4xl">+</span>
//                             </div>
//                             <div className="mt-2 text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-snug">
//                                 Core Stack<br />Ecosystems
//                             </div>
//                         </div>

//                         <div>
//                             <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-sans">
//                                 100<span className="text-neutral-500 font-extralight text-3xl sm:text-4xl">%</span>
//                             </div>
//                             <div className="mt-2 text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-snug">
//                                 Production<br />Focus & Quality
//                             </div>
//                         </div>
//                     </div>

//                     {/* Secondary Discipline Note */}
//                     <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light tracking-wide">
//                         Committed to functional code architecture, clean component abstraction, and high-standard UI execution across desktop and mobile screens.
//                     </p>
//                 </div>

//             </div>

//             {/* ================= BOTTOM METRIC BAR / ASSOCIATIONS ================= */}
//             <div className="relative z-10 max-w-6xl mx-auto w-full pt-14 mt-12 border-t border-white/[0.07]">
//                 <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

//                     <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 font-semibold whitespace-nowrap">
//                         PREVIOUSLY ASSOCIATED WITH
//                     </span>

//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 items-center">
//                         {organizations.map((org, index) => (
//                             <div key={index} className="flex flex-col group cursor-default">
//                                 <span className="text-[9px] font-mono tracking-widest text-neutral-600 uppercase group-hover:text-neutral-500 transition-colors">
//                                     {org.label}
//                                 </span>
//                                 <span className="text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-200 mt-0.5">
//                                     {org.name}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>

//         </section>
//     );
// }
import React from 'react';

export default function About() {
    const currentStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'];
    const expandingStack = ['Python', 'FastAPI', 'PostgreSQL'];

    const milestones = [
        { type: 'Training', title: 'MERN Stack Developer', place: 'Soften Tech' },
        { type: 'Internship', title: 'Web Development', place: 'Futura Labs' },
        { type: 'Degree', title: 'BCA (Ongoing)', place: 'IGNOU' },
        { type: 'Diploma', title: 'Computer Eng. (7.75 CGPA)', place: 'GPTC Mananthavady' },
    ];

    const handleScrollToProjects = () => {
        const target = document.getElementById('projects-section');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            id="about-section"
            className="relative w-full py-16 sm:py-24 bg-[#0e0f11] text-neutral-200 border-b border-neutral-800/80 overflow-hidden font-sans"
        >
            {/* Subtle Background Glow */}
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-neutral-700/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12">

                {/* Section Label */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <p className="text-[11px] uppercase tracking-[0.25em] font-mono text-amber-500/90 font-semibold">
                        About Me
                    </p>
                </div>

                {/* 2-Column Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* LEFT: Practical Narrative & Proof (Col 1-7) */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                            I'm a Full-Stack MERN Developer focused on shipping practical, production-ready web applications.
                        </h2>

                        <div className="mt-5 space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                            <p>
                                My day-to-day stack centers around <strong className="text-neutral-200 font-semibold">React.js, Node.js, Express, and MongoDB</strong>.
                                Through projects like <span className="text-amber-400 font-medium">TripNest</span> and <span className="text-amber-400 font-medium">Yuthi</span>,
                                I've handled full project lifecycles. developing responsive frontends, designing structured REST APIs, implementing secure JWT authentication, and managing MongoDB schemas.
                            </p>

                            <p>
                                I prioritize clean folder structure, reusable component architecture, and fast load times over unnecessary complexity.
                            </p>
                        </div>

                        {/* Current Technical Direction */}
                        <div className="mt-6 pt-5 border-t border-neutral-800/80 w-full">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2.5">
                                Currently Expanding My Backend Depth:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {expandingStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium"
                                    >
                                        + {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Clear Work Transition CTA */}
                        <div className="mt-8">
                            <button
                                type="button"
                                onClick={handleScrollToProjects}
                                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-neutral-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-amber-500/10 cursor-pointer"
                            >
                                <span>Explore My Projects</span>
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Compact Snapshot & Career Path (Col 8-12) */}
                    <div className="lg:col-span-5 flex flex-col gap-4 w-full">

                        {/* Primary Stack Pill Card */}
                        <div className="rounded-2xl border border-neutral-800 bg-[#131417] p-5">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                                Primary Technologies
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {currentStack.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-neutral-800/80 text-neutral-200 border border-neutral-700/80"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education & Experience Micro-Directory */}
                        <div className="rounded-2xl border border-neutral-800 bg-[#131417] p-5">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3 font-semibold">
                                Education & Background
                            </span>

                            <div className="flex flex-col divide-y divide-neutral-800/80">
                                {milestones.map((item, idx) => (
                                    <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start justify-between gap-3">
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-neutral-200">
                                                {item.title}
                                            </h4>
                                            <p className="text-[11px] text-neutral-400 mt-0.5">
                                                {item.place}
                                            </p>
                                        </div>
                                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 whitespace-nowrap">
                                            {item.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Proof Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-neutral-800 bg-[#131417] p-4 text-center">
                                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</span>
                                <p className="text-[11px] font-mono text-neutral-400 mt-1 uppercase">Full-Stack Focus</p>
                            </div>
                            <div className="rounded-xl border border-neutral-800 bg-[#131417] p-4 text-center">
                                <span className="text-2xl sm:text-3xl font-extrabold text-amber-500 font-mono">MERN</span>
                                <p className="text-[11px] font-mono text-neutral-400 mt-1 uppercase">Core Specialization</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}