import { Component, OnInit } from '@angular/core';
import {CartManagerService} from '../cart-manager.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private cartService: CartManagerService,
    private router: Router,
  ){}

  cart=this.cartService.getCart();

  getSucces(): void {
    this.router.navigateByUrl('command-succes')
        .then(() => {
        })
        .catch((e) => console.warn(e));
}

  ngOnInit() {

  }

}
