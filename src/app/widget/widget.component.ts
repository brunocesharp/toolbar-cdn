import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: false,
  template: `
    <div class="widget-container">
      <h3>{{ titulo }}</h3>
      <p>Dados carregados para o ID: <strong>{{ userId }}</strong></p>
      
      <button (click)="executarAcao()">Realizar Ação</button>
    </div>
  `,
  styles: [`
    /* O ShadowDom isola este CSS. Ele não vaza para fora nem aceita CSS de fora */
    .widget-container {
      border: 2px solid #007bff;
      padding: 20px;
      border-radius: 8px;
      background-color: #f9f9f9;
      font-family: sans-serif;
    }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `],
  // CRÍTICO: Isso garante o isolamento total de estilos (Shadow DOM)
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WidgetComponent {
  // Entrada de dados (virá como atributo HTML: user-id="123")
  @Input('user-id') userId: string = '';
  @Input() titulo: string = 'Meu Widget Padrão';

  // Saída de dados (Eventos JavaScript)
  @Output() acao = new EventEmitter<string>();

  executarAcao() {
    // Emite o evento para a aplicação pai (.NET/Java)
    this.acao.emit(`Ação realizada pelo usuário ${this.userId} às ${new Date().toLocaleTimeString()}`);
  }
}