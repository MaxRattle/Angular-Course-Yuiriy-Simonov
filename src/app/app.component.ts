import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-var-from-angular-course-Yuriy-Simonov';
  user = {
    name: 'Maxim',
    surname: 'Sushkov',
  };
  tooltip = 'Подсказка tooltip для ссылки';

  inlineStyleGreen = {
    width: '50%',
    background: 'green',
  };
  cssClass = 'blue';
}
