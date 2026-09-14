import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

// Project assets
import Trip from "./assets/Trip.png";
import yuthi from "./assets/yuthi.png";
import game from "./assets/game.png";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "TripNest\nTravel\nTracker",
    category: "MERN STACK • FINTECH / TRAVEL",
    description:
      "Full-stack expense and group contribution tracker featuring automated split-settlement logic, JWT authentication, and MongoDB session storage.",
    image: Trip,
    github: "https://github.com/sarangp-dev/savings",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    themeHue: "#f1c40f",
    sunColor: "#f39c12",
    ambientColor: "rgba(241, 196, 15, 0.45)",
    waterSunR: 1.0,
    waterSunG: 0.82,
    waterSunB: 0.22,
  },
  {
    id: 2,
    title: "Yuthi\nE-Commerce\nPlatform",
    category: "MERN STACK • COMMERCE",
    description:
      "Production-ready e-commerce platform with Stripe payment processing, Cloudinary media storage, dynamic cart management, and admin controls.",
    image: yuthi,
    github: "https://github.com/sarangp-dev/ecommerce-website",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Cloudinary"],
    themeHue: "#d35400",
    sunColor: "#e67e22",
    ambientColor: "rgba(211, 84, 0, 0.45)",
    waterSunR: 0.98,
    waterSunG: 0.45,
    waterSunB: 0.16,
  },
  {
    id: 3,
    title: "Mind Game\nPlatform",
    category: "FULL STACK WEB • GAMING",
    description:
      "Interactive browser-based gaming engine featuring player authentication, real-time scoring, live leaderboards, and persistent rank statistics.",
    image: game,
    github: "https://github.com/sarangp-dev",
    techStack: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML5/CSS3"],
    themeHue: "#8e44ad",
    sunColor: "#9b59b6",
    ambientColor: "rgba(142, 68, 173, 0.45)",
    waterSunR: 0.75,
    waterSunG: 0.35,
    waterSunB: 0.95,
  },
];

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec3 u_sun_color;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Perspective depth: compression increases smoothly towards the horizon
    float depth = clamp(1.0 - uv.y, 0.012, 1.0);
    float pZ = 1.0 / (depth * 2.5 + 0.08);

    // Natural, relaxed temporal drift
    float slowTime = u_time * 0.42;
    vec2 p = vec2((uv.x - 0.5) * pZ * 2.8, pZ * 1.5 + slowTime);

    // Multi-directional low-frequency water undulations
    float wave1 = sin(p.y * 2.8 + slowTime * 1.5 + cos(p.x * 0.75));
    float wave2 = cos(p.y * 4.6 - slowTime * 1.8 + sin(p.x * 1.2));
    float wave3 = sin(p.x * 2.2 + p.y * 6.4 + slowTime * 2.1);
    float wave4 = cos(p.x * 9.0 - p.y * 7.0 - slowTime * 2.5) * 0.25;

    // Organic blended surface curvature
    float waves = wave1 * 0.42 + wave2 * 0.30 + wave3 * 0.18 + wave4 * 0.10;

    // Softened crest modulation
    float crestIntensity = smoothstep(0.10, 0.85, waves);
    float rimLight = pow(max(waves, 0.0), 2.2) * 0.75;

    // Gentle sun reflection path with feathered falloff
    float xOffset = abs(uv.x - 0.5);
    float columnWidth = 5.0 + depth * 14.0;
    float sunPath = exp(-xOffset * xOffset * columnWidth);

    // Deep muted obsidian ocean base
    vec3 waterBase = vec3(0.010, 0.012, 0.015);

    // Desaturate and soften reflection tint
    vec3 desaturatedSun = mix(u_sun_color, vec3(dot(u_sun_color, vec3(0.299, 0.587, 0.114))), 0.45);
    vec3 softLightTone = mix(desaturatedSun, vec3(0.85, 0.83, 0.78), 0.35);

    // Subdued specular highlights
    vec3 waveHighlight = softLightTone * (crestIntensity * 0.75 + rimLight) * (sunPath * 0.70 + 0.08);

    // Low-intensity glimmer
    vec3 subtleGlint = softLightTone * pow(max(sin(p.x * 14.0 + waves * 4.0), 0.0), 9.0) * sunPath * 0.32;

    vec3 finalColor = waterBase + waveHighlight + subtleGlint;

    // Atmospheric horizon haze
    float horizonMist = smoothstep(0.80, 1.0, uv.y);
    vec3 horizonGlow = softLightTone * 0.14 + vec3(0.008, 0.010, 0.012);
    finalColor = mix(finalColor, horizonGlow, horizonMist * 0.75);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const canvasRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  const current = PROJECTS_DATA[activeIndex];

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  }, [isTransitioning]);

  const selectProject = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") handleNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 700) return;
    if (Math.abs(e.deltaY) > 35 || Math.abs(e.deltaX) > 35) {
      lastScrollTime.current = now;
      if (e.deltaY > 0 || e.deltaX > 0) handleNext();
      else handlePrev();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) handleNext();
      else handlePrev();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // WebGL Water Shader Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const createShader = (type, source) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, source);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram();
    const vs = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uSun = gl.getUniformLocation(program, "u_sun_color");

    let animationId;
    let curR = current.waterSunR;
    let curG = current.waterSunG;
    let curB = current.waterSunB;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const startTime = performance.now();
    const render = () => {
      resize();
      const elapsed = (performance.now() - startTime) * 0.001;

      curR += (current.waterSunR - curR) * 0.06;
      curG += (current.waterSunG - curG) * 0.06;
      curB += (current.waterSunB - curB) * 0.06;

      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform3f(uSun, curR, curG, curB);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [current]);

  return (
    <div
      className="scene-viewport"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        "--theme-hue": current.themeHue,
        "--sun-color": current.sunColor,
        "--ambient-color": current.ambientColor,
      }}
    >
      {/* Desktop Edge Click Navigators */}
      <div
        className="edge-click left-edge"
        onClick={handlePrev}
        title="Previous Project"
      />
      <div
        className="edge-click right-edge"
        onClick={handleNext}
        title="Next Project"
      />

      {/* Top Header */}
      <header className="site-header">
        <div className="header-left">
          <span className="text-white font-serif tracking-widest text-lg font-light">
            Projects
          </span>
        </div>
        <div className="header-right">
          <a
            href="https://github.com/sarangp-dev"
            target="_blank"
            rel="noreferrer"
            className="btn-episodes"
          >
            VIEW GITHUB
          </a>
          <a
            href="mailto:sarangp.dev@gmail.com"
            className="btn-menu flex items-center justify-center text-xs text-neutral-400 hover:text-white"
            aria-label="Contact"
          >
            @
          </a>
        </div>
      </header>

      {/* Atmospheric Setting Sun */}
      <div className="sunset-skyscape">
        <div className="sun-halo halo-broad" />
        <div className="sun-halo halo-core" />
        <div className="sun-disk" />
      </div>

      {/* Ocean Stage (WebGL Canvas) */}
      <div className="sea-plane-wrapper">
        <div className="horizon-flare-line" />
        <canvas ref={canvasRef} className="ocean-webgl-canvas" />
      </div>

      {/* Main Showcase Hero Stage */}
      <main className="hero-stage">
        <div
          className={`project-typography ${isTransitioning ? "stage-fade-out" : "stage-fade-in"
            }`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-2 block">
            {current.category}
          </span>
          <h1 className="hero-title">{current.title}</h1>
          <p className="hero-description">{current.description}</p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 my-4">
            {current.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded border border-neutral-700/60 bg-black/40 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Code Link */}
          <div className="mt-2 mb-6">
            <a
              href={current.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/90 hover:text-white border-b border-current pb-1 transition-colors"
            >
              Explore Repository ↗
            </a>
          </div>

          {/* Vertical Stepper */}
          <div className="dot-stepper">
            {PROJECTS_DATA.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                onClick={() => selectProject(idx)}
                className={`step-circle ${idx === activeIndex ? "active" : ""}`}
                aria-label={`Select project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Cutout Showcase Graphic */}
        <div
          className={`showcase-figure ${isTransitioning ? "figure-exit" : "figure-enter"
            }`}
          onClick={handleNext}
          title="Tap to view next"
        >
          <img
            src={current.image}
            alt={current.title.replace(/\n/g, " ")}
            className="subject-image rounded-xl border border-neutral-800/80 shadow-2xl"
          />
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="site-footer">
        <div className="pagination-readout">
          <span>0{activeIndex + 1}</span>
          <span className="slash">/</span>
          <span>0{PROJECTS_DATA.length}</span>
        </div>

        <div className="nav-arrows">
          <button
            type="button"
            onClick={handlePrev}
            className="nav-arrow-btn"
            aria-label="Previous Project"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="nav-arrow-btn"
            aria-label="Next Project"
          >
            →
          </button>
        </div>

        <div className="meta-actions">
          <span>MERN STACK DEVELOPER</span>
          <span>SARANG P</span>
          <a
            href={current.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            SOURCE CODE
          </a>
        </div>
      </footer>
    </div>
  );
}