import { cn } from "../../lib/utils";

const VARIANTS = {
  default:
    "bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-200",
  amber:
    "bg-amber-100 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20",
  confidential:
    "bg-neutral-900/90 dark:bg-white/10 text-white dark:text-neutral-200 border border-white/10 dark:border-white/10",
};

const Badge = ({ variant = "default", className, children, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        VARIANTS[variant] || VARIANTS.default,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
