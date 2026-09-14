// import React, { useState } from 'react';
// import profilePhoto from './assets/SARANGP.jpeg';

// export default function Profile() {
//     const [activeTab, setActiveTab] = useState('home');
//     const [menuOpen, setMenuOpen] = useState(false);

//     const navItems = [
//         { label: 'home', targetId: 'home-section' },
//         { label: 'creatives', targetId: 'projects-section' },
//         { label: 'certificates', targetId: 'certificates-section' },
//     ];

//     const handleNavClick = (item) => {
//         setActiveTab(item.label);
//         setMenuOpen(false);

//         const target = document.getElementById(item.targetId);
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     };

//     const socialLinks = [
//         {
//             name: 'GitHub',
//             href: 'https://github.com/sarangp-dev',
//             icon: (
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//                 </svg>
//             ),
//         },
//         {
//             name: 'LinkedIn',
//             href: 'https://www.linkedin.com/in/sarang-p-3b1367424',
//             icon: (
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
//                 </svg>
//             ),
//         },
//     ];

//     return (
//         <div className="relative min-h-screen w-full bg-[#18191b] text-neutral-200 flex flex-col justify-between overflow-x-hidden select-none font-sans">
//             {/* ================= TOP NAVBAR ================= */}
//             <header className="relative z-30 flex items-center justify-between px-6 sm:px-12 md:px-16 py-6 md:py-8">
//                 <button
//                     type="button"
//                     onClick={() => handleNavClick(navItems[0])}
//                     className="text-xl sm:text-2xl font-serif italic text-white tracking-wide cursor-pointer focus:outline-none"
//                 >
//                     portfolio
//                 </button>

//                 {/* Desktop Navigation Links */}
//                 <nav className="hidden md:flex items-center gap-10">
//                     {navItems.map((item) => (
//                         <button
//                             key={item.label}
//                             onClick={() => handleNavClick(item)}
//                             className={`relative text-xs tracking-widest uppercase transition-colors duration-300 pb-1.5 cursor-pointer ${activeTab === item.label
//                                     ? 'text-white font-semibold'
//                                     : 'text-neutral-500 hover:text-neutral-300'
//                                 }`}
//                         >
//                             {item.label}
//                             {activeTab === item.label && (
//                                 <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-neutral-300" />
//                             )}
//                         </button>
//                     ))}
//                 </nav>

//                 {/* Hamburger for Mobile */}
//                 <div className="flex items-center gap-4">
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-neutral-400 focus:outline-none"
//                         aria-label="Toggle menu"
//                     >
//                         <span
//                             className={`h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
//                                 }`}
//                         />
//                         <span
//                             className={`h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
//                                 }`}
//                         />
//                         <span
//                             className={`h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
//                                 }`}
//                         />
//                     </button>
//                 </div>
//             </header>

//             {/* Mobile Drawer */}
//             {menuOpen && (
//                 <div className="md:hidden fixed inset-0 top-20 bg-[#18191b]/95 z-20 flex flex-col items-center justify-center gap-8 text-sm uppercase tracking-widest backdrop-blur-md">
//                     {navItems.map((item) => (
//                         <button
//                             key={item.label}
//                             onClick={() => handleNavClick(item)}
//                             className={`cursor-pointer ${activeTab === item.label
//                                     ? 'text-amber-500 font-semibold'
//                                     : 'text-neutral-400'
//                                 }`}
//                         >
//                             {item.label}
//                         </button>
//                     ))}
//                 </div>
//             )}

//             {/* ================= MAIN CONTENT ================= */}
//             <main className="relative flex-1 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
//                 {/* Left Info & Connect Column */}
//                 <div className="w-full md:w-1/2 z-10 flex flex-col justify-center items-start text-left pt-6 pb-8 md:py-0">
//                     <div className="pl-4 sm:pl-6 border-l-2 border-neutral-700/80">
//                         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-tight text-white leading-tight">
//                             Sarang P
//                         </h1>
//                         <p className="mt-2 text-sm sm:text-base md:text-lg text-neutral-400 tracking-wide font-normal">
//                             Developer / MERN Stack
//                         </p>
//                     </div>

//                     <div className="pl-4 sm:pl-6 mt-7 flex flex-col gap-4">
//                         <div className="flex flex-wrap items-center gap-3">
//                             <a
//                                 href="mailto:sarangp.dev@gmail.com"
//                                 className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-amber-600/70 text-amber-500 hover:text-white hover:bg-amber-600/20 hover:border-amber-500 transition-all duration-300 text-xs tracking-wider"
//                             >
//                                 <svg
//                                     className="w-3.5 h-3.5 text-amber-500 group-hover:text-white transition-colors"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={1.8}
//                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                     />
//                                 </svg>
//                                 <span>sarangp.dev@gmail.com</span>
//                             </a>

//                             <a
//                                 href="tel:+919778242367"
//                                 className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-700/80 bg-neutral-900/40 text-neutral-400 hover:text-neutral-200 hover:border-neutral-500 transition-all duration-300 text-xs tracking-wider font-mono"
//                             >
//                                 <svg
//                                     className="w-3 h-3 text-neutral-500"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={1.8}
//                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                                     />
//                                 </svg>
//                                 <span>+91 9778242367</span>
//                             </a>
//                         </div>

//                         <div className="flex items-center gap-2.5 pt-1">
//                             {socialLinks.map((social) => (
//                                 <a
//                                     key={social.name}
//                                     href={social.href}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     aria-label={social.name}
//                                     className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/30 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-800/40 text-xs font-mono transition-all duration-200"
//                                 >
//                                     {social.icon}
//                                     <span className="text-[11px] tracking-wide">{social.name}</span>
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Portrait Image */}
//                 <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end relative mt-6 md:mt-0">
//                     <div className="relative w-[85%] max-w-[420px] md:max-w-[480px] lg:max-w-[520px]">
//                         <img
//                             src={profilePhoto}
//                             alt="Sarang P"
//                             className="w-full h-auto object-cover grayscale contrast-110 brightness-95 rounded-sm"
//                         />
//                         <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#18191b] via-[#18191b]/70 to-transparent pointer-events-none" />
//                         <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#18191b] via-[#18191b]/80 to-transparent pointer-events-none" />
//                         <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#18191b]/40 to-transparent pointer-events-none" />
//                     </div>
//                 </div>

//                 {/* Vertical Indicator */}
//                 <aside className="hidden lg:flex flex-col items-center gap-3 absolute right-6 top-1/2 -translate-y-1/2">
//                     <div className="w-[3px] h-6 bg-amber-600 rounded-full" />
//                     <div className="w-[2px] h-4 bg-neutral-600 rounded-full" />
//                     <div className="w-[2px] h-4 bg-neutral-700 rounded-full" />
//                 </aside>
//             </main>

//             {/* ================= BOTTOM ACTION ================= */}
//             <footer className="relative z-10 px-6 sm:px-12 md:px-20 pb-8 pt-4 flex items-center">
//                 <button
//                     type="button"
//                     onClick={() => {
//                         const target = document.getElementById('projects-section');
//                         if (target) {
//                             target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                         }
//                     }}
//                     className="group inline-flex items-center gap-3 text-xs tracking-wider text-neutral-400 hover:text-neutral-200 transition-colors focus:outline-none cursor-pointer"
//                 >
//                     <span className="w-8 h-[1px] bg-neutral-600 group-hover:bg-neutral-400 transition-colors" />
//                     <span>view projects</span>
//                     <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-neutral-400 flex items-center justify-center transition-colors">
//                         <svg
//                             className="w-2.5 h-2.5 fill-none stroke-current stroke-2 group-hover:translate-y-0.5 transition-transform duration-200"
//                             viewBox="0 0 24 24"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                         </svg>
//                     </div>
//                 </button>
//             </footer>
//         </div>
//     );
// }
import React, { useState } from 'react';
import profilePhoto from './assets/SARANGP.jpeg';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', targetId: 'home-section' },
        { label: 'Projects', targetId: 'projects-section' },
        { label: 'Experience', targetId: 'experience-section' },
        { label: 'Certificates', targetId: 'certificates-section' },
    ];

    const handleScrollTo = (targetId, tabLabel) => {
        if (tabLabel) setActiveTab(tabLabel);
        setMenuOpen(false);

        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/sarangp-dev',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sarang-p-3b1367424',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
            ),
        },
        {
            name: 'Email',
            href: 'mailto:sarangp.dev@gmail.com',
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        }
    ];

    return (
        <section
            id="home-section"
            className="relative min-h-[100dvh] w-full bg-[#111214] text-neutral-200 flex flex-col justify-between overflow-x-hidden font-sans border-b border-neutral-800/80"
        >
            {/* Ambient background light aura */}
            <div className="absolute top-0 right-1/4 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            {/* ================= HEADER / NAVBAR ================= */}
            <header className="relative z-30 flex items-center justify-between px-5 sm:px-10 md:px-16 py-4 md:py-6 max-w-7xl mx-auto w-full">
                <button
                    type="button"
                    onClick={() => handleScrollTo('home-section', 'Home')}
                    className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 group cursor-pointer focus:outline-none"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                    <span>sarang<span className="text-amber-500">.dev</span></span>
                </button>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleScrollTo(item.targetId, item.label)}
                            className={`text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer ${activeTab === item.label
                                    ? 'text-amber-400 font-semibold'
                                    : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Action Button on Navbar (Desktop) */}
                <div className="hidden md:flex items-center">
                    <a
                        href="mailto:sarangp.dev@gmail.com"
                        className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-amber-500/50 hover:bg-neutral-800 transition-all text-xs font-mono"
                    >
                        Get in touch
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <span className={`h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </header>

            {/* Mobile Drawer Menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 top-[65px] bg-[#111214]/98 z-50 flex flex-col items-center justify-center gap-7 text-sm uppercase tracking-widest backdrop-blur-xl border-t border-neutral-800">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleScrollTo(item.targetId, item.label)}
                            className={`cursor-pointer ${activeTab === item.label ? 'text-amber-500 font-semibold' : 'text-neutral-300'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href="mailto:sarangp.dev@gmail.com"
                        className="mt-4 px-6 py-2.5 rounded-full bg-amber-500 text-black font-semibold text-xs tracking-wider"
                    >
                        sarangp.dev@gmail.com
                    </a>
                </div>
            )}

            {/* ================= HERO CONTENT ================= */}
            <main className="relative flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 sm:px-10 md:px-16 max-w-7xl mx-auto w-full gap-8 lg:gap-12 py-6 sm:py-10">

                {/* Left Column: Clear Recruiter-Targeted Pitch */}
                <div className="w-full lg:w-3/5 z-10 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                    {/* Availability Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-4 sm:mb-5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Available for Full-Stack Roles</span>
                    </div>

                    {/* Name & Clear Developer Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.1]">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Sarang P</span>
                    </h1>
                    <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl font-semibold text-neutral-300 tracking-tight">
                        Full-Stack MERN Developer
                    </h2>

                    {/* Short, Scannable Impact Pitch */}
                    <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                        I build responsive, high-performance web applications with clean architecture using
                        <span className="text-neutral-200 font-medium"> React.js, Node.js, Express, MongoDB, </span> and
                        <span className="text-neutral-200 font-medium"> Tailwind CSS</span>.
                    </p>

                    {/* Clear CTA Button Hierarchy */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                        {/* Primary Action */}
                        <button
                            type="button"
                            onClick={() => handleScrollTo('projects-section', 'Projects')}
                            className="w-full sm:w-auto min-h-[44px] px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-neutral-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>View Projects</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>

                        {/* Secondary Action */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 active:scale-[0.98] text-neutral-200 font-medium text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Resume</span>
                        </a>
                    </div>

                    {/* Social Presence & Quick Contact Strip */}
                    <div className="mt-6 sm:mt-8 flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-[#151619] text-neutral-400 hover:text-amber-400 hover:border-neutral-700 text-xs font-mono transition-all"
                            >
                                {social.icon}
                                <span className="text-[11px]">{social.name}</span>
                            </a>
                        ))}
                    </div>

                </div>

                {/* Right Column: Deliberately Framed Photo Showcase */}
                <div className="w-full lg:w-2/5 flex items-center justify-center order-1 lg:order-2">
                    <div className="relative group w-44 sm:w-64 md:w-72 lg:w-80">

                        {/* Soft Ambient Card Glow */}
                        <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/20 via-neutral-700/20 to-amber-400/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />

                        {/* Image Container with Consistent Aspect Ratio */}
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#16171a] shadow-2xl aspect-[4/5] flex items-center justify-center">
                            <img
                                src={profilePhoto}
                                alt="Sarang P - Full-Stack Developer"
                                loading="eager"
                                decoding="async"
                                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
                            />

                            {/* Minimal Bottom Tag */}
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#111214]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 flex items-center justify-between">
                                <span className="text-[10px] font-mono text-neutral-400">Location</span>
                                <span className="text-[11px] font-mono text-neutral-200 font-medium">Kerala, India</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* ================= FOOTER / PROJECT FAST-TRACK BAR ================= */}
            <footer className="relative z-10 px-5 sm:px-10 md:px-16 py-4 max-w-7xl mx-auto w-full border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">

                {/* Fast Jump Links */}
                <div className="flex items-center gap-2 text-neutral-400">
                    <span className="font-mono text-[11px] text-neutral-500 uppercase">Featured:</span>
                    <button
                        onClick={() => handleScrollTo('projects-section', 'Projects')}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 text-neutral-300 hover:text-white transition-colors font-mono text-[11px]"
                    >
                        TripNest ↗
                    </button>
                    <button
                        onClick={() => handleScrollTo('projects-section', 'Projects')}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 text-neutral-300 hover:text-white transition-colors font-mono text-[11px]"
                    >
                        Yuthi ↗
                    </button>
                </div>

                {/* Direct Contact Micro-Info */}
                <div className="text-neutral-500 font-mono text-[11px]">
                    sarangp.dev@gmail.com • +91 9778242367
                </div>
            </footer>

        </section>
    );
}