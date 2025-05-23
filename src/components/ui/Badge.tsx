"use client";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-[14px] mb-4 bg-[#0167F3]/10 text-[#0167F3] dark:text-[#399AFC] border border-[#0167F3]/20 dark:border-[#399AFC]/50 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
