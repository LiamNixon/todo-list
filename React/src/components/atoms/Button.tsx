// Packages
import React from "react";

// Interfaces
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  ...props
}) => {
  // Style definitions
  const buttonStyles = new Map([
    ["default", "bg-sky-700 text-white hover:bg-sky-600"],
    [
      "outline",
      "border border-2 border-sky-700 bg-white text-sky-700 hover:bg-sky-700 hover:text-white",
    ],
  ]);

  return (
    <button
      className={`${buttonStyles.get(
        variant
      )} h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors duration-100`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
