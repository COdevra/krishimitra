import React from "react";
import logoImg from "@/assets/logo.png";

interface LogoProps {
  size?: number;
  onClick?: () => void;
  textClass?: string;
  variant?: "default" | "circular";
}

const Logo: React.FC<LogoProps> = ({ size = 250, onClick, textClass, variant = "default" }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <div 
        style={{ 
          width: size,
          height: variant === "circular" ? size : size * 0.28,
          borderRadius: variant === "circular" ? "50%" : "none",
          overflow: "hidden",
          backgroundColor: variant === "circular" ? "white" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={logoImg}
          alt="KrishiMitra Logo"
          style={{ 
            width: variant === "circular" ? "70%" : "100%",
            height: variant === "circular" ? "70%" : "100%",
            objectFit: "contain"
          }}
          className={`flex-shrink-0 ${textClass || ''}`}
        />
      </div>
    </div>
  );
};

export default Logo;
