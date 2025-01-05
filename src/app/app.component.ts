import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div>
      <h1>{{ 'TITLE' | translate }}</h1>
      <button (click)="switchLanguage('en')">English</button>
      <button (click)="switchLanguage('es')">Español</button>
      <button (click)="switchLanguage('de')">Germany</button>
    </div>
  `,
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    // Establece el idioma predeterminado
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
  }
}

/* @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-translate';
}
 */