import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProblemCrisisPage } from './problem-crisis.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemCrisisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProblemCrisisPage]
})
export class ProblemCrisisPageModule {}
