"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown,ChevronUp } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import Logo from "@/components/assets/Logo.png"
type NavItem = {
  title: string;
  link?: string;
  children?: {
    title: string;
    link: string;
    description?: string;
  }[];
};

// Complete Navigation Structure based on Nettlinx website
const NAVIGATION_ITEMS: NavItem[] = [
  { title: "Home", link: "/" },
  {
    title: "About", link: "/about",
    children: [
      { title: "Company Overview", link: "/about#company" },
      { title: "Board of Directors", link: "/about#directors" },
      { title: "Committees", link: "/about#committees" },
      { title: "Our Journey", link: "/about#journey" },
      { title: "Our Clients", link: "/about#our-clients" },

      
      // { title: "Our Clients", link: "/about#clients" }
    ]
  },
  {
    title: "Services", link: "/services",
    children: [
      {title: "Internet Leased Lines", link: "/services#ill"},
      { title: "Technical Specifications", link: "/services#technical-specs" },
      { title: "Broadband", link: "/services#broadband" },
      { title: "Hosting & Co-location", link: "/services#hosting" },
      { title: "App Dev & Integration", link: "/services#development" }
    ]
  },
  // {
  //   title: "Subsidiaries", link: "/subsidiaries",
  //   children: [
  //     { title: "Nettlinx Realty", link: "/subsidiaries#realty" },
  //     { title: "Nettlinx Technologies", link: "/subsidiaries#technologies" },
  //     { title: "SV Green", link: "/subsidiaries#svgreen" },
  //     { title: "Nettlinx INC", link: "/subsidiaries#inc" },
  //     { title: "Salian SE", link: "/subsidiaries#salian" }
  //   ]
  // },
  // {
  //   title: "Investors", link: "/investors",
  //   children: [
  //     { title: "Annual Reports", link: "/investors#annual-reports" },
  //     { title: "Annual Returns", link: "/investors#annual-returns" },
  //     { title: "Postal Ballot / EGM", link: "/investors#postal-ballot" },
  //     { title: "Financial Results", link: "/investors#financial-results" },
  //     { title: "Corporate Governance", link: "/investors#governance" },
  //     { title: "Shareholding Pattern", link: "/investors#shareholding" },
  //     { title: "Policies", link: "/investors#policies" },
  //     { title: "FAQs and Forms for TDS", link: "/investors#faqs-tds" },
  //     { title: "Disclosures under Regulation 30", link: "/investors#disclosures" },
  //     { title: "Code of Ethics", link: "/investors#ethics" },
  //     { title: "Other Disclosures", link: "/investors#other-disclosures" },
  //     { title: "Investor Service Request", link: "/investors#service-request" },
  //     { title: "Contact Information", link: "/investors#contact" },
  //     { title: "Share Price", link: "/investors#share-price" },
  //     { title: "Newspaper Publications", link: "/investors#newspaper" },
  //     { title: "Investor Presentations", link: "/investors#presentations" }
  //   ]
  // },
  {
    title: "Resources", link: "/resources",
    children: [
      { title: "Blog / Newsroom", link: "/resources#blog" },
      { title: "Case Studies", link: "/resources#cases" },
      { title: "Careers", link: "/resources#careers" }, 
      { title: "FAQs", link: "/resources#faqs" }
    ]
  },
  {
    title: "Support", link: "/support",
    children: [
      { title: "Contact Us", link: "/support#contact" },
      { title: "Ticket Portal", link: "/support#tickets" }
    ]
  }
];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
    setNestedDropdown(null);
  }, [location]);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashOnLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashOnLoad();
    window.addEventListener('hashchange', handleHashOnLoad);
    return () => window.removeEventListener('hashchange', handleHashOnLoad);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (link: string) => {
    if (link.includes('#')) {
      const [page, section] = link.split('#');
      const targetPage = page || '/';
      
      if (location === targetPage) {
        // Same page, scroll to section
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Different page - will navigate and scroll on page load
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    } else {
      // Main page navigation - scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    
    // Close menus
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleMainNavClick = (link: string) => {
    // Always scroll to top when clicking main nav items
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    
    // Close menus
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSubmenu = (title: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === title ? null : title);
  };

  // Desktop dropdown animations
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  // Mobile menu animations
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileSubmenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <motion.div
                className="flex items-center"
              >
                <div className="relative">
                  <span className="">
                    <img src={Logo} alt="Nettlinx Logo" className="w-20 h-22" />
                  </span>
                </div>
                <div className="-ml-2 my-2">
                  <h1 className="text-2xl font-bold gradient-text-premium">
                    {COMPANY_INFO.name}
                  </h1>
                  <p className="text-xs text-primary -mt-1">
                    Your Power to Connect
                  </p>
                </div>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.link ? (
                  <Link href={item.link}>
                    <Button 
                      variant="ghost" 
                      className="h-auto py-2 px-3 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => handleMainNavClick(item.link!)}
                    >
                      {item.title}
                      {item.children && (
                        <ChevronDown className="ml-1 h-3 w-3" />
                      )}
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="h-auto py-2 px-3 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item.title}
                    {item.children && (
                      activeDropdown === item.title ? (
                        <ChevronUp className="ml-1 h-3 w-3" />
                      ) : (
                        <ChevronDown className="ml-1 h-3 w-3" />
                      )
                    )}

                  </Button>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.title && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <motion.div key={child.title} variants={itemVariants}>
                          <Link href={child.link}>
                            <button
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                              onClick={() => handleLinkClick(child.link)}
                            >
                              {child.title}
                            </button>
                          </Link>
                          
                          {/* Nested dropdown for services */}
                          {child.children && (
                            <div className="ml-4 pl-4 border-l border-gray-200">
                              {child.children.map((nested) => (
                                <Link key={nested.title} href={nested.link}>
                                  <button
                                    className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-primary transition-colors"
                                    onClick={() => handleLinkClick(nested.link)}
                                  >
                                    {nested.title}
                                  </button>
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Desktop Login Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2"
              >
                Login
              </Button>
            </div>
          </div>
          



          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 space-y-2 max-h-96 overflow-y-auto">
                {NAVIGATION_ITEMS.map((item) => (
                  <div key={item.title}>
                    {item.link ? (
                      <div className="flex items-center">
                        <Link href={item.link} className="flex-1">
                          <button
                            className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                            onClick={() => handleMainNavClick(item.link!)}
                          >
                            {item.title}
                          </button>
                        </Link>
                        {item.children && (
                          <button
                            className="px-4 py-3 text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={() => toggleMobileSubmenu(item.title)}
                          >
                            <ChevronDown 
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                mobileActiveDropdown === item.title && "rotate-180"
                              )} 
                            />
                          </button>
                        )}
                      </div>
                    ) : (
                      <button
                        className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between"
                        onClick={() => toggleMobileSubmenu(item.title)}
                      >
                        {item.title}
                        {item.children && (
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              mobileActiveDropdown === item.title && "rotate-180"
                            )} 
                          />
                        )}
                      </button>
                    )}

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.children && mobileActiveDropdown === item.title && (
                        <motion.div
                          variants={mobileSubmenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="bg-gray-50 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <div key={child.title}>
                              <Link href={child.link}>
                                <button
                                  className="w-full text-left px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                  onClick={() => handleLinkClick(child.link)}
                                >
                                  {child.title}
                                </button>
                              </Link>
                              
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {/* Desktop Login Button */}
                <div className="ml-4 pl-4 border-l border-gray-200">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-primary w-full hover:bg-primary/90 text-white font-medium px-4 py-2"
                  >
                    Login
                  </Button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}