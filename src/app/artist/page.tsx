"use client";

export default function ArtistPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rye&family=Bebas+Neue&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #8B2D2B;
          overflow: hidden;
        }

        /* ─── STAMPS ─── */
        .stamp {
          position: absolute;
          filter: drop-shadow(3px 5px 10px rgba(0,0,0,0.55));
          line-height: 0;
        }
        .stamp img { display: block; border-radius: 3px; object-fit: cover; width: 13vw; height: 13vw; }
        .s-magh    { top: 3vh;  left: 3vw;  transform: rotate(-11deg); z-index: 3; }
        .s-ashaadh { top: 16vh; left: 1vw;  transform: rotate(-8deg);  z-index: 3; }
        .s-shravan { top: 2vh;  right: 3vw; transform: rotate(10deg);  z-index: 3; }
        .s-ashwin  { top: 14vh; right: 1vw; transform: rotate(8deg);   z-index: 3; }

        /* ─── GIRL ───
           Anchored left of center so title can sit to her right.
           Girl occupies roughly left:32% to left:44% of viewport.
        */
        .girl {
          position: absolute;
          top: 0;
          left: 32%;
          z-index: 6;
          filter: drop-shadow(2px 6px 14px rgba(0,0,0,0.38));
          line-height: 0;
        }
        .girl img { display: block; width: 13vw; height: 42vh; object-fit: contain; }

        /* ─── TITLE ───
           Starts at left:46% — right of the girl, no overlap.
        */
        .title-wrap {
          position: absolute;
          top: 6vh;
          left: 46%;
          z-index: 7;
        }
        .title-event {
          font-family: 'Rye', serif;
          color: #fff;
          font-size: 1.2vw;
          letter-spacing: 0.05em;
          text-shadow: 1px 2px 4px rgba(0,0,0,0.5);
          display: block;
          margin-bottom: 2px;
          white-space: nowrap;
        }
        .title-artist {
          font-family: 'Bebas Neue', sans-serif;
          color: #fff;
          font-size: 6vw;
          line-height: 0.9;
          letter-spacing: 0.05em;
          text-shadow: 3px 4px 12px rgba(0,0,0,0.65);
          display: block;
          white-space: nowrap;
        }

        /* ─── FOOD ICON ───
           Right after ARTIST text ends.
           Title starts at 46%, ARTIST is ~6vw wide → ends at ~46+6*5=76% ... 
           Use flexbox row on a wrapper so icon always follows text naturally.
        */
        .title-and-icon {
          position: absolute;
          top: 6vh;
          left: 46%;
          z-index: 7;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .artist-row {
          display: flex;
          align-items: center;
          gap: 0.8vw;
        }

        /* ─── LOTUS DECOR ───
           Left side, vertically aligned with the frame (frame top ~40vh).
           Horizontally: between left stamps and frame left edge.
           Frame left edge is at ~33% (girl at 32%, frame slightly right of girl).
        */
        .lotus-decor {
          position: absolute;
          top: 38vh;
          left: 22%;
          z-index: 4;
          line-height: 0;
          filter: drop-shadow(1px 3px 6px rgba(0,0,0,0.2));
        }
        .lotus-decor img { display: block; width: 11vw; height: 36vh; object-fit: contain; }

        /* ─── LOTUS BLOOMS — right of frame bottom ─── */
        .lotus-b1 {
          position: absolute;
          top: 68vh; left: 57%;
          z-index: 4; line-height: 0;
          filter: drop-shadow(1px 3px 5px rgba(0,0,0,0.3));
          transform: rotate(10deg);
        }
        .lotus-b1 img { display: block; width: 3.5vw; height: 3.5vw; object-fit: contain; }

        .lotus-b2 {
          position: absolute;
          top: 73vh; left: 59%;
          z-index: 4; line-height: 0;
          filter: drop-shadow(1px 3px 5px rgba(0,0,0,0.3));
          transform: rotate(-12deg) scale(0.85);
        }
        .lotus-b2 img { display: block; width: 3.5vw; height: 3.5vw; object-fit: contain; }

        /* ─── FRAME ─── */
        .frame-wrap {
          position: absolute;
          top: 40vh;
          left: 35%;
          z-index: 5;
          width: 20vw;
          height: 40vh;
        }
        .frame-photo {
          position: absolute;
          inset: 1.5vw;
          z-index: 1;
          background: #1e0c08;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .frame-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .frame-photo-hint {
          color: rgba(200,169,110,0.15);
          font-size: 0.6rem;
          font-style: italic;
          text-align: center;
          padding: 8px;
          letter-spacing: 0.05em;
        }
        .frame-border {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: fill;
          z-index: 2;
          pointer-events: none;
          display: block;
        }

        /* ─── NAMEPLATE ─── */
        .nameplate {
          position: absolute;
          top: 81vh;
          left: 35%;
          width: 20vw;
          background: #f5ede0;
          padding: 1.2vh 0;
          text-align: center;
          box-shadow: 0 3px 14px rgba(0,0,0,0.35);
          z-index: 5;
        }
        .nameplate p {
          font-family: 'Rye', serif;
          color: #8B2D2B;
          font-size: 0.85vw;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* ─── TABLET ─── */
        @media (max-width: 768px) {
          .stamp img           { width: 19vw; height: 19vw; }
          .girl img            { width: 18vw; height: 40vh; }
          .girl                { left: 28%; }
          .title-and-icon      { left: 48%; top: 5vh; }
          .title-event         { font-size: 2vw; }
          .title-artist        { font-size: 8vw; }
          .food-icon-img       { width: 12vw !important; height: 12vw !important; }
          .frame-wrap          { width: 32vw; height: 40vh; left: 33%; }
          .frame-photo         { inset: 2.4vw; }
          .nameplate           { width: 32vw; left: 33%; }
          .nameplate p         { font-size: 1.6vw; }
          .lotus-decor         { left: 16%; top: 37vh; }
          .lotus-decor img     { width: 15vw; height: 34vh; }
          .lotus-b1            { left: 66%; top: 67vh; }
          .lotus-b2            { left: 69%; top: 72vh; }
          .lotus-b1 img, .lotus-b2 img { width: 6vw; height: 6vw; }
        }

        /* ─── MOBILE ─── */
        @media (max-width: 480px) {
          .stamp img           { width: 22vw; height: 22vw; }
          .girl                { left: 24%; }
          .girl img            { width: 22vw; height: 38vh; }
          .title-and-icon      { left: 48%; top: 4vh; }
          .title-event         { font-size: 3vw; }
          .title-artist        { font-size: 11vw; }
          .food-icon-img       { width: 16vw !important; height: 16vw !important; }
          .frame-wrap          { width: 46vw; left: 27%; top: 38vh; }
          .frame-photo         { inset: 3.5vw; }
          .nameplate           { width: 46vw; left: 27%; }
          .nameplate p         { font-size: 2.5vw; }
          .lotus-decor         { left: 5%; top: 36vh; }
          .lotus-decor img     { width: 19vw; height: 32vh; }
          .lotus-b1            { left: 74%; }
          .lotus-b2            { left: 78%; }
          .lotus-b1 img, .lotus-b2 img { width: 8vw; height: 8vw; }
        }
      `}</style>

      <main className="page">

        {/* STAMPS */}
        <div className="stamp s-magh">
          <img src="/images/no.png" alt="Magh stamp" />
        </div>
        <div className="stamp s-ashaadh">
          <img src="/images/image 25.png" alt="Ashaadh stamp" />
        </div>
        <div className="stamp s-shravan">
          <img src="/images/image 23.png" alt="Shravan stamp" />
        </div>
        <div className="stamp s-ashwin">
          <img src="/images/image 17.png" alt="Ashwin stamp" />
        </div>

        {/* GIRL */}
        <div className="girl">
          <img src="/images/girl-combing.png" alt="Woman in saree" />
        </div>

        {/* TITLE + FOOD ICON in a flex column, icon inline with ARTIST */}
        <div className="title-and-icon">
          <span className="title-event">Oikyotaan 26&apos;</span>
          <div className="artist-row">
            <span className="title-artist">ARTIST</span>
            <img
              className="food-icon-img"
              src="/images/food-icon.png"
              alt="Puja icon"
              style={{
                width: "7vw",
                height: "7vw",
                objectFit: "contain",
                filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.5))",
                flexShrink: 0,
              }}
            />
          </div>
        </div>

        {/* LOTUS DECOR */}
        <div className="lotus-decor">
          <img src="/images/lotus-decor.png" alt="Lotus stem" />
        </div>

        {/* LOTUS BLOOMS */}
        <div className="lotus-b1">
          <img src="/images/lotus.png" alt="Lotus" />
        </div>
        <div className="lotus-b2">
          <img src="/images/lotus.png" alt="Lotus" />
        </div>

        {/* FRAME */}
        <div className="frame-wrap">
          <div className="frame-photo">
            <p className="frame-photo-hint">Artist Photo</p>
          </div>
          <img className="frame-border" src="/images/Group 1000006211.png" alt="" aria-hidden="true" />
        </div>

        {/* NAMEPLATE */}
        <div className="nameplate">
          <p>Artist Name</p>
        </div>

      </main>
    </>
  );
}