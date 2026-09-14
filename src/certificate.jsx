// import React, { useState } from 'react';
// import poly from "./assets/certificate/poly.png"
// import maxlore from "./assets/certificate/maxlore.png"
// import futura from "./assets/certificate/futura.png"
// import mern from "./assets/certificate/softenMernc.jpeg"
// import ongoing from "./assets/certificate/ongoing.png"


// // Optional: Import your certificate/degree scans from assets
// // import certMern from './assets/cert-mern.jpg';
// // import certDiploma from './assets/cert-diploma.jpg';
// // import certBca from './assets/cert-bca.jpg';
// // import certIntern from './assets/cert-intern.jpg';

// const CERTIFICATES = [
//     {
//         id: 'qual-1',
//         title: 'MERN Stack Developer',
//         issuer: 'Soften Technologies, Kochi',
//         date: '2025 - 2026',
//         badge: 'Professional Training',
//         image: mern,
//         description:
//             'Hands-on full-stack development mastering MongoDB, Express.js, React.js, Node.js, and Tailwind CSS. Focused on building responsive UIs, RESTful APIs, and database CRUD operations.',
//         skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
//     },
//     {
//         id: 'qual-2',
//         title: 'Diploma in Computer Engineering',
//         issuer: 'Govt. Polytechnic College, Mananthavady',
//         date: '2025',
//         badge: 'CGPA: 7.75',
//         image: poly
//         , description:
//             'Completed three-year technical diploma program with a 7.75 CGPA, building foundational expertise in computer engineering, data structures, and software principles.',
//         skills: ['C', 'C++', 'Data Structures', 'Web Technologies', 'SQL']
//     },
//     {
//         id: 'qual-3',
//         title: 'Bachelor of Computer Applications',
//         issuer: 'Indira Gandhi National Open University (IGNOU)',
//         date: 'Ongoing',
//         badge: 'Degree Program',
//         image: ongoing, description:
//             'Pursuing university degree program covering core computational sciences, operating systems, database management systems, and advanced software engineering.',
//         skills: ['DBMS', 'Software Engineering', 'System Design', 'Algorithms']
//     },
//     {
//         id: 'qual-4',
//         title: 'Web Development Internship',
//         issuer: 'Futura Labs, Kozhikode',
//         date: 'Internship',
//         badge: 'Industry Experience',
//         image: futura,
//         description:
//             'Developed interactive client-side web applications using modern HTML5, CSS3, and JavaScript (ES6+). Focused on responsive layouts, debugging, and cross-device usability.',
//         skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design']
//     },
//     {
//         id: 'qual-5',
//         title: 'Artificial Intelligence and Mechine Learning Internship',
//         issuer: 'Maxlore Innovations, Kozhikode',
//         date: 'Internship',
//         badge: 'Industry Experience',
//         image: maxlore,
//         description:
//             'Developed interactive client-side web applications using modern HTML5, CSS3, and JavaScript (ES6+). Focused on responsive layouts, debugging, and cross-device usability.',
//         skills: ['HTML5', 'CSS3', 'AI', 'python']
//     }
// ];

// export default function CertificateShowcase() {
//     const [activeCert, setActiveCert] = useState(CERTIFICATES[0]);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//         <div className="relative min-h-screen w-full bg-gradient-to-b from-black from-0% via-[#0f1012] via-40% to-[#18191b] to-100% text-neutral-200 flex flex-col justify-between overflow-x-hidden select-none font-sans">

//             {/* ================= MAIN SECTION ================= */}
//             <main className="relative flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-16 max-w-7xl mx-auto w-full gap-8">

//                 {/* Left: Vertical Qualifications Directory */}
//                 <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center items-start text-left py-4">
//                     <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4 font-mono">
//                         Credentials • Education • Experience
//                     </p>

//                     <div className="w-full flex flex-col space-y-4">
//                         {CERTIFICATES.map((cert) => {
//                             const isSelected = activeCert.id === cert.id;
//                             return (
//                                 <button
//                                     key={cert.id}
//                                     onClick={() => setActiveCert(cert)}
//                                     className={`w-full text-left pl-5 py-2.5 border-l-2 transition-all duration-300 group ${isSelected
//                                         ? 'border-amber-500 bg-white/[0.02]'
//                                         : 'border-neutral-800 hover:border-neutral-600'
//                                         }`}
//                                 >
//                                     <div className="flex items-center justify-between pr-4">
//                                         <h2
//                                             className={`text-lg sm:text-xl font-light tracking-tight transition-colors duration-200 ${isSelected ? 'text-white font-normal' : 'text-neutral-500 group-hover:text-neutral-300'
//                                                 }`}
//                                         >
//                                             {cert.title}
//                                         </h2>
//                                         <span className="text-xs text-amber-500/80 font-mono tracking-wider ml-2">
//                                             {cert.badge}
//                                         </span>
//                                     </div>
//                                     <div className="flex items-center justify-between pr-4 mt-1">
//                                         <p
//                                             className={`text-xs transition-colors duration-200 ${isSelected ? 'text-neutral-300' : 'text-neutral-600'
//                                                 }`}
//                                         >
//                                             {cert.issuer}
//                                         </p>
//                                         <span className="text-[11px] text-neutral-500 font-mono">
//                                             {cert.date}
//                                         </span>
//                                     </div>
//                                 </button>
//                             );
//                         })}
//                     </div>

//                     {/* Action Trigger */}
//                     <div className="pl-5 mt-8 flex items-center gap-4">
//                         <button
//                             type="button"
//                             onClick={() => setIsModalOpen(true)}
//                             className="px-8 py-2.5 rounded-full border border-amber-600/70 text-amber-500 hover:text-white hover:bg-amber-600/20 hover:border-amber-500 transition-all duration-300 text-xs sm:text-sm tracking-wider"
//                         >
//                             view document
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right: Interactive Certificate Preview */}
//                 <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
//                     <div
//                         onClick={() => setIsModalOpen(true)}
//                         className="group relative cursor-pointer overflow-hidden rounded-xl w-full max-w-[480px] lg:max-w-[540px] border border-neutral-800/80 bg-[#121314] shadow-2xl transition-all duration-500 hover:scale-[1.01]"
//                     >
//                         {/* Certificate Preview Image */}
//                         <img
//                             src={activeCert.image}
//                             alt={activeCert.title}
//                             className="w-full h-[320px] sm:h-[380px] object-cover filter grayscale contrast-115 brightness-90 group-hover:grayscale-0 transition-all duration-700"
//                         />

//                         {/* Edge Fog Gradients */}
//                         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#18191b] via-[#18191b]/70 to-transparent pointer-events-none" />
//                         <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#18191b] via-[#18191b]/80 to-transparent pointer-events-none" />

//                         {/* Hover Expand Overlay */}
//                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                             <span className="text-xs uppercase tracking-widest text-amber-400 font-medium px-4 py-2 border border-amber-400/40 rounded-full backdrop-blur-sm">
//                                 Click to Expand
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Vertical Stepper Indicators */}
//                 <aside className="hidden xl:flex flex-col items-center gap-3 absolute right-6 top-1/2 -translate-y-1/2">
//                     {CERTIFICATES.map((cert) => (
//                         <div
//                             key={cert.id}
//                             onClick={() => setActiveCert(cert)}
//                             className={`cursor-pointer rounded-full transition-all duration-300 ${activeCert.id === cert.id
//                                 ? 'w-[3px] h-6 bg-amber-500'
//                                 : 'w-[2px] h-4 bg-neutral-700 hover:bg-neutral-500'
//                                 }`}
//                         />
//                     ))}
//                 </aside>
//             </main>

//             {/* ================= FOOTER ================= */}
//             <footer className="relative z-10 px-6 sm:px-12 md:px-16 pb-8 pt-4 flex items-center justify-between">
//                 <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="group inline-flex items-center gap-3 text-xs tracking-wider text-neutral-400 hover:text-neutral-200 transition-colors"
//                 >
//                     <span className="w-8 h-[1px] bg-neutral-600 group-hover:bg-neutral-400 transition-colors" />
//                     <span>expand document</span>
//                     <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-neutral-400 flex items-center justify-center transition-colors">
//                         <svg
//                             className="w-2.5 h-2.5 fill-none stroke-current stroke-2 group-hover:translate-y-0.5 transition-transform duration-200"
//                             viewBox="0 0 24 24"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                         </svg>
//                     </div>
//                 </button>

//                 <span className="hidden sm:inline-block text-xs font-mono text-neutral-600">
//                     sarangp.dev@gmail.com • +91 9778242367
//                 </span>
//             </footer>

//             {/* ================= FULLSCREEN DETAIL MODAL ================= */}
//             {isModalOpen && (
//                 <div
//                     className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
//                     onClick={() => setIsModalOpen(false)}
//                 >
//                     <div
//                         className="relative max-w-4xl w-full bg-[#18191b] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Modal Header */}
//                         <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800">
//                             <div>
//                                 <span className="text-[11px] font-mono uppercase tracking-widest text-amber-500">
//                                     {activeCert.badge}
//                                 </span>
//                                 <h3 className="text-xl font-semibold text-white mt-0.5">
//                                     {activeCert.title}
//                                 </h3>
//                                 <p className="text-xs text-neutral-400 mt-0.5">
//                                     {activeCert.issuer} • {activeCert.date}
//                                 </p>
//                             </div>
//                             <button
//                                 onClick={() => setIsModalOpen(false)}
//                                 className="w-8 h-8 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors"
//                             >
//                                 ✕
//                             </button>
//                         </div>

//                         {/* Modal Body */}
//                         <div className="p-4 sm:p-6 flex flex-col items-center">
//                             <img
//                                 src={activeCert.image}
//                                 alt={activeCert.title}
//                                 className="w-full max-h-[55vh] object-contain rounded-lg border border-neutral-800/80 shadow-lg"
//                             />

//                             <p className="mt-4 text-xs sm:text-sm text-neutral-300 text-center max-w-2xl leading-relaxed">
//                                 {activeCert.description}
//                             </p>

//                             {/* Skills / Topics Badges */}
//                             <div className="flex flex-wrap justify-center gap-2 mt-4">
//                                 {activeCert.skills.map((skill) => (
//                                     <span
//                                         key={skill}
//                                         className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded bg-white/[0.04] border border-neutral-800 text-neutral-300"
//                                     >
//                                         {skill}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// }
import React, { useState } from 'react';
import poly from "./assets/certificate/poly.png";
import maxlore from "./assets/certificate/maxlore.png";
import futura from "./assets/certificate/futura.png";
import mern from "./assets/certificate/softenMernc.jpeg";
import ongoing from "./assets/certificate/ongoing.png";

const CERTIFICATES = [
    {
        id: 'qual-1',
        title: 'MERN Stack Developer',
        issuer: 'Soften Technologies, Kochi',
        date: '2025 - 2026',
        badge: 'Professional Training',
        featured: true,
        image: mern,
        description:
            'Hands-on full-stack development mastering MongoDB, Express.js, React.js, Node.js, and Tailwind CSS. Focused on building production-ready responsive UIs, RESTful APIs, and secure database CRUD operations.',
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
    {
        id: 'qual-2',
        title: 'Diploma in Computer Engineering',
        issuer: 'Govt. Polytechnic College, Mananthavady',
        date: '2022 - 2025',
        badge: 'CGPA: 7.75',
        featured: true,
        image: poly,
        description:
            'Three-year technical diploma program with foundational expertise in computer architecture, operating systems, data structures, algorithms, and software engineering principles.',
        skills: ['C', 'C++', 'Data Structures', 'SQL', 'Computer Networks']
    },
    {
        id: 'qual-3',
        title: 'Bachelor of Computer Applications',
        issuer: 'Indira Gandhi National Open University (IGNOU)',
        date: 'Ongoing',
        badge: 'Degree Program',
        featured: false,
        image: ongoing,
        description:
            'Pursuing university degree program covering computational mathematics, database management, software development life cycle, and advanced system architecture.',
        skills: ['DBMS', 'Software Engineering', 'System Design', 'Algorithms']
    },
    {
        id: 'qual-4',
        title: 'Web Development Internship',
        issuer: 'Futura Labs, Kozhikode',
        date: '2024',
        badge: 'Industry Experience',
        featured: false,
        image: futura,
        description:
            'Engineered responsive client-side web interfaces with modern ES6+ JavaScript, CSS3 animations, and semantic HTML5. Focused on cross-browser performance and UX optimization.',
        skills: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
        id: 'qual-5',
        title: 'AI & Machine Learning Internship',
        issuer: 'Maxlore Innovations, Kozhikode',
        date: '2024',
        badge: 'Industry Experience',
        featured: false,
        image: maxlore,
        description:
            'Worked on core machine learning pipelines, data preprocessing, and model fine-tuning with Python, integrating AI endpoints into interactive client-facing modules.',
        skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'REST APIs']
    }
];

export default function CertificateShowcase() {
    const [activeCert, setActiveCert] = useState(CERTIFICATES[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            id="credentials"
            className="relative w-full py-12 md:py-20 bg-[#0c0d0e] border-y border-neutral-800/80 text-neutral-200 overflow-hidden font-sans"
        >
            {/* Subtle Background Glow for Section Separation */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-neutral-700/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

                {/* Section Header */}
                <header className="mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-800/70 pb-5">
                    <div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            <p className="text-[11px] uppercase tracking-[0.25em] font-mono text-amber-500/90 font-medium">
                                Verified Credentials & Education
                            </p>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Certifications & Academic Background
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                        {CERTIFICATES.length} Total Qualifications
                    </span>
                </header>

                {/* Main Grid: Directory on Left, Live Preview on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT: Compact List (Column 1 to 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-2.5 order-2 lg:order-1">
                        {CERTIFICATES.map((cert) => {
                            const isSelected = activeCert.id === cert.id;
                            return (
                                <div
                                    key={cert.id}
                                    onClick={() => setActiveCert(cert)}
                                    className={`cursor-pointer rounded-xl p-3.5 sm:p-4 border transition-all duration-200 text-left ${isSelected
                                            ? 'bg-neutral-900/90 border-amber-500/70 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/30'
                                            : 'bg-[#121315]/60 hover:bg-[#151619] border-neutral-800/70 hover:border-neutral-700'
                                        }`}
                                >
                                    {/* Top Row: Type Badge + Date */}
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${isSelected
                                                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                                    : 'bg-neutral-800/80 text-neutral-400'
                                                }`}>
                                                {cert.badge}
                                            </span>
                                            {cert.featured && (
                                                <span className="text-[9px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                                                    Primary
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-[11px] font-mono text-neutral-400">
                                            {cert.date}
                                        </span>
                                    </div>

                                    {/* Title & Issuer */}
                                    <h3 className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-neutral-300'
                                        }`}>
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 mt-0.5">
                                        {cert.issuer}
                                    </p>

                                    {/* Progressive Disclosure: Relevant Skills (Expanded when Selected) */}
                                    {isSelected && (
                                        <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-1.5 items-center">
                                            <span className="text-[10px] font-mono text-neutral-400 uppercase mr-1">Skills:</span>
                                            {cert.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Visual Preview Card (Column 8 to 12) */}
                    <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
                        <div className="rounded-2xl border border-neutral-800 bg-[#121315] p-3 sm:p-4 shadow-2xl flex flex-col">

                            {/* Preview Image Container */}
                            <div
                                onClick={() => setIsModalOpen(true)}
                                className="group relative cursor-pointer overflow-hidden rounded-xl bg-black border border-neutral-800 aspect-[4/3] flex items-center justify-center"
                            >
                                <img
                                    src={activeCert.image}
                                    alt={activeCert.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                                />

                                {/* Status Indicator */}
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-700 text-[10px] font-mono text-neutral-300 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Verified
                                </div>

                                {/* Subtle Hover Action */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                    <span className="px-4 py-2 rounded-full bg-amber-500 text-black font-semibold text-xs tracking-wide shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-all">
                                        Expand Fullscreen ↗
                                    </span>
                                </div>
                            </div>

                            {/* Action Details & Primary CTA */}
                            <div className="mt-3 sm:mt-4 flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <h4 className="text-sm font-semibold text-white line-clamp-1">
                                            {activeCert.title}
                                        </h4>
                                        <p className="text-[11px] text-neutral-400 line-clamp-1">
                                            {activeCert.issuer}
                                        </p>
                                    </div>
                                </div>

                                {/* Primary High-Contrast Action CTA */}
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-neutral-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    View Credential Document
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* ================= LIGHTWEIGHT MODAL ================= */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-3xl w-full bg-[#141517] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-800 bg-[#16171a]">
                            <div>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-semibold">
                                    {activeCert.badge} • {activeCert.date}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                                    {activeCert.title}
                                </h3>
                                <p className="text-xs text-neutral-400">
                                    {activeCert.issuer}
                                </p>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800/60 text-neutral-300 hover:text-white hover:bg-neutral-700 flex items-center justify-center transition-colors text-sm"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-4 sm:p-6 flex flex-col items-center max-h-[78vh] overflow-y-auto">
                            <div className="w-full bg-black/60 rounded-xl p-2 border border-neutral-800/80 flex items-center justify-center">
                                <img
                                    src={activeCert.image}
                                    alt={activeCert.title}
                                    className="w-full max-h-[50vh] object-contain rounded-lg"
                                />
                            </div>

                            <p className="mt-4 text-xs sm:text-sm text-neutral-300 text-left sm:text-center leading-relaxed">
                                {activeCert.description}
                            </p>

                            {/* Skills Footer */}
                            <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                                {activeCert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}