import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css' // Se você optar por estilos locais
})
export class HomeComponent {
  // Dados de exemplo para o dashboard
  totalProcessos = 1450;
  notificacoesPendentes = 12;
  proximaAgenda = '2025-12-20';
}