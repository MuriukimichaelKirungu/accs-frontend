import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Import appConfig for providers

// Bootstrapping the application
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));  // Catch and log errors during bootstrap
