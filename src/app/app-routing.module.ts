import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'personal-details',
    loadChildren: () => import('./pages/personal-details/personal-details.module').then( m => m.PersonalDetailsPageModule)
  },
  {
    path: 'health-details',
    loadChildren: () => import('./pages/health-details/health-details.module').then( m => m.HealthDetailsPageModule)
  },
  {
    path: 'facial-identity',
    loadChildren: () => import('./pages/facial-identity/facial-identity.module').then( m => m.FacialIdentityPageModule)
  },
  {
    path: 'coverage-details',
    loadChildren: () => import('./pages/coverage-details/coverage-details.module').then( m => m.CoverageDetailsPageModule)
  },
  {
    path: 'quotation',
    loadChildren: () => import('./pages/quotation/quotation.module').then( m => m.QuotationPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
