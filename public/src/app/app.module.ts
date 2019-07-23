import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
// import { ReviewComponent } from './review/review.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
// import HttpService and HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    EditComponent,
    // ReviewComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  // put HttpService
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
