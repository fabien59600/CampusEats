import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartManagerService {

  constructor() { }

  cartContent=[];
  total=0;

  addToCart(item:any){
    this.cartContent.push(item);
    this.total+=item.price;
  }

  removeToCart(id: number){
    this.total-=this.cartContent.find(food => food.id === id).price;
    this.cartContent.splice(this.cartContent.indexOf(this.cartContent.find( food => food.id === id)),1);
  }

  getCart(){
    return this.cartContent;
  }

  getTotal(){
    return this.total;
  }

}
