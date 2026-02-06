import React from 'react';
import { Trophy, Video, Star, Medal, ArrowRight } from 'lucide-react';

interface ContributeScreenProps {
  isDarkMode: boolean;
}

export function ContributeScreen({ isDarkMode }: ContributeScreenProps) {
  const topContributors = [
    {
      name: "Maria da Silva",
      avatar: "https://images.unsplash.com/photo-1590905775253-a4f0f3c426ff?auto=format&fit=crop&w=300&q=80",
      count: 1290,
      medal: "🥇"
    },
    {
      name: "João Oliveira",
      avatar: "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?auto=format&fit=crop&w=300&q=80",
      count: 1150,
      medal: "🥈"
    },
    {
      name: "Ana Costa",
      avatar: "https://images.unsplash.com/photo-1750535135733-4ade39b4d487?auto=format&fit=crop&w=300&q=80",
      count: 980,
      medal: "🥉"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-4 animate-in fade-in duration-500 overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center space-y-2 shrink-0 pt-2">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Ranking
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          Usuários que mais colaboraram com o projeto
        </p>
      </div>

      {/* Ranking Cards Section */}
      <div className="w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 shrink-0">
        {topContributors.map((user, index) => (
          <div 
            key={index}
            className={`
              relative flex flex-col items-center p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 duration-300
              ${index === 0 ? 'bg-gradient-to-b from-[#0B1E3B] to-[#162A4C] dark:from-[#0f2545] dark:to-[#1e3a66] z-10 scale-105 border-2 border-yellow-500/50' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mt-4'}
            `}
          >
            {/* Medal/Badge */}
            <div className="absolute -top-4 bg-white dark:bg-slate-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md border-2 border-slate-100 dark:border-slate-700 text-2xl">
              {user.medal}
            </div>

            {/* Avatar */}
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#9956F6] to-[#7c44c9] mb-4">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800"
              />
            </div>

            {/* User Info */}
            <h3 className={`font-bold text-lg mb-1 ${index === 0 ? 'text-white' : 'text-slate-800 dark:text-white'}`}>
              {user.name}
            </h3>
            
            <div className="flex flex-col items-center">
              <span className={`text-2xl font-black ${index === 0 ? 'text-[#AC6FF7]' : 'text-[#9956F6] dark:text-[#AC6FF7]'}`}>
                {user.count}
              </span>
              <span className={`text-xs uppercase tracking-wider font-semibold ${index === 0 ? 'text-[#AC6FF7]/70' : 'text-slate-400'}`}>
                colaborações
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex-1 w-full max-w-4xl flex flex-col items-center justify-center min-h-0 space-y-4 pb-2">
         <h2 className="text-xl md:text-2xl font-bold text-[#9956F6] dark:text-[#AC6FF7] flex items-center gap-2">
            Veja como colaborar também! <Star className="w-5 h-5 fill-current" />
         </h2>
         
         <div className="relative w-full flex-1 min-h-0 rounded-2xl overflow-hidden group cursor-pointer shadow-xl border border-slate-200 dark:border-slate-700">
            <img 
              src="https://images.unsplash.com/photo-1615987130805-d0c61fb2274e?auto=format&fit=crop&w=1200&q=80" 
              alt="Câmera de vídeo para gravação" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-full max-w-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-3 mb-2 text-white">
                    <Video className="w-6 h-6 text-[#AC6FF7]" />
                    <h3 className="font-bold text-lg">Grave seus sinais</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    Ajude a expandir nosso dicionário gravando vídeos curtos de sinais em Libras. Sua contribuição faz a diferença!
                  </p>
                  <button className="w-full py-2 bg-[#9956F6] hover:bg-[#AC6FF7] text-white rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                    Começar a gravar <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
