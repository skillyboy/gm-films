import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'default' | 'outline' | 'text';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
}

const Button = ({ 
  children, 
  href, 
  variant = 'default', 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 rounded-md";

  const variantStyles = {
    default: "bg-[var(--accent)] hover:bg-[var(--accent-bright)] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-8px_var(--accent-glow)]",
    outline: "border-2 border-[var(--accent)] text-white hover:bg-[var(--accent)] hover:-translate-y-0.5",
    text: "text-[var(--accent-bright)] hover:text-white underline-offset-4 hover:underline",
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;