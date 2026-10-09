import qMark from '../../assets/logo/quontriz-q-3d.png'
import { wordmarkAccent, wordmarkLetters, wordmarkViewBox } from './wordmarkPaths'

// Circuit lines running in from the edges toward the logo (drawn on a 1440×800 canvas).
const traces = [
  'M0 170H330L390 230H700L760 290H880',
  'M0 330H250L300 380H630L670 340H880',
  'M0 500H190L250 440H570L630 400H880',
  'M0 660H370L430 600H730L790 530H880',
  'M210 0V80L270 140H560L620 200H880',
  'M520 800V720L580 660H800L850 610H900',
  'M1440 120H1330L1270 180H1200',
  'M1440 700H1290L1230 640H1170',
]

/**
 * Animated QUONTRIZ brand background: drifting glow, circuit lines with light running
 * toward the logo, and the name drawn letter by letter with snakes of light round it.
 */
export function BrandScene() {
  const shapes = [...wordmarkLetters, wordmarkAccent]

  return (
    <div className="brand-scene absolute inset-0 overflow-hidden bg-[#060d1b]" aria-hidden>
      {/* Soft glows drifting slowly behind everything. */}
      <div className="brand-aurora absolute -left-[10%] top-[-20%] h-[70%] w-[55%] rounded-full bg-brand-700/45 blur-[110px]" />
      <div className="brand-aurora brand-aurora--b absolute right-[-5%] top-[15%] h-[75%] w-[50%] rounded-full bg-cobalt/40 blur-[120px]" />
      <div className="brand-aurora brand-aurora--c absolute bottom-[-30%] left-[30%] h-[60%] w-[45%] rounded-full bg-brand-300/15 blur-[120px]" />

      {/* Faint dot pattern, fading out toward the edges. */}
      <div className="absolute inset-0 bg-[radial-gradient(rgb(151_182_255/0.16)_1px,transparent_1.5px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_70%_at_60%_50%,#000_30%,transparent_80%)]" />

      {/* Circuit lines with light pulses running along them. */}
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <defs>
          <filter id="trace-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {traces.map((d, i) => (
          <path key={`t${i}`} d={d} stroke="rgb(151 182 255 / 0.14)" strokeWidth="1.5" />
        ))}
        {traces.map((d, i) => (
          <path
            key={`p${i}`}
            d={d}
            pathLength={1000}
            className="brand-trace"
            stroke={i % 3 === 2 ? '#f5a623' : '#97b6ff'}
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#trace-glow)"
            style={{ animationDelay: `${-i * 0.55}s`, animationDuration: `${2.4 + (i % 3) * 0.5}s` }}
          />
        ))}
      </svg>

      {/* Edge shading so the slide text stays easy to read. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(6_13_27/0.75)_100%)]" />

      {/* Logo lockup: floating Q above the full name. Sits behind the text on small screens. */}
      <div className="absolute inset-x-0 bottom-[13.5rem] mx-auto flex w-[86vw] flex-col items-center opacity-60 md:bottom-[8.5rem] lg:inset-x-auto lg:bottom-auto lg:right-[4%] lg:top-1/2 lg:w-[min(40vw,600px)] lg:-translate-y-1/2 lg:opacity-100">
        <div className="relative hidden aspect-square w-[46%] lg:block">
          <div className="brand-glow absolute inset-[10%] rounded-full bg-cobalt blur-[70px]" />
          <div className="brand-ring absolute inset-0 rounded-full border border-brand-300/30">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300 shadow-[0_0_14px_4px_rgb(151_182_255/0.7)]" />
          </div>
          <div className="brand-ring brand-ring--reverse absolute inset-[14%] rounded-full border border-dashed border-white/20">
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber shadow-[0_0_12px_3px_rgb(245_166_35/0.7)]" />
          </div>
          <img
            src={qMark}
            alt=""
            className="brand-q absolute inset-[18%] h-[64%] w-[64%] object-contain drop-shadow-[0_24px_48px_rgb(26_79_227/0.55)]"
          />
        </div>

        <svg viewBox={wordmarkViewBox} className="mt-8 w-full overflow-visible" fill="none">
          <defs>
            <filter id="wm-glow" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Faint guide outline */}
          {shapes.map((d, i) => (
            <path key={`o${i}`} d={d} stroke="rgb(151 182 255 / 0.18)" strokeWidth="2" />
          ))}

          {/* Letters fill in once they've been drawn */}
          {wordmarkLetters.map((d, i) => (
            <path
              key={`f${i}`}
              d={d}
              className="wm-fill"
              fill="#fff"
              fillRule="evenodd"
              style={{ animationDelay: `${0.9 + i * 0.07}s` }}
            />
          ))}
          <path
            d={wordmarkAccent}
            className="wm-fill"
            fill="#1a4fe3"
            style={{ animationDelay: `${0.9 + wordmarkLetters.length * 0.07}s` }}
          />

          {/* A line draws each letter, one after another */}
          {shapes.map((d, i) => (
            <path
              key={`d${i}`}
              d={d}
              pathLength={1000}
              className="wm-draw"
              stroke="#97b6ff"
              strokeWidth="3"
              strokeLinejoin="round"
              style={{ animationDelay: `${i * 0.07}s` }}
            />
          ))}

          {/* Snakes: bright heads chasing around every outline */}
          {shapes.map((d, i) => (
            <path
              key={`s${i}`}
              d={d}
              pathLength={1000}
              className="wm-snake"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#wm-glow)"
              style={{ animationDelay: `${-i * 0.35}s` }}
            />
          ))}
          {shapes.map((d, i) => (
            <path
              key={`a${i}`}
              d={d}
              pathLength={1000}
              className="wm-snake wm-snake--amber"
              stroke="#f5a623"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#wm-glow)"
              style={{ animationDelay: `${-i * 0.5 - 1}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
