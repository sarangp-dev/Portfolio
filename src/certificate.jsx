import React, { useState } from 'react';
import poly from "./assets/certificate/poly.png"
import maxlore from "./assets/certificate/maxlore.png"
import futura from "./assets/certificate/futura.png"
import mern from "./assets/certificate/softenMernc.jpeg"
import ongoing from "./assets/certificate/ongoing.png"


// Optional: Import your certificate/degree scans from assets
// import certMern from './assets/cert-mern.jpg';
// import certDiploma from './assets/cert-diploma.jpg';
// import certBca from './assets/cert-bca.jpg';
// import certIntern from './assets/cert-intern.jpg';

const CERTIFICATES = [
    {
        id: 'qual-1',
        title: 'MERN Stack Developer',
        issuer: 'Soften Technologies, Kochi',
        date: '2025 - 2026',
        badge: 'Professional Training',
        image: mern,
        description:
            'Hands-on full-stack development mastering MongoDB, Express.js, React.js, Node.js, and Tailwind CSS. Focused on building responsive UIs, RESTful APIs, and database CRUD operations.',
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
    {
        id: 'qual-2',
        title: 'Diploma in Computer Engineering',
        issuer: 'Govt. Polytechnic College, Mananthavady',
        date: '2025',
        badge: 'CGPA: 7.75',
        image: poly
        , description:
            'Completed three-year technical diploma program with a 7.75 CGPA, building foundational expertise in computer engineering, data structures, and software principles.',
        skills: ['C', 'C++', 'Data Structures', 'Web Technologies', 'SQL']
    },
    {
        id: 'qual-3',
        title: 'Bachelor of Computer Applications',
        issuer: 'Indira Gandhi National Open University (IGNOU)',
        date: 'Ongoing',
        badge: 'Degree Program',
        image: ongoing, description:
            'Pursuing university degree program covering core computational sciences, operating systems, database management systems, and advanced software engineering.',
        skills: ['DBMS', 'Software Engineering', 'System Design', 'Algorithms']
    },
    {
        id: 'qual-4',
        title: 'Web Development Internship',
        issuer: 'Futura Labs, Kozhikode',
        date: 'Internship',
        badge: 'Industry Experience',
        image: futura,
        description:
            'Developed interactive client-side web applications using modern HTML5, CSS3, and JavaScript (ES6+). Focused on responsive layouts, debugging, and cross-device usability.',
        skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design']
    },
    {
        id: 'qual-5',
        title: 'Artificial Intelligence and Mechine Learning Internship',
        issuer: 'Maxlore Innovations, Kozhikode',
        date: 'Internship',
        badge: 'Industry Experience',
        image: maxlore,
        description:
            'Developed interactive client-side web applications using modern HTML5, CSS3, and JavaScript (ES6+). Focused on responsive layouts, debugging, and cross-device usability.',
        skills: ['HTML5', 'CSS3', 'AI', 'python']
    }
];

export default function CertificateShowcase() {
    const [activeCert, setActiveCert] = useState(CERTIFICATES[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-black from-0% via-[#0f1012] via-40% to-[#18191b] to-100% text-neutral-200 flex flex-col justify-between overflow-x-hidden select-none font-sans">

            {/* ================= MAIN SECTION ================= */}
            <main className="relative flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-16 max-w-7xl mx-auto w-full gap-8">

                {/* Left: Vertical Qualifications Directory */}
                <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center items-start text-left py-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4 font-mono">
                        Credentials • Education • Experience
                    </p>

                    <div className="w-full flex flex-col space-y-4">
                        {CERTIFICATES.map((cert) => {
                            const isSelected = activeCert.id === cert.id;
                            return (
                                <button
                                    key={cert.id}
                                    onClick={() => setActiveCert(cert)}
                                    className={`w-full text-left pl-5 py-2.5 border-l-2 transition-all duration-300 group ${isSelected
                                        ? 'border-amber-500 bg-white/[0.02]'
                                        : 'border-neutral-800 hover:border-neutral-600'
                                        }`}
                                >
                                    <div className="flex items-center justify-between pr-4">
                                        <h2
                                            className={`text-lg sm:text-xl font-light tracking-tight transition-colors duration-200 ${isSelected ? 'text-white font-normal' : 'text-neutral-500 group-hover:text-neutral-300'
                                                }`}
                                        >
                                            {cert.title}
                                        </h2>
                                        <span className="text-xs text-amber-500/80 font-mono tracking-wider ml-2">
                                            {cert.badge}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between pr-4 mt-1">
                                        <p
                                            className={`text-xs transition-colors duration-200 ${isSelected ? 'text-neutral-300' : 'text-neutral-600'
                                                }`}
                                        >
                                            {cert.issuer}
                                        </p>
                                        <span className="text-[11px] text-neutral-500 font-mono">
                                            {cert.date}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Action Trigger */}
                    <div className="pl-5 mt-8 flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-2.5 rounded-full border border-amber-600/70 text-amber-500 hover:text-white hover:bg-amber-600/20 hover:border-amber-500 transition-all duration-300 text-xs sm:text-sm tracking-wider"
                        >
                            view document
                        </button>
                    </div>
                </div>

                {/* Right: Interactive Certificate Preview */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="group relative cursor-pointer overflow-hidden rounded-xl w-full max-w-[480px] lg:max-w-[540px] border border-neutral-800/80 bg-[#121314] shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                    >
                        {/* Certificate Preview Image */}
                        <img
                            src={activeCert.image}
                            alt={activeCert.title}
                            className="w-full h-[320px] sm:h-[380px] object-cover filter grayscale contrast-115 brightness-90 group-hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Edge Fog Gradients */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#18191b] via-[#18191b]/70 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#18191b] via-[#18191b]/80 to-transparent pointer-events-none" />

                        {/* Hover Expand Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium px-4 py-2 border border-amber-400/40 rounded-full backdrop-blur-sm">
                                Click to Expand
                            </span>
                        </div>
                    </div>
                </div>

                {/* Vertical Stepper Indicators */}
                <aside className="hidden xl:flex flex-col items-center gap-3 absolute right-6 top-1/2 -translate-y-1/2">
                    {CERTIFICATES.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setActiveCert(cert)}
                            className={`cursor-pointer rounded-full transition-all duration-300 ${activeCert.id === cert.id
                                ? 'w-[3px] h-6 bg-amber-500'
                                : 'w-[2px] h-4 bg-neutral-700 hover:bg-neutral-500'
                                }`}
                        />
                    ))}
                </aside>
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="relative z-10 px-6 sm:px-12 md:px-16 pb-8 pt-4 flex items-center justify-between">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-3 text-xs tracking-wider text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                    <span className="w-8 h-[1px] bg-neutral-600 group-hover:bg-neutral-400 transition-colors" />
                    <span>expand document</span>
                    <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-neutral-400 flex items-center justify-center transition-colors">
                        <svg
                            className="w-2.5 h-2.5 fill-none stroke-current stroke-2 group-hover:translate-y-0.5 transition-transform duration-200"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </button>

                <span className="hidden sm:inline-block text-xs font-mono text-neutral-600">
                    sarangp.dev@gmail.com • +91 9778242367
                </span>
            </footer>

            {/* ================= FULLSCREEN DETAIL MODAL ================= */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-[#18191b] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800">
                            <div>
                                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-500">
                                    {activeCert.badge}
                                </span>
                                <h3 className="text-xl font-semibold text-white mt-0.5">
                                    {activeCert.title}
                                </h3>
                                <p className="text-xs text-neutral-400 mt-0.5">
                                    {activeCert.issuer} • {activeCert.date}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-8 h-8 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 flex items-center justify-center transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-4 sm:p-6 flex flex-col items-center">
                            <img
                                src={activeCert.image}
                                alt={activeCert.title}
                                className="w-full max-h-[55vh] object-contain rounded-lg border border-neutral-800/80 shadow-lg"
                            />

                            <p className="mt-4 text-xs sm:text-sm text-neutral-300 text-center max-w-2xl leading-relaxed">
                                {activeCert.description}
                            </p>

                            {/* Skills / Topics Badges */}
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {activeCert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded bg-white/[0.04] border border-neutral-800 text-neutral-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}