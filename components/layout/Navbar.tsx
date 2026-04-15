"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Services", href: "#" },
    { name: "Avis", href: "#" },
    { name: "À propos", href: "#" },
  ];

  return (
    <header className="w-full bg-[#F4FAFF] border-b border-[#C0E0F0] z-50 relative">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto w-full">
        <div className="font-extrabold italic text-3xl tracking-tight text-brand-blue flex items-center gap-1 w-[200px]">
          єxonéo
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 text-[15px] font-medium text-gray-700 flex-1">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex w-[200px] justify-end">
          <Button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-5 shadow-sm shadow-brand-blue/20">
            Réserver un appel gratuit
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white p-6">
              <SheetTitle className="font-extrabold italic text-2xl tracking-tight text-brand-blue mb-8">
                єxonéo
              </SheetTitle>
              <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
                {links.map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">
                    {link.name}
                  </Link>
                ))}
                <Button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md mt-4 w-full py-6 font-semibold">
                  Réserver un appel gratuit
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
