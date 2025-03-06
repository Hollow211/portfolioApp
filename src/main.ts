import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'img-comparison-slider';
import { HomeComponent } from './components/home/home.component';
bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
