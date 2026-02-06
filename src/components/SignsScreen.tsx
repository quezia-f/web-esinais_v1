import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit2, 
  Trash2, 
  CheckCircle2, 
  XCircle, 
  Clock 
} from 'lucide-react';

export function SignsScreen() {
  // Mock data for signs
  const signs = [
    { id: 1, name: 'Computador', category: 'Tecnologia', user: 'Maria da Silva', date: '12-06-2025', status: 'Aprovado' },
    { id: 2, name: 'Internet', category: 'Tecnologia', user: 'Carlos da Silva', date: '12-06-2025', status: 'Recusado' },
    { id: 3, name: 'Mouse', category: 'Tecnologia', user: 'Fernando Henrique', date: '12-06-2025', status: 'Pendente' },
    { id: 4, name: 'Teclado', category: 'Tecnologia', user: 'José Menezes', date: '12-06-2025', status: 'Aprovado' },
    { id: 5, name: 'Monitor', category: 'Tecnologia', user: 'Carla Moraes', date: '12-06-2025', status: 'Recusado' },
    { id: 6, name: 'Software', category: 'Tecnologia', user: 'Luis Fernando', date: '12-06-2025', status: 'Pendente' },
    { id: 7, name: 'Hardware', category: 'Tecnologia', user: 'Ana Paula', date: '11-06-2025', status: 'Aprovado' },
    { id: 8, name: 'Rede', category: 'Tecnologia', user: 'Roberto Costa', date: '11-06-2025', status: 'Aprovado' },
    { id: 9, name: 'Wifi', category: 'Tecnologia', user: 'Julia Santos', date: '11-06-2025', status: 'Pendente' },
    { id: 10, name: 'Bluetooth', category: 'Tecnologia', user: 'Pedro Lima', date: '11-06-2025', status: 'Aprovado' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Aprovado': return 'bg-[#5CB8E4] text-white border-transparent';
      case 'Recusado': return 'bg-[#C46bb6] text-white border-transparent';
      case 'Pendente': return 'bg-[#DCD899] text-[#5c5826] border-transparent';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-6 h-full overflow-hidden">
      
      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Gerenciar Sinais</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Visualize, edite e gerencie o dicionário de libras</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-[#9956F6] hover:bg-[#AC6FF7] text-white rounded-xl font-bold shadow-lg shadow-[#9956F6]/20 transition-all active:scale-95">
          <Plus className="w-5 h-5" />
          Novo Sinal
        </button>
      </div>

      {/* Main Content Card */}
      <div className="flex-1 min-h-0 bg-white dark:bg-[#1A1A24] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
         
         {/* Filters Header */}
         <div className="p-4 md:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
           <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <button className="px-4 py-2 bg-[#9956F6]/10 dark:bg-[#9956F6]/20 text-[#9956F6] dark:text-[#AC6FF7] rounded-lg text-sm font-bold whitespace-nowrap transition-colors">
                Todos
              </button>
              <button className="px-4 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
                Aprovados
              </button>
              <button className="px-4 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
                Pendentes
              </button>
              <button className="px-4 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
                Recusados
              </button>
           </div>
           
           <div className="flex items-center gap-2 w-full sm:w-auto">
             <div className="relative flex-1 sm:flex-none">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input 
                  type="text" 
                  placeholder="Buscar sinal..." 
                  className="w-full sm:w-64 pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#13131B] border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9956F6]/50 text-slate-700 dark:text-slate-200 placeholder-slate-400"
               />
             </div>
             <button className="p-2 text-slate-500 hover:text-[#9956F6] hover:bg-[#9956F6]/10 dark:hover:bg-[#9956F6]/20 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 dark:text-slate-400">
               <Filter className="w-4 h-4" />
             </button>
           </div>
         </div>

         {/* Table */}
         <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-slate-50 dark:bg-[#13131B] sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nome do Sinal</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Categoria</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Criado por</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Data</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {signs.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#9956F6]/10 dark:bg-[#9956F6]/20 flex items-center justify-center text-[#9956F6] dark:text-[#AC6FF7] font-bold text-lg">
                          {item.name.charAt(0)}
                        </div>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-[#13131B] border border-slate-200 dark:border-slate-800 rounded-md text-xs font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.user}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 tabular-nums">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(item.status)} inline-flex items-center gap-1.5`}>
                         {item.status === 'Aprovado' && <CheckCircle2 className="w-3 h-3" />}
                         {item.status === 'Recusado' && <XCircle className="w-3 h-3" />}
                         {item.status === 'Pendente' && <Clock className="w-3 h-3" />}
                         {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button title="Visualizar" className="p-2 text-slate-400 hover:text-[#9956F6] hover:bg-[#9956F6]/10 dark:hover:bg-[#9956F6]/20 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button title="Editar" className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button title="Excluir" className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
         
         {/* Pagination */}
         <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 shrink-0">
            <span>Mostrando 1 - 10 de 128 sinais</span>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2">
                <span>Linhas por página</span>
                <select className="bg-slate-100 dark:bg-[#13131B] border-none rounded-lg px-2 py-1 text-xs focus:ring-1 focus:ring-[#9956F6]">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex gap-1">
                <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md disabled:opacity-50 font-medium transition-colors" disabled>Anterior</button>
                <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md font-medium transition-colors">Próxima</button>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}
