import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  const reduced = usePrefersReducedMotion();
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="#B2FF00"
        strokeWidth="2"
        fill="none"
        strokeDasharray="88"
      >
        {!reduced && (
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="88"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="12"
        fontFamily="Space Grotesk, sans-serif"
        fill="#E6E8EB"
      >
        TCR
      </text>
    </svg>
  );
}
