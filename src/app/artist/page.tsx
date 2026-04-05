"use client";

// import Image from "next/image";

// ─── REUSABLE ARTIST CARD COMPONENT ───
const ArtistCard = ({ name }: { name: string }) => (
  <div className="artist-card">
    <div className="frame-wrap">
      {/* Decorative Lotus on Left */}
      <div className="lotus-decor-left">
        <img
          src="/images/lotus-decor.png"
          alt=""
          width={150}
          height={150}
          aria-hidden
        />
      </div>

      {/* Main Frame with Photo Area */}
      <div className="frame-container">
        <div className="frame-inner-bg">
          <p className="photo-placeholder">Artist Photo</p>
        </div>
        <img
          src="/images/Group 1000006211.png"
          alt="Ornate Border"
          // fill
          className="frame-border-img"
        />
      </div>

      {/* Decorative Lotus on Right */}
      <div className="lotus-decor-right">
        <img
          src="/images/lotus.png"
          alt=""
          width={120}
          height={120}
          aria-hidden
        />
      </div>
    </div>

    {/* Solid Brutalist Nameplate */}
    <div className="nameplate-solid">
      <span className="dot"></span>
      <p>{name}</p>
      <span className="dot"></span>
    </div>
  </div>
);

// ─── MAIN PAGE COMPONENT ───
export default function ArtistPage() {
  return (
    <>
      <style>{`
        /* ─── ADDED NALUKA CUSTOM FONT ─── */
        @font-face {
          font-family: 'Naluka';
          src: url('/fonts/Naluka.ttf') format('truetype'); 
          font-weight: normal;
          font-style: normal;
        }

        /* Keeping Baloo Da 2 for the photo placeholder text */
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@800&display=swap');

        .page-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #8B2D2B; /* Deep Maroon */
          overflow-x: hidden;
          padding-top: 160px; /* Shift the central texts and artworks down */
          padding-bottom: 150px; /* Extra padding at the bottom */
        }

        .stamp {
          position: absolute;
          z-index: 2;
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.4));
          width: 25vw;
          max-width: 180px;
          margin-top: 130px; 
        }
        .stamp img { width: 100%; height: auto; border-radius: 4px; }
        
        .s-magh     { top: 5vh;  left: 3vw;  transform: rotate(-12deg); }
        .s-ashaadh  { top: 22vh; left: 2vw;  transform: rotate(-8deg); }
        .s-shravan  { top: 4vh;  right: 3vw; transform: rotate(11deg); }
        .s-ashwin   { top: 20vh; right: 2vw; transform: rotate(7deg); }

        /* ─── HEADER (Girl + Title) ─── */
        .header-section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          padding-top: 50px;
          position: relative;
          z-index: 10;
        }

        .girl-illustration {
          width: 130px;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
          transform: translateY(-40px); /* Lifts the girl up relative to the text */
        }

        .title-group { 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start; /* Ensures Oikyotaan aligns left with ARTIST */
        }

        .event-label {
          font-family: 'Naluka', serif;
          color: white;
          font-size: 2.5rem; /* Enlarged text */
          letter-spacing: 0.1em;
          margin-bottom: -10px; /* Pulls "ARTIST" slightly closer to the subtext */
        }

        .main-title-row { 
          display: flex; 
          align-items: center; 
          gap: 10px; 
        }

        .artist-text {
          font-family: 'Naluka', sans-serif;
          color: white;
          font-size: clamp(4rem, 8vw, 7rem);
          line-height: 0.85;
          text-shadow: 2px 4px 10px rgba(0,0,0,0.5);
        }

        /* Enlarged Food Icon - CSS Hack for uncropped image */
        .food-plate {
          width: 450px; 
          height: auto;
          object-fit: contain;
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.4));
          margin-left: -150px; 
          margin-top: -50px; 
          pointer-events: none; 
        }

        /* ─── ARTISTS GRID ─── */
        .artists-grid {
          display: flex;
          justify-content: center;
          gap: 6vw;
          margin-top: 80px; 
          flex-wrap: wrap;
          padding: 0 10px;
          position: relative;
          z-index: 5;
        }

        .artist-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 70px; 
          width: 100%;
          max-width: 400px;
        }

        .frame-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3.2 / 4.2;
        }

        .frame-container { position: relative; width: 100%; height: 100%; z-index: 5; }

        .frame-inner-bg {
          position: absolute;
          inset: 9%; 
          background-color: #2a1614;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .photo-placeholder {
          color: #D4C3A3;
          font-family: 'Baloo Da 2', serif;
          opacity: 0.2;
          font-style: italic;
        }

        .frame-border-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          pointer-events: none;
        }

        /* ─── LOTUS DECORATIONS ─── */
        .lotus-decor-left { 
          position: absolute; 
          left: -12%; 
          bottom: 2%; 
          width: 35%; 
          z-index: 6; 
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
        }
        .lotus-decor-right { 
          position: absolute; 
          right: -10%; 
          bottom: 12%; 
          width: 25%; 
          z-index: 6; 
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
        }
        .lotus-decor-left img, .lotus-decor-right img { width: 100%; height: auto; }

        /* ─── SOLID NAMEPLATE ─── */
        .nameplate-solid {
          margin-top: 50px; 
          width: 85%; 
          background-color: #EFE6D5; 
          border: 3px solid #1a1a1a;
          padding: 12px 20px;
          box-shadow: 8px 8px 0px #1a1a1a; 
          z-index: 7;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nameplate-solid p {
          font-family: 'Naluka', sans-serif;
          font-size: 2.5rem;
          color: #1a1a1a;
          letter-spacing: 0.1em;
          margin-top: 4px; 
        }

        .dot { 
          width: 8px; 
          height: 8px; 
          background-color: #1a1a1a; 
          border-radius: 50%; 
        }

        /* ─── INSTRUMENTS ─── */
        .instruments-decor {
          position: absolute;
          bottom: 90px;
          left: 55px;
          width: 120px;
          z-index: 10;
          pointer-events: none;
          filter: drop-shadow(4px 4px 10px rgba(0,0,0,0.4));
        }
        .instruments-decor img { width: 100%; height: auto; }

        /* ─── MOBILE SPECIFIC ADJUSTMENTS ─── */
        @media (max-width: 800px) {
          .artists-grid {
            flex-direction: column;
            align-items: center;
            gap: 90px; 
            margin-top: 60px; 
          }

          .artist-card { max-width: 90vw; }

          .header-section {
            gap: 10px;
          }

          .girl-illustration { 
            width: 95px; 
            transform: translateY(-20px); /* Slightly less lift on mobile */
          }
          
          .artist-text { font-size: 4.5rem; }

          .event-label { 
            font-size: 1.8rem; /* Appropriately scaled for mobile */
            margin-bottom: -5px; 
          }
          
          /* Fixed Food Plate hack for mobile so it fits the screen */
          .food-plate { 
            width: 250px; 
            margin-left: -80px; 
            margin-top: -30px;
          }

          .page-container {
            padding-top: 100px;
          }

          /* Fixed Stamps: Removed top margin and pushed to the exact edges to stop overlapping */
          .stamp { width: 70px; margin-top: 0; }
          .s-magh { top: 12vh; left: 2vw; }
          .s-shravan { top: 12vh; right: 2vw; }
          .s-ashaadh { top: 32vh; left: 1vw; }
          .s-ashwin { top: 30vh; right: 1vw; }

          .nameplate-solid { 
            margin-top: 55px; 
            padding: 8px 15px; 
          }
          .nameplate-solid p { font-size: 2rem; }
          
          .instruments-decor { width: 90px; bottom: 70px; left: 15px; }
        }
      `}</style>

      <main className="page-container">
        {/* STAMPS */}
        <div className="stamp s-magh"><img src="/images/no.png" alt="" width={120} height={120} /></div>
        <div className="stamp s-ashaadh"><img src="/images/image 25.png" alt="" /></div>
        <div className="stamp s-shravan"><img src="/images/image 23.png" alt="" /></div>
        <div className="stamp s-ashwin"><img src="/images/image 17.png" alt="" /></div>

        {/* HEADER AREA */}
        <section className="header-section">
          <img
            src="/images/girl-combing.png"
            alt="Girl illustration"
            width={130}
            height={130}
            className="girl-illustration"
          />
          <div className="title-group">
            <span className="event-label">Oikyotaan 26&apos;</span>
            <div className="main-title-row">
            
              <h1 className="artist-text">ARTIST</h1>
              <img
                src="/images/food-icon.png"
                alt="Food icon"
                width={150}
                height={150}
                className="food-plate"
              />
            </div>
          </div>
        </section>

        {/* ARTISTS GRID */}
        <section className="artists-grid">
          <ArtistCard name="Artist Name" />
          <ArtistCard name="Artist Name" />
        </section>

        {/* INSTRUMENTS (BOTTOM LEFT) */}
        <div className="instruments-decor">
          <img
            src="/images/instruments.png"
            alt="Traditional Instruments"
            width={120}
            height={120}
          />
        </div>

        {/* BOTTOM PATTERN (REPEATING BORDER) */}
        <div className="absolute bottom-0 w-full h-4 opacity-40"
          style={{ backgroundImage: "url('/images/top-pattern.png')", backgroundRepeat: 'repeat-x' }}>
        </div>
      </main>
    </>
  );
}