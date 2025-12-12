import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { WidgetComponent } from './widget/widget.component';
// import { NotificacoesComponent } from './pages/notificacoes.component';
// import { CalendarioComponent } from './pages/calendario.component';

export const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    title: 'e-TCE | Dashboard' // Título estático da aba
  },
  { 
    path: 'widget', 
    component: WidgetComponent,
    title: 'e-TCE | Widget' 
  },
//   { 
//     path: 'notificacoes', 
//     component: NotificacoesComponent,
//     title: 'e-TCE | Notificações' 
//   },
//   { 
//     path: 'calendario', 
//     component: CalendarioComponent,
//     title: 'e-TCE | Calendário' 
//   },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];