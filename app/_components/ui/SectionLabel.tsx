"use client";

export default function SectionLabel({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {index && (
        <span className="text-xs font-display font-medium text-brand-orange">
          {index}
        </span>
      )}
      <span className="h-px w-8 bg-brand-orange/60" />
      <span className="text-[11px] font-display font-medium uppercase tracking-[0.35em] text-white/60">
        {label}
      </span>
    </div>
  );
}
