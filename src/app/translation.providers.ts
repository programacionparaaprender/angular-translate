import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  // Asegúrate de que esta ruta coincida con la estructura de tu proyecto
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideTranslations() {
  return importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  );
}
