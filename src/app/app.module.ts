import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ]
})
export class AppModule implements DoBootstrap {
  
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // 1. Converte o componente Angular em um Custom Element (Web Component)
    const widgetElement = createCustomElement(WidgetComponent, { injector: this.injector });

    // 2. Registra a tag no navegador. É essa tag que o .NET/Java vai usar.
    // Dica: Use nomes com hífen (ex: meu-widget)
    customElements.define('meu-widget-financeiro', widgetElement);
  }
}
