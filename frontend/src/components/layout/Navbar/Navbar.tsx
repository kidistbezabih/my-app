import { Logo } from "@/components/shared/Logo";
import { useMobileMenu, useScrollPosition } from "@/hooks";
import { navigationConfig } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { NavbarDropdown } from "./NavbarDropdown";

export const Navbar: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } =
    useMobileMenu();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isScrolled = scrollPosition > 50;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F2F4F5] shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <Logo
                  size="md"
                  className={isScrolled ? "text-gray-900" : "text-white"}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigationConfig.main.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.label}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && item.children && (
                      <NavbarDropdown items={item.children} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex lg:items-center">
              <a
                href={navigationConfig.cta.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-[#EDF0F1]"
                }`}
              >
                {navigationConfig.cta.label}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => toggleMobileMenu()}
        navigation={navigationConfig}
      />
    </>
  );
};
