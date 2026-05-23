import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'px-4 py-2 rounded text-sm font-medium';
  const variants: Record<string, string> = {
    primary: `${base} bg-[color:var(--color-accent)] text-white`,
    ghost: `${base} bg-transparent text-[color:var(--color-text)] border border-transparent`,
  };
  return <button className={`${variants[variant]} ${className}`} {...props} />;
}
