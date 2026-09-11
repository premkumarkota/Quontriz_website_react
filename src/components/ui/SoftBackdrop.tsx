// Soft-3D ambient scene — glossy blue orbs + a wireframe globe.
// Borrows the tactile, weighty feel of a rendered 3D scene using only CSS.
export function SoftBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* studio light wash */}
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(50%_60%_at_72%_-5%,rgba(26,79,227,0.10),transparent_70%)]" />

      {/* far orb — heavily blurred for depth */}
      <div className="float-c absolute -right-10 top-[8%] h-40 w-40 opacity-70 [filter:blur(7px)] sm:h-56 sm:w-56">
        <div className="orb h-full w-full" />
      </div>

      {/* mid orb — behind the map */}
      <div className="float-a absolute right-[24%] top-[46%] hidden h-24 w-24 opacity-90 [filter:blur(1px)] lg:block">
        <div className="orb h-full w-full" />
      </div>

      {/* small sharp orb — lower left accent */}
      <div className="float-b absolute bottom-[24%] left-[4%] hidden h-14 w-14 lg:block">
        <div className="orb h-full w-full" />
        <div className="contact-shadow absolute -bottom-4 left-1/2 h-3 w-10 -translate-x-1/2" />
      </div>

      {/* wireframe globe — faint, slowly turning */}
      <div className="spin-slow absolute -right-16 top-[30%] hidden h-72 w-72 opacity-[0.16] xl:block">
        <WireGlobe />
      </div>
    </div>
  )
}

function WireGlobe() {
  const lines = [12, 26, 42, 58, 74, 88]
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full text-signal" fill="none" stroke="currentColor" strokeWidth={0.4}>
      <circle cx="50" cy="50" r="46" />
      {/* latitudes */}
      {[24, 36, 50, 64, 76].map((y) => (
        <line key={y} x1={50 - Math.sqrt(46 * 46 - (y - 50) * (y - 50))} y1={y} x2={50 + Math.sqrt(46 * 46 - (y - 50) * (y - 50))} y2={y} />
      ))}
      {/* longitudes */}
      {lines.map((rx) => (
        <ellipse key={rx} cx="50" cy="50" rx={Math.abs(rx - 50) * 0.92} ry="46" />
      ))}
    </svg>
  )
}
