export default function StrikeDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative h-10 w-full overflow-hidden ${flip ? "scale-y-[-1]" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-full strike-mark">
        <path
          d="M0,20 L140,20 L165,4 L190,32 L215,20 L980,20 L1005,6 L1030,30 L1055,20 L1200,20"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}
