import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componnents/home/home.component';
import { RouterModule } from '@angular/router';


const routes=[
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
