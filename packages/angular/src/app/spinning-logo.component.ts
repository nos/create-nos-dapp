import { Component } from '@angular/core';

@Component({
  selector: 'spinning-logo',
  template: `
    <div class="logo-container">
      <img src={{nosLogo}} class="nos-logo" alt="nOS logo" />
    </div>
  `,
  styles: [
    '.logo-container { display: block; max-width: 200px; margin: 32px auto; position: relative; }',
    '.nos-logo { animation: nOS-logo-spin infinite 3s linear; width: 100% }',
    '@keyframes nOS-logo-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }'
  ]
})
export class SpinningLogoComponent {
  nosLogo = './../../assets/logo.png';
}
