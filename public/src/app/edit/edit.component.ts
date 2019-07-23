import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../restaurant';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  restaurant: Product = { name: '', qty: 0, price: 0}; //I added price
  // qty: string;
  name = false;
  qty = false;
  price = false;

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getSingleRestaurant(params.id);
    });
  }

  getSingleRestaurant(id: string) {

    this.http.singleRestaurant(id).subscribe((data: Product) => { console.log(data); this.restaurant = data;});

  }

  editUpdateRestaurant(restaurant: Product) {
    if (this.restaurant.name.length < 3 || this.restaurant.qty < 1) {
      if (this.restaurant.name.length < 3) {
        this.name = true;
      }
      if (this.restaurant.qty < 1 ) {
        this.qty = true;
      }
      return;
    }
    console.log(restaurant);
    this.http.editRestaurants(this.restaurant).subscribe((data: Product) => {
      this.router.navigate(['/products']);
    });

  }

}


// editUpdateRestaurant(restaurant: Restaurant) {
  //   console.log(restaurant);
  //   this.http.editRestaurants(restaurant).subscribe((data: Restaurant) => {
  //     this.router.navigate(['/products']);
  //   });

  // }
