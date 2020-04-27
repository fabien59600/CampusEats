import { Component, OnInit } from '@angular/core';
import {CartManagerService} from '../cart-manager.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  constructor(
    private cartService: CartManagerService,
    private router: Router
  ) { }

  foodList=[{
    id : 1, 
    companyName : 'Burgers Factory',
    foodName : 'CheeseBurger',
    description :'Steak 150g, tomate, salade, tranche de cheddar fondu, sauce ketchup, servit avec Frites',
    imagePath : 'assets/img/burger.jpg',
    price : 7.5
  },
  { 
    id : 2,
    companyName : 'Dominos Pizza',
    foodName : 'Pizza 4 frommages',
    description :'Sauce tomate, mozzarella, chèvre, emmental, Fourme d’Ambert A.O.P.',
    imagePath : 'assets/img/pizza.png',
    price : 10
  },
  { 
    id : 3,
    companyName : 'Gur Kebab',
    foodName : 'Kebab',
    description :'Faluche, une viande kebab, les traditionnels légumes tomates, salade oignons , une boisson 33 cl et une sauce au choix',
    imagePath : 'assets/img/kebab.png',
    price : 7.10
  },
  { 
    id : 4,
    companyName : 'Fresh Burrito',
    foodName : 'Burrito',
    description :'Riz, poulet, guacamole, tomate bio et sauce salsa roja',
    imagePath : 'assets/img/buritos.jpeg',
    price : 9.80
  }
  ];

  addToCart(food: any){
    this.cartService.addToCart(food);
  }

  getDetails(food: any): void {
    this.router.navigateByUrl('food-details')
        .then(() => {
        })
        .catch((e) => console.warn(e));
    this.cartService.updateFoodDetails(food)
  }

  ngOnInit() {
  }

}
