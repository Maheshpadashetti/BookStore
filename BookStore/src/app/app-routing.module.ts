import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrdergreetingComponent } from './Component/ordergreeting/ordergreeting.component';



const routes: Routes = [
  {path:"toolbar",component:ToolbarComponent},
  {path:"",component:DisplaybookComponent},
  {path:"index",component:DisplaybookComponent},
  {path:"Displaybook",component:DisplaybookComponent},
 

//   {path:"",component:ToolbarComponent,
//   children:[
//   {path:"displaybook",component:DisplaybookComponent},
//   {path:"cart",component:CartComponent},
// ]},
  {path:"cart",component:CartComponent},
  {path:"greeting",component:OrdergreetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
