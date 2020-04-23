import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:ToolbarComponent},
  {path:"toolbar",component:ToolbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
