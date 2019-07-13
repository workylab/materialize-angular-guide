import { Component } from '@angular/core';
import { DrawerTranslation } from './app.model';
import { translations } from './../translations/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialize-angular-guide';

  public translations: DrawerTranslation = translations.drawer;
}
