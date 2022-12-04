import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened=false;
  title = 'sidebartoolbarteste';
  config = {
    panels: [
      { name: 'Cadastro', description: 'First section', },
      { name: 'Comercial', description: 'Second section' },
      { name: 'Administrativo', description: 'Third section' },
      { name: 'Nao Lembro', description: 'First section', },
      { name: 'Nao Lembro2', description: 'Second section' },
      { name: 'Nao Lembro3', description: 'Third section' },
    ]
  };
}
