import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeglalapComponent } from './teglalap/teglalap.component';

const routes: Routes = [
  {path:"teglalap", component:TeglalapComponent},
  {path:"" , redirectTo:"/teglalap", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
