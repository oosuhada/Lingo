import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold uppercase tracking-wide ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "glass-control border-2 border-b-4 text-slate-600 hover:bg-white/75 active:border-b-2 dark:text-slate-100 dark:hover:bg-white/10",

        // custom
        locked:
          "border-b-4 border-slate-300 bg-slate-200/80 text-slate-400 hover:bg-slate-200/80 active:border-b-0 dark:border-slate-600 dark:bg-slate-700/80 dark:text-slate-300",

        primary:
          "border-b-4 border-sky-500 bg-sky-400/95 text-primary-foreground shadow-[0_14px_32px_rgba(14,165,233,0.25)] hover:bg-sky-400 active:border-b-0",
        primaryOutline:
          "glass-control text-sky-600 hover:bg-sky-500/10 dark:text-sky-300",

        secondary:
          "border-b-4 border-green-600 bg-green-500/95 text-primary-foreground shadow-[0_14px_32px_rgba(34,197,94,0.28)] hover:bg-green-500 active:border-b-0",
        secondaryOutline:
          "glass-control text-green-600 hover:bg-green-500/10 dark:text-green-300",

        danger:
          "border-b-4 border-rose-600 bg-rose-500/95 text-primary-foreground shadow-[0_14px_32px_rgba(244,63,94,0.24)] hover:bg-rose-500 active:border-b-0",
        dangerOutline:
          "glass-control text-rose-600 hover:bg-rose-500/10 dark:text-rose-300",

        super:
          "border-b-4 border-indigo-600 bg-indigo-500/95 text-primary-foreground shadow-[0_14px_32px_rgba(99,102,241,0.26)] hover:bg-indigo-500 active:border-b-0",
        superOutline:
          "glass-control text-indigo-600 hover:bg-indigo-500/10 dark:text-indigo-300",

        ghost:
          "border border-transparent bg-transparent text-muted-foreground hover:bg-white/45 hover:text-foreground dark:hover:bg-white/10",

        sidebar:
          "border-2 border-transparent bg-transparent text-muted-foreground hover:bg-white/45 hover:text-foreground transition-none dark:hover:bg-white/10",
        sidebarOutline:
          "glass-control border-2 border-green-400/45 bg-green-500/10 text-green-600 hover:bg-green-500/15 transition-none dark:text-green-300",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",

        // custom
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
