import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#1e40af] text-white shadow-lg">
      
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div class="flex items-center gap-6">
          
          <a routerLink="/home" class="flex items-center gap-2 group cursor-pointer">
            <div class="text-pink-500">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
               </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold tracking-tight">e<span class="text-pink-500">-</span>tce</span>
              <span class="text-[0.5rem] opacity-70 tracking-wider uppercase">Sistema de Acesso e Serviços</span>
            </div>
          </a>

        </div>

        <div class="flex items-center gap-4 md:gap-8 flex-1 justify-end">
          
          <a routerLink="/home" 
             routerLinkActive="text-pink-400"
             class="p-2 hover:bg-white/10 rounded-full transition cursor-pointer" title="Menu Principal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a>

          <div class="hidden md:flex relative w-64 lg:w-96">
            <input type="text" 
                   placeholder="Busca avançada..." 
                   class="w-full bg-blue-900/40 border border-blue-400/30 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-blue-200 transition-all">
            <button class="absolute right-3 top-2 text-blue-200 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div class="flex items-center gap-3 border-r border-blue-400/30 pr-6">
            
            <a routerLink="/notificacoes" 
               routerLinkActive="text-pink-400"
               class="relative p-1 hover:text-pink-400 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full"></span>
            </a>

            <a routerLink="/calendario" 
               routerLinkActive="text-pink-400"
               class="p-1 hover:text-pink-400 transition cursor-pointer" title="Calendário">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>

          </div>

          <div class="flex items-center gap-3 pl-2">
            <div class="text-right hidden sm:block">
              <p class="text-xs opacity-80">Olá, Meu Nome</p>
            </div>
            <div class="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center text-white font-bold border-2 border-white/20 shadow-md">
              MN
            </div>
          </div>

        </div>
      </div>
    </header>

    <main class="container mx-auto p-6 flex-1">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[400px]">
        <router-outlet></router-outlet>
      </div>
    </main>
  `
})
export class AppComponent {}