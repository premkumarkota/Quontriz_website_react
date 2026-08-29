export function QuontrizMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="31" r="20.5" stroke="currentColor" strokeWidth="6.8" />
      <path
        d="M32 47.2 C26.2 47.2 22.4 43.1 22.6 37.2 C22.8 32.8 26.2 29.6 31.2 29.6"
        stroke="currentColor"
        strokeWidth="6.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
