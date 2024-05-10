import React from 'react'
import clsx from 'clsx'
import './button.css'


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | "desctructive";
  size?: 'sm' | 'lg';
  children: React.ReactNode;
};

export function Button({ children, variant = "primary", size = "lg", ...rest }: ButtonProps) {
  return (
    <button className={clsx("button", {
      "destructive": variant === 'desctructive',
      "primary": variant === 'primary',
      "sm": size === 'sm',
      "lg": size === 'lg',
    })}
      {...rest}
    >
      {children}
    </button>)
}
