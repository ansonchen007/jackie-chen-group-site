import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-[#1B6B50] text-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:bg-[#155C45] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]",
        outline:
          "border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow",
      },
      size: {
        md: "px-6 py-3 text-base",
        lg: "px-7 py-3.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function Button({ variant, size, children, className, href, ...props }: any) {
  const classes = clsx(buttonStyles({ variant, size }), className);
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
