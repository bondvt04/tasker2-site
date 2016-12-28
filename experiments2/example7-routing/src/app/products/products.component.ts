import { Component, OnInit } from '@angular/core';
import {Routes, Router, ActivatedRoute} from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: ':id', component: ByIdComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'sportify', component: SportifyComponent },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }
  goToProduct(id:string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-products-main',
  template: '<div>products MainComponent</div>',
})
export class MainComponent {

}

@Component({
  selector: 'app-products-byid',
  template: '<div>products ByIdComponent</div>',
})
export class ByIdComponent {

}

@Component({
  selector: 'app-products-interest',
  template: '<div>products InterestComponent</div>',
})
export class InterestComponent {

}

@Component({
  selector: 'app-products-spotify',
  template: '<div>products SportifyComponent</div>',
})
export class SportifyComponent {

}
