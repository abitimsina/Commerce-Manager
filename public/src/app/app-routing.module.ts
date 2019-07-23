import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EditComponent } from './edit/edit.component';
// import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: 'products', component: DashboardComponent},
  {path: 'products/new', component: RegisterComponent},
  {path: 'products/:id', component: RestaurantComponent},
  {path: 'products/:id/edit', component: EditComponent},
  // {path: 'restaurants/:id/review', component: ReviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '/products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
