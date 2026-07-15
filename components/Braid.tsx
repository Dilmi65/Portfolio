export default function Braid({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        className="w-full h-8 md:h-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,24 C50,4 100,44 150,24 C200,4 250,44 300,24 C350,4 400,44 450,24 C500,4 550,44 600,24 C650,4 700,44 750,24 C800,4 850,44 900,24 C950,4 1000,44 1050,24 C1100,4 1150,44 1200,24"
          fill="none"
          stroke="#1F6F72"
          strokeWidth="2"
          strokeLinecap="round"
          className="braid-path"
        />
        <path
          d="M0,24 C50,44 100,4 150,24 C200,44 250,4 300,24 C350,44 400,4 450,24 C500,44 550,4 600,24 C650,44 700,4 750,24 C800,44 850,4 900,24 C950,44 1000,4 1050,24 C1100,44 1150,4 1200,24"
          fill="none"
          stroke="#D96B4F"
          strokeWidth="2"
          strokeLinecap="round"
          className="braid-path"
          style={{ animationDelay: "0.15s" }}
        />
      </svg>
    </div>
  );
}
