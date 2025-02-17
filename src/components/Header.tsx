import React from "react";

interface HeaderProps {
  pageName: string;
}

const Header: React.FC<HeaderProps> = ({ pageName }) => {
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(/Header.jfif)` }}
    >
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
        <h1 className="text-black text-4xl font-bold">{pageName}</h1>
        <p>Home // {pageName}</p>
      </div>
    </div>
  );
};

export default Header;
