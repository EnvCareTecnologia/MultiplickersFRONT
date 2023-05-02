import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresComponent } from './colaboradores.component';

const routes: Routes = [
  { path: '', component: ColaboradoresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }