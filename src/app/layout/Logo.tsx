export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-8 h-8 ${className}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`
        .spin { animation: spin 4s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .spin { animation: none; } }
      `}</style>
      <g className="spin" transform="translate(16,16)">
        <circle cx="0" cy="0" r="14" fill="none" stroke="#B2FF00" strokeWidth="2" />
      </g>
      <text x="16" y="21" textAnchor="middle" fontSize="14" fill="#E6E8EB" fontFamily="'Space Grotesk', sans-serif">
        TCR
      </text>
    </svg>
  );
}
