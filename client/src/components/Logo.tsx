import React from "react";
import logoImg from "@/assets/logo.png";

interface LogoProps {
  size?: number;
  onClick?: () => void;
  textClass?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 250, onClick, textClass }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <img
        src={logoImg}
        alt="KrishiMitra Logo"
        style={{ width: size, height: size * 0.28, objectFit: "contain" }}
        className={`flex-shrink-0 ${textClass || ''}`}
      />
    </div>
  );
};

export default Logo;
