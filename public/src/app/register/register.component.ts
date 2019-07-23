import { Component, OnInit } from '@angular/core';
import { Product } from '../restaurant';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  restaurant: Product = {name: '', qty: 0, price: 0};
  name = false;
  qty = false;
  price = false;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

onSubmit() {
  if (this.restaurant.name.length < 3 || this.restaurant.qty < 1) {
    if (this.restaurant.name.length < 3) {
      this.name = true;
    }
    if (this.restaurant.qty < 1 ) {
      this.qty = true;
    }
    return;
  }
  console.log(this.restaurant);
  this.http.createRestaurants(this.restaurant).subscribe(data => {
  console.log(this.restaurant);
    console.log("Data =>", data);
    this.router.navigate(['/products']);
  });
}

}



