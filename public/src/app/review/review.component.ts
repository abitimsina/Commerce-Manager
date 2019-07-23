// import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// // import { Review } from '../review';
// import { Restaurant } from '../restaurant';


// @Component({
//   selector: 'app-review',
//   templateUrl: './review.component.html',
//   styleUrls: ['./review.component.css']
// })
// export class ReviewComponent implements OnInit {
//   review: Review = {name: '', cuisine: '', price: ''};
//   restaurant: Restaurant = {name: '', cuisine: '', price: '', _id: ''};
//   constructor(private _http: HttpService, private _router: Router, private route: ActivatedRoute) { }

//   ngOnInit() {
//     this.route.params.subscribe((params: Params) => {this.getRestaurant(params.id)});
//   }
//   getRestaurant(id: string) {
//     this._http.singleRestaurant(id).subscribe((data: Restaurant) => {
//       this.restaurant = data;
//     });
//   }
//   reviewRestaurant(review: Review) {
//     console.log(review);
//     this.restaurant.reviews.push(review);
//     this._http.editRestaurants(this.restaurant).subscribe((data: Restaurant) => {
//       this._router.navigate(['/products/' + data._id]);
//     });

//   }

// }


// // import { Component, OnInit } from '@angular/core';
// // import { HttpService } from '../http.service';
// // import { Router, ActivatedRoute, Params } from '@angular/router';
// // import { Review } from '../review';
// // import { Restaurant } from '../restaurant';

// // @Component({
// //   selector: 'app-review',
// //   templateUrl: './review.component.html',
// //   styleUrls: ['./review.component.css']
// // })
// // export class ReviewComponent implements OnInit {
// //   review: Review = {name: '', stars: 0, content: ''};
// //   restaurant: Restaurant = {name: '', cuisine: '', _id: ''};
// //   name = false;
// //   content = false;

// //   constructor(private _http: HttpService, private _router: Router, private route: ActivatedRoute) { }

// //   ngOnInit() {
// //     this.route.params.subscribe((params: Params) => {this.getRestaurant(params.id)});
// //   }
// //   getRestaurant(id: string) {
// //     this._http.singleRestaurant(id).subscribe((data: Restaurant) => {
// //       this.restaurant = data;
// //     });
// //   }
// //   reviewRestaurant(review: Review) {
// //     if (this.review.name.length < 3 || this.review.content.length < 3 ) {
// //       if (this.review.name.length < 3) {
// //         this.name = true;
// //       }
// //       if (this.review.content.length < 3 ) {
// //         this.content = true;
// //       }
// //       return;
// //     }
// //     console.log(review);
// //     this.restaurant.reviews.push(review);
// //     this._http.editRestaurants(this.restaurant).subscribe((data: Restaurant) => {
// //       this._router.navigate(['/restaurants/' + data._id]);
// //     });

// //   }

// // }import { Component, OnInit } from '@angular/core';
// // import { HttpService } from '../http.service';
// // import { Router, ActivatedRoute, Params } from '@angular/router';
// // import { Review } from '../review';
// // import { Restaurant } from '../restaurant';

// // @Component({
// //   selector: 'app-review',
// //   templateUrl: './review.component.html',
// //   styleUrls: ['./review.component.css']
// // })
// // export class ReviewComponent implements OnInit {
// //   review: Review = {name: '', stars: 0, content: ''};
// //   restaurant: Restaurant = {name: '', cuisine: '', _id: ''};
// //   name = false;
// //   content = false;

// //   constructor(private _http: HttpService, private _router: Router, private route: ActivatedRoute) { }

// //   ngOnInit() {
// //     this.route.params.subscribe((params: Params) => {this.getRestaurant(params.id)});
// //   }
// //   getRestaurant(id: string) {
// //     this._http.singleRestaurant(id).subscribe((data: Restaurant) => {
// //       this.restaurant = data;
// //     });
// //   }
// //   reviewRestaurant(review: Review) {
// //     if (this.review.name.length < 3 || this.review.content.length < 3 ) {
// //       if (this.review.name.length < 3) {
// //         this.name = true;
// //       }
// //       if (this.review.content.length < 3 ) {
// //         this.content = true;
// //       }
// //       return;
// //     }
// //     console.log(review);
// //     this.restaurant.reviews.push(review);
// //     this._http.editRestaurants(this.restaurant).subscribe((data: Restaurant) => {
// //       this._router.navigate(['/restaurants/' + data._id]);
// //     });

// //   }
// // }
