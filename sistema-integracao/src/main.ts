import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ToolbarIntegracaoComponent } from './app/toolbar-integracao/toolbar-integracao.component';
import { provideZonelessChangeDetection } from '@angular/core';

(async () => {
  const app = await createApplication({ providers: [
    provideZonelessChangeDetection(),
  ] });

  const ToolbarEl = createCustomElement(ToolbarIntegracaoComponent, {
    injector: app.injector,
  });

  customElements.define('toolbar-integracao', ToolbarEl);
})();
