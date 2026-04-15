import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-12 border-[#eb8ccf] bg-brand-blue text-white py-16 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
 <div className="font-extrabold italic text-3xl tracking-tight text-white flex items-center gap-1 w-[200px]">
          єxonéo
        </div>
        
        <div className="flex flex-col gap-2 text-sm text-blue-200">
          <p className="text-white font-semibold mb-2">Contact</p>
          <p  className="hover:text-white transition-colors">
            Réserver votre appel découverte
          </p>
          <a href="mailto:contact@exauce.fr" className="hover:text-white transition-colors">
            contact@єxoneo.fr
          </a>
    
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t-2 border-[#C0E0F0] flex flex-col md:flex-row justify-between text-xs text-blue-200">
        <p>&copy; {new Date().getFullYear()}   єxonéo, Tous droits réservés.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Mentions légales</Link>
          <Link href="#" className="hover:text-white">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
