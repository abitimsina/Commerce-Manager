import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
// restaurante: Restaurant[] = [];
//I changed cuisine: '' to 0
  restaurants: Product = {name:'', qty: 0, price: 0, _id: ''}; //variable: Interface = 2 minimun properties, a ? makes property optional
  constructor(private http: HttpService,   //dependencies
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.restaurants);
    this.route.params.subscribe((params: Params) => {
      this.getOneRestaurant(params.id);
    });
  }
  getOneRestaurant(id: string) {
    this.http.singleRestaurant(id).subscribe((data: Product) => {
      console.log(data);
      // this.restaurants=[];
      this.restaurants = data;
    });
  }
  deleteRestaurant(id) {
    this.http.deleteRestaurants(id).subscribe(data => {
    this.restaurants;
    console.log(data)});
  }

}

// deleteRestaurant(id: string, index: number) {
//   this._http.deleteRestaurants(id).subscribe(data => {
//   this.restaurants.splice(index, 1);
//   console.log(data)});
// }
