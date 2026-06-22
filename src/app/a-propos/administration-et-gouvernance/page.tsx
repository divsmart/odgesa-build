import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ODGESA — Site en construction",
  description: "Site en construction",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ConstructionPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #0a1628;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
        }

        .bg {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,100,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(30,60,120,0.4) 0%, transparent 60%),
            #0a1628;
          z-index: 0;
        }

        .grain {
          position: fixed;
          inset: 0;
          z-index: 1;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .container {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
          animation: fadeUp 1.2s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .logo-wrap {
          margin-bottom: 3rem;
          animation: fadeUp 1.2s 0.1s ease both;
        }

        .logo-wrap img {
          height: 110px;
          width: auto;
          filter: drop-shadow(0 4px 24px rgba(212,175,100,0.25));
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,100,0.7), transparent);
          margin: 0 auto 2.5rem;
          animation: fadeUp 1.2s 0.25s ease both;
        }

        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: #f5efe0;
          letter-spacing: 0.04em;
          line-height: 1.2;
          margin-bottom: 1.2rem;
          animation: fadeUp 1.2s 0.35s ease both;
        }

        .headline em {
          font-style: italic;
          color: #d4af64;
        }

        .sub {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(0.75rem, 1.5vw, 0.85rem);
          color: rgba(245,239,224,0.45);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          animation: fadeUp 1.2s 0.5s ease both;
        }

        .dots {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 3rem;
          animation: fadeUp 1.2s 0.65s ease both;
        }

        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(212,175,100,0.5);
          animation: pulse 2s ease-in-out infinite;
        }

        .dot:nth-child(2) { animation-delay: 0.3s; }
        .dot:nth-child(3) { animation-delay: 0.6s; }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
      `}</style>

      <div className="bg" />
      <div className="grain" />

      <div className="container">
        <div className="logo-wrap">
          {/* Replace src with your actual logo path */}
          <img
            src="/images/logo-odgesa.png"
            alt="ODGESA — Organisme Départemental de Gestion des Établissements Scolaires Adventistes"
          />
        </div>

        <div className="divider" />

        <h1 className="headline">
          Ce site est <em>en construction</em>
        </h1>

        <p className="sub">Nous serons bientôt en ligne</p>

        <div className="dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </>
  );
}
