import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TargetAttainedPage } from './target-attained.page';

const routes: Routes = [
  {
    path: '',
    component: TargetAttainedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TargetAttainedPage]
})
export class TargetAttainedPageModule {}
