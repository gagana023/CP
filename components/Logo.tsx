import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Manage My Finance
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Manage My Finance
      </p>
    </a>
  );
}

export default Logo;
