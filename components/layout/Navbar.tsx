"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Particuliers", href: "#" },
    { name: "Indépendants", href: "#" },
    { name: "TPE / PME", href: "#" },
    { name: "Dirigeants", href: "#" },
    { name: "Bourse", href: "#" },
    { name: "Immobilier", href: "#" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto w-full bg-white z-50">
      <div className="font-bold text-2xl tracking-tight text-brand-blue flex items-center gap-1">
        exaucé
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md px-6 py-5 shadow-md shadow-brand-blue/20">
          Prendre rendez-vous
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white p-6">
            <SheetTitle className="font-bold text-2xl tracking-tight text-brand-blue mb-8">
              exaucé
            </SheetTitle>
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">
                  {link.name}
                </Link>
              ))}
              <Button className="bg-brand-blue hover:bg-blue-700 text-white rounded-md mt-4 w-full py-6">
                Prendre rendez-vous
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
