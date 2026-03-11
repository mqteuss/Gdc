import React from 'react';
import { Search, Gamepad2, Menu } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 pointer-events-none">
      <div className="w-full h-full bg-zinc-950/70 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 md:px-6 pointer-events-auto shadow-lg shadow-black/20">
        <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="md:hidden text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800 transition-colors"
          aria-label="Toggle filters"
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center gap-2 text-emerald-400">
          <Gamepad2 size={28} />
          <h1 className="text-xl font-bold tracking-tight text-white hidden sm:block">
            Game<span className="text-emerald-400">Deal</span>Central
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-zinc-800/80 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-zinc-700/90 sm:text-sm transition-all"
            placeholder="Buscar jogos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
      
      <div className="hidden sm:flex items-center gap-4">
        <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Login
        </button>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold py-2 px-4 rounded-lg transition-colors">
          Criar Conta
        </button>
      </div>
      </div>
    </header>
  );
};
