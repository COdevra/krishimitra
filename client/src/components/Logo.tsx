import React from "react";

interface LogoProps {
  size?: number;
  textClass?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 40, textClass = "text-black font-bold", withText = true }) => {
  const logoSize = size;
  const scaleFactor = logoSize / 100;
  
  return (
    <div className="flex items-center">
      <svg 
        width={logoSize} 
        height={logoSize * 0.8} 
        viewBox="0 0 100 80" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Green rectangular background - base of the logo */}
        <rect x="10" y="10" width="40" height="40" fill="#196F3D" rx="2" />
        
        {/* Weather icon on top of the green background */}
        <path d="M20,25 C20,20 25,18 30,22 C35,18 40,20 40,25 C40,30 35,32 30,28 C25,32 20,30 20,25 Z" fill="#82E0AA" />
        <circle cx="28" cy="23" r="2" fill="white" />
        
        {/* Green field lines under the square */}
        <path d="M5,50 C15,46 45,46 55,50" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        <path d="M0,55 C20,50 40,50 60,55" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        <path d="M5,60 C25,55 35,55 55,60" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        
        {/* Plant stem */}
        <path d="M15,10 Q12,5 15,0" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        
        {/* Plant leaves */}
        <path d="M15,5 Q10,3 8,6" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        <path d="M15,8 Q10,8 9,11" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        <path d="M15,0 Q17,-2 20,0" stroke="#196F3D" strokeWidth="1.5" fill="none" />
        
        {/* Fill the leaves with light green */}
        <path d="M15,0 Q14,3 15,5 Q12,3 8,6 Q10,6 15,8 Q12,8 9,11 Q12,10 15,10 Z" fill="#82E0AA" />
      </svg>
      
      {withText && (
        <div className="ml-2">
          <span className={`${textClass} text-lg md:text-2xl tracking-tight`}>
            <span className="text-[#196F3D]">Krishi</span>
            <span className="text-black">Mitra</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
