import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, X, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state, replace with actual auth

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-health-darker/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-gradient">HealthTrack</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-health-blue transition-colors">Home</Link>
          <Link to="/features" className="text-gray-300 hover:text-health-blue transition-colors">Features</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-health-blue transition-colors">Pricing</Link>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={18} />
                  <span>My Account</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-health-card border border-white/10">
                <DropdownMenuItem className="hover:bg-white/5">
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/5">
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/5">
                  <Link to="/journal" className="w-full">Journal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/5"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-health-blue text-health-blue hover:bg-health-blue/20"
                onClick={() => setIsLoggedIn(true)}
              >
                Log In
              </Button>
              <Button className="bg-health-blue hover:bg-health-blue/80 text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu} className="p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-health-darker/95 backdrop-blur-lg border-b border-white/10 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-300 hover:text-health-blue py-2 transition-colors" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/features" className="text-gray-300 hover:text-health-blue py-2 transition-colors" onClick={toggleMobileMenu}>Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-health-blue py-2 transition-colors" onClick={toggleMobileMenu}>Pricing</Link>
            
            {isLoggedIn ? (
              <>
                <div className="h-px bg-white/10 my-2"></div>
                <Link to="/dashboard" className="text-gray-300 hover:text-health-blue py-2 transition-colors" onClick={toggleMobileMenu}>Dashboard</Link>
                <Link to="/profile" className="text-gray-300 hover:text-health-blue py-2 transition-colors" onClick={toggleMobileMenu}>Profile</Link>
                <Link to="/journal" className="text-gray-300 hover:text-health-blue py-2 transition-colors" onClick={toggleMobileMenu}>Journal</Link>
                <Button variant="ghost" className="justify-start px-0 hover:bg-transparent hover:text-health-blue"
                  onClick={() => {
                    setIsLoggedIn(false);
                    toggleMobileMenu();
                  }}
                >
                  Log out
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-3 pt-2">
                <Button variant="outline" className="border-health-blue text-health-blue hover:bg-health-blue/20 w-full"
                  onClick={() => {
                    setIsLoggedIn(true);
                    toggleMobileMenu();
                  }}
                >
                  Log In
                </Button>
                <Button className="bg-health-blue hover:bg-health-blue/80 text-white w-full"
                  onClick={() => {
                    setIsLoggedIn(true);
                    toggleMobileMenu();
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
