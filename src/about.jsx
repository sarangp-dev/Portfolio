import React from 'react';

export default function About() {
    const organizations = [
        { label: 'TRAINING', name: 'Soften Technologies' },
        { label: 'INTERNSHIP', name: 'Futura Labs' },
        { label: 'ACADEMICS', name: 'IGNOU SOCIS' },
        { label: 'DIPLOMA', name: 'GPTC Mananthavady' },
    ];

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-black from-0% via-[#0f1012] via-40% to-[#18191b] to-100% text-neutral-300 px-6 sm:px-12 md:px-20 lg:px-28 py-24 flex flex-col justify-between overflow-hidden selection:bg-neutral-800 selection:text-white">
            {/* Smooth Center-Weighted Radial Glow to soften the transition */}

            {/* ================= BACKGROUND ATMOSPHERE ================= */}
            {/* Seamless Charcoal-to-Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#181b20] via-[#101216] to-[#0a0b0d] pointer-events-none" />

            {/* Modern Engineering Radial Glow */}
            <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-sky-500/[0.035] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] bg-amber-500/[0.025] rounded-full blur-[130px] pointer-events-none" />

            {/* Subtle Structural Micro-Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
            />

            {/* ================= MAIN CONTENT ================= */}
            <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start my-auto">

                {/* Left Column: Vision Statement */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-8">

                    {/* Tagline Indicator */}
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                        <span className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-medium">
                            About Me
                        </span>
                    </div>

                    {/* Primary Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-white tracking-[-0.03em] leading-[1.12]">
                        Engineering dynamic digital interfaces with focus, precision, and modern systems.
                    </h2>

                    {/* Body Narrative */}
                    <p className="text-sm sm:text-base text-neutral-400/90 leading-[1.8] max-w-xl font-normal tracking-wide">
                        Full-stack developer focused on architecting resilient, scalable web solutions.
                        Blending disciplined API design with performant client-side experiences to deliver
                        applications that are intuitive, maintainable, and built for long-term growth.
                    </p>


                    {/* Subtle CTA Anchor */}
                    <div className="pt-2">
                        <a
                            href="#certificates-section"
                            className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-neutral-300 hover:text-white transition-colors duration-300"
                        >
                            <span className="relative">
                                More about me
                                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </span>
                            <div className="w-6 h-6 rounded-full border border-neutral-700/80 group-hover:border-neutral-400 flex items-center justify-center transition-colors">
                                <svg
                                    className="w-3 h-3 text-neutral-400 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Column: Quantitative Proof & Architecture Notes */}
                <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-6">

                    {/* Numerical Highlights */}
                    <div className="grid grid-cols-2 gap-8 pb-8 border-b border-white/[0.06]">
                        <div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-sans">
                                4<span className="text-neutral-500 font-extralight text-3xl sm:text-4xl">+</span>
                            </div>
                            <div className="mt-2 text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-snug">
                                Core Stack<br />Ecosystems
                            </div>
                        </div>

                        <div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-sans">
                                100<span className="text-neutral-500 font-extralight text-3xl sm:text-4xl">%</span>
                            </div>
                            <div className="mt-2 text-[11px] font-mono tracking-wider text-neutral-400 uppercase leading-snug">
                                Production<br />Focus & Quality
                            </div>
                        </div>
                    </div>

                    {/* Secondary Discipline Note */}
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light tracking-wide">
                        Committed to functional code architecture, clean component abstraction, and high-standard UI execution across desktop and mobile screens.
                    </p>
                </div>

            </div>

            {/* ================= BOTTOM METRIC BAR / ASSOCIATIONS ================= */}
            <div className="relative z-10 max-w-6xl mx-auto w-full pt-14 mt-12 border-t border-white/[0.07]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 font-semibold whitespace-nowrap">
                        PREVIOUSLY ASSOCIATED WITH
                    </span>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 items-center">
                        {organizations.map((org, index) => (
                            <div key={index} className="flex flex-col group cursor-default">
                                <span className="text-[9px] font-mono tracking-widest text-neutral-600 uppercase group-hover:text-neutral-500 transition-colors">
                                    {org.label}
                                </span>
                                <span className="text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-200 mt-0.5">
                                    {org.name}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}