import { Component, OnInit } from '@angular/core';
import { Product } from '../restaurant';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
restaurants: Product[] = [];
restaurant: Product = { name: '', qty: 0, price: 0}; //I added price


  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAllRestaurant();
  }

getAllRestaurant() {
  this._http.getRestaurants().subscribe((data: Product[]) => {
    this.restaurants = data;
    console.log(data);
  });
}
deleteRestaurant(id: string, index: number) {
  this._http.deleteRestaurants(id).subscribe(data => {
  this.restaurants.splice(index, 1);
  console.log(data)});
}

}


