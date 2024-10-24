import React from "react";
import { Button } from "../ui/button";
import BrandLogo from "../ui-constants/BrandLogo";

const Navbar = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
        <BrandLogo />

        <Button variant="secondary" className="rounded-lg">Sign Up</Button>
      </nav>
    </header>
  );
};

export default Navbar;
