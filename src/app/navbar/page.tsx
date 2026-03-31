"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME",    href: "/" },
  { label: "ARTIST",  href: "/artist" },
  { label: "EVENTS",  href: "/events" },
  { label: "GALLERY", href: "/gallery" },
  { label: "TEAM",    href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@800&display=swap');

        .navbar {
          width: 100%;
          background-color: #E3BF79;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 32px 4px;
        }

        /* ── Logo — Vector.png ── */
        .navbar-logo {
          display: block;
          text-decoration: none;
          line-height: 0;
          flex-shrink: 0;
        }
        .navbar-logo img {
          height: 58px;
          width: auto;
          display: block;
          mix-blend-mode: multiply;
        }

        /* ── Nav links (Desktop) ── */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 44px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links li a {
          font-family: 'Baloo Da 2', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          color: #1a1a1a;
          position: relative;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .navbar-links li a.accent { color: #8B2D2B; }
        .navbar-links li a:hover  { color: #8B2D2B; }
        
        /* Desktop Active Dot */
        .navbar-links li a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8B2D2B;
        }

        /* ── Wavy dotted border ── */
        .navbar-wave {
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        .navbar-wave svg {
          display: block;
          width: 100%;
          height: 14px;
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 26px;
          height: 3px;
          background: #1a1a1a;
          border-radius: 2px;
        }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          background: #E3BF79;
          padding: 0 24px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .mobile-drawer.open {
          max-height: 300px;
          padding: 12px 24px 20px;
          border-top: 2px dashed rgba(0,0,0,0.15);
        }
        .mobile-drawer a {
          display: block;
          font-family: 'Baloo Da 2', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          color: #1a1a1a;
          padding: 6px 0;
          transition: color 0.2s;
        }
        .mobile-drawer a.accent { color: #8B2D2B; }
        
        /* Mobile Active Highlight */
        .mobile-drawer a.active {
          color: #8B2D2B;
        }

        @media (max-width: 700px) {
          .navbar-links { display: none; }
          .hamburger    { display: flex; }
          .navbar-inner { padding: 8px 20px 4px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">

          {/* LOGO — Vector.png */}
          <Link href="/" className="navbar-logo">
            <img
              src="/images/Vector.png"
              alt="Oikyotaan logo"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="navbar-links">
            {NAV_LINKS.map(({ label, href, accent }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={[
                    accent ? "accent" : "",
                    pathname === href ? "active" : "",
                  ].filter(Boolean).join(" ")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* WAVY DOTTED BOTTOM BORDER */}
        <div className="navbar-wave">
          <svg viewBox="0 0 1440 14" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,7 C30,0 60,14 90,7 C120,0 150,14 180,7 C210,0 240,14 270,7 C300,0 330,14 360,7 C390,0 420,14 450,7 C480,0 510,14 540,7 C570,0 600,14 630,7 C660,0 690,14 720,7 C750,0 780,14 810,7 C840,0 870,14 900,7 C930,0 960,14 990,7 C1020,0 1050,14 1080,7 C1110,0 1140,14 1170,7 C1200,0 1230,14 1260,7 C1290,0 1320,14 1350,7 C1380,0 1410,14 1440,7"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeDasharray="3 6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* MOBILE DRAWER */}
        <div className={`mobile-drawer${open ? " open" : ""}`}>
          {NAV_LINKS.map(({ label, href, accent }) => (
            <Link
              key={label}
              href={href}
              /* Applying the exact same active logic to the mobile drawer */
              className={[
                accent ? "accent" : "",
                pathname === href ? "active" : ""
              ].filter(Boolean).join(" ")}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}