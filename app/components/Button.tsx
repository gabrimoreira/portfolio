import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 active:scale-95 cursor-pointer";

  const variants = {
    primary: `
      bg-gradient-to-r from-[var(--gradient-start)]  to-[var(--gradient-end)]
      text-primary-foreground
      hover:opacity-90 
      shadow-[0_0_20px_-5px_var(--gradient-start)]
      border-0
    `,
    outline: "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}