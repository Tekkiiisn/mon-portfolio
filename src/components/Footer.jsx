import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-emerald-500/20 bg-gradient-to-b from-gray-900/30 to-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © {year} Hamidou Mbodj. Tous droits réservés.
          </p>

          
        </div>
      </div>
    </footer>
  );
}
