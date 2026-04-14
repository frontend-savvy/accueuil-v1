import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-16 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="font-bold text-3xl tracking-tight">exaucé</div>
        
        <div className="flex flex-col gap-2 text-sm text-blue-200">
          <p>Contactez-nous</p>
          <a href="mailto:contact@exauce.fr" className="hover:text-white transition-colors">
            contact@exauce.fr
          </a>
          <p>01 02 03 04 05</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between text-xs text-blue-200">
        <p>&copy; 2026 Exaucé. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Mentions légales</Link>
          <Link href="#" className="hover:text-white">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
