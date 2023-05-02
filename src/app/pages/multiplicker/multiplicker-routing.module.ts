import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiplickerComponent } from './multiplicker.component';

const routes: Routes = [
  { path: '', component: MultiplickerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplickerRoutingModule { }
