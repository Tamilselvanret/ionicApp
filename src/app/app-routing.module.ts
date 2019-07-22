import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  
  { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenancePageModule' },
  { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsPageModule' },
  { path: 'problem-crisis', loadChildren: './problem-crisis/problem-crisis.module#ProblemCrisisPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'daily-target', loadChildren: './daily-target/daily-target.module#DailyTargetPageModule' },
  { path: 'target-attained', loadChildren: './target-attained/target-attained.module#TargetAttainedPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
