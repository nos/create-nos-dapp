import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1 class="title">A nOS dApp starter-kit!</h1>
      
      <spinning-logo></spinning-logo>
  </header>
  `,
  styles: [
    '.header { background-color: #f0f0f0; color: #333333; padding: 24px; margin-bottom: 32px; }',
    '.title { font-size: 1.5em; }'
  ]
})
export class HeaderComponent { }
