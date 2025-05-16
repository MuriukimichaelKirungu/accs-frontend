// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { LoadingComponent } from './pages/loading/loading.component';
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard.component';
import { GiveComponent } from './pages/give/give.component';


export const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'give', pathMatch: 'full' },
  { path: 'give', component: GiveComponent },
]
