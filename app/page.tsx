"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    name: "AI Content Calendar",
    label: "FEATURED BUILD",
    color: "sun",
    description:
      "An AI workspace that takes a creator from first idea to an organised publishing plan.    Mobile Preview under progress*",
    details: [
      "Next.js + TypeScript",
      "Supabase auth & database",
      "Groq AI generation",
    ],
    repo: "https://github.com/SankalpJadhav28/Ai-Content-Calendar",
    live: "https://ai-content-calendar-seven.vercel.app/",
  },
  {
    number: "02",
    name: "Menstrometer",
    label: "FULL-STACK WEB APP",
    color: "blue",
    description:
      "A considered women’s health app for tracking, learning, and managing the everyday details.",
    details: [
      "React + Node.js + Express",
      "MongoDB persistence",
      "Secure user login",
    ],
    repo: "https://github.com/SankalpJadhav28/MERN-Project",
  },
  {
    number: "03",
    name: "ISP Billing",
    label: "SYSTEM DESIGN",
    color: "ink",
    description:
      "A practical billing system built around the kind of clear, reliable workflows real teams need.",
    details: ["JavaScript", "Product-minded UI", "Data-focused workflows"],
    repo: "https://github.com/SankalpJadhav28/ISP-Billing",
    live: "https://sai-samarth-internet-service.web.app/",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Supabase",
  "Groq",
  "Python",
  "Git / GitHub",
  "Figma",
  "HTML / CSS",
  "SQL",
];

function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 900, damping: 48 });
  const springY = useSpring(y, { stiffness: 900, damping: 48 });
  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return <motion.div className="pointer" style={{ x: springX, y: springY }} />;
}

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 250, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 250, damping: 20 });
  function move(event: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    y.set(-((event.clientY - rect.top) / rect.height - 0.5) * 8);
  }
  return (
    <motion.article
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      className={`project-card ${project.color}`}
    >
      <div className="card-top">
        <span>{project.number}</span>
        <span>{project.label}</span>
      </div>
      <div className="card-center">
        <span className="card-symbol">✳</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <ul>
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <div className="card-actions">
        <a href={project.repo} target="_blank">
          CODE ↗
        </a>
        {project.live && (
          <a href={project.live} target="_blank">
            LIVE SITE ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <main>
      <Cursor />
      <header className="topbar">
        <a href="#home" className="wordmark">
          SANKALP
          <br />
          JADHAV<span>.</span>
        </a>
        <p>
          FULL-STACK DEVELOPER
          <br />
          MUMBAI, INDIA
        </p>
        <a href="#contact" className="top-cta">
          AVAILABLE FOR WORK <i>↘</i>
        </a>
      </header>
      <section id="home" className="hero-new">
        <div className="hero-copy">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="kicker"
          >
            01 / HELLO, INTERNET
          </motion.p>
          <div className="title-lines">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              I TURN
            </motion.h1>
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <em>IDEAS</em>
            </motion.h1>
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.24,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              INTO APPS.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="intro"
          >
            I&apos;m Sankalp — a developer who likes practical systems,
            thoughtful interfaces, and products with a point of view.
          </motion.p>
        </div>
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ delay: 0.35, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="hero-object"
        >
          <div className="window-bar">
            <span />
            <span />
            <span />
            <b>new_project.exe</b>
          </div>
          <div className="window-content">
            <span>const builder = &#123;</span>
            <strong> curious: true,</strong>
            <strong> detailOriented: true,</strong>
            <strong> coffee: "optional",</strong>
            <span>&#125;</span>
            <div className="orbit">✦</div>
          </div>
          <p>
            BUILDING IN PUBLIC
            <br />
            AND ON PURPOSE
          </p>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 170 }}
          className="hero-portrait"
        >
          <Image
            src="/images/sankalp-portrait.jpeg"
            alt="Sankalp Jadhav"
            fill
            priority
            sizes="(max-width: 720px) 170px, 230px"
          />
          <figcaption>
            SANKALP JADHAV
            <br />
            FULL-STACK DEV
          </figcaption>
        </motion.figure>
        <a href="#work" className="scroll-note">
          ↓ SEE SELECTED WORK
        </a>
        <div className="hero-index">
          2026
          <br />
          <span>PORTFOLIO</span>
        </div>
      </section>
      <section className="statement">
        <p className="kicker">02 / A QUICK READ</p>
        <div className="statement-grid">
          <h2>
            CODE WITH
            <br />
            <span>CLARITY.</span>
            <br />
            BUILD WITH
            <br />
            CARE.
          </h2>
          <div>
            <p className="large-copy">
              I&apos;m a BSc IT graduate (CGPA 8.62) from Vivekanand Education
              Society&apos;s College, Mumbai. I enjoy taking an ambiguous idea
              and giving it a shape people can actually use.
            </p>
            <p className="small-copy">
              My work moves between front-end craft, full-stack systems and AI
              integration. I&apos;m especially drawn to tools that make an
              everyday process feel lighter.
            </p>
            <a className="text-link" href="#work">
              SEE THE RECEIPTS <i>→</i>
            </a>
          </div>
        </div>
        <figure className="statement-portrait">
          <Image
            src="/images/sankalp-formal.jpeg"
            alt="Sankalp Jadhav in formal attire"
            fill
            sizes="(max-width: 720px) 180px, 280px"
          />
          <figcaption>DEVELOPER / EDITOR / BUILDER</figcaption>
        </figure>
        <div className="statement-dot">✦</div>
      </section>
      <section className="experience-new">
        <p className="kicker">03 / EXPERIENCE</p>
        <div className="experience-row">
          <div>
            <span className="year">JUL 2025 — SEP 2025</span>
            <h2>SyncEdge</h2>
            <p>Web Developer Intern</p>
          </div>
          <p>
            Built and deployed responsive front-end interfaces, integrated
            PHP/MySQL backends, and maintained a clean GitHub workflow while
            improving real user-facing experiences.
          </p>
          <span className="exp-mark">
            SE
            <br />
            01
          </span>
        </div>
      </section>
      <section className="campus">
        <p className="kicker">03.5 / CAMPUS LEADERSHIP</p>
        <div className="campus-grid">
          <div className="campus-media">
            <a
              className="magazine-cover"
              href="/magazine/thats-it-2024-2025.pdf"
              target="_blank"
              aria-label="Read the That's IT 2024–2025 magazine PDF"
            >
              <span className="cover-sticker">OPEN ISSUE ↗</span>
              <div className="tabloid-mark">
                <span>THAT&apos;S</span>
                <b>IT</b>
                <i>
                  ANNUAL
                  <br />
                  TABLOID
                </i>
              </div>
              <p>
                2024—25
                <br />
                IT DEPARTMENT
              </p>
            </a>
            <figure className="launch-photo">
              <Image
                src="/images/thats-it-launch.jpeg"
                alt="Sankalp Jadhav speaking at the That's IT magazine launch"
                fill
                sizes="(max-width: 720px) 150px, 210px"
              />
            </figure>
          </div>
          <div>
            <p className="campus-role">
              EDITOR-IN-CHIEF · IT DEPARTMENT ANNUAL TABLOID
            </p>
            <h2>
              I&apos;VE LED THE
              <br />
              <em>STORY, TOO.</em>
            </h2>
            <p className="campus-copy">
              As Editor-in-Chief of <strong>That&apos;s IT</strong>, I
              coordinated research writers and designers, shaped the content
              plan and final layout, and delivered the department&apos;s annual
              technical magazine on schedule.
            </p>
            <div className="academic-tags">
              <span>Editorial direction</span>
              <span>Team coordination</span>
              <span>Content planning</span>
              <span>Layout &amp; production</span>
            </div>
            <div className="magazine-actions">
              <a href="/magazine/thats-it-2024-2025.pdf" target="_blank">
                READ THE MAGAZINE ↗
              </a>
              <a href="/magazine/thats-it-2024-2025.pdf" download>
                DOWNLOAD PDF ↓
              </a>
            </div>
            <p className="file-note">
              THAT&apos;S IT · 2024–2025 · PDF / 45.9 MB
            </p>
          </div>
        </div>
      </section>
      <section id="work" className="work">
        <div className="work-heading">
          <p className="kicker">04 / SELECTED WORK</p>
          <h2>
            A FEW THINGS
            <br />
            I&apos;VE <em>MADE.</em>
          </h2>
          <p>
            Each project begins with a useful question. Click through, explore
            the code, and see what I&apos;m building next.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <TiltCard key={project.number} project={project} />
          ))}
        </div>
      </section>
      <section className="skills-new">
        <p className="kicker">05 / THE TOOLBOX</p>
        <div className="skills-layout">
          <h2>
            TECH THAT
            <br />
            GETS THE JOB
            <br />
            <em>DONE.</em>
          </h2>
          <div className="skill-cloud-new">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 250,
                }}
                whileHover={{ scale: 1.09, rotate: index % 2 ? 2 : -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact-new">
        <p className="kicker">06 / YOUR TURN</p>
        <h2>
          HAVE A GOOD
          <br />
          <span>IDEA?</span>
        </h2>
        <a className="mail-link" href="mailto:sankalpjadhav28@gmail.com">
          LET&apos;S TALK <i>↗</i>
        </a>
        <footer>
          <a href="https://github.com/SankalpJadhav28" target="_blank">
            GITHUB ↗
          </a>
          <a href="https://linkedin.com/in/sankalpjadhav28" target="_blank">
            LINKEDIN ↗
          </a>
          <a href="mailto:sankalpjadhav28@gmail.com">EMAIL ↗</a>
          <span>© SANKALP JADHAV 2026</span>
        </footer>
      </section>
    </main>
  );
}
