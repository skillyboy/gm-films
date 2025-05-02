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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 rounded-none";
  
  const variantStyles = {
    default: "bg-[#3A6E71] hover:bg-[#3A6E71] text-white",
    outline: "border-2 border-[#3A6E71] text-white hover:bg-red-600/10",
    text: "text-[#3A6E71] hover:text-[#3A6E71] underline-offset-4 hover:underline",
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