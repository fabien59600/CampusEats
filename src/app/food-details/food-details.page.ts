import { Component, OnInit } from '@angular/core';
import {CartManagerService} from '../cart-manager.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {

  constructor(
    private cartService: CartManagerService,
  ) { }

  ngOnInit() {
  }

}
