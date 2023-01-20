import { Component,Input,OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Cart, Product, RemovedItem } from '../productModule';
import {FormsModule, NgModel} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProduct?:Cart[];
  phone:string=""
  phoneIsValid:boolean = true;
  name:string=""
  nameIsValid:boolean = false;
  constructor(private productListService: ProductListService,private router:Router){

  }
  
ngOnInit(){
 this.cartProduct= this.productListService.getCartProducts()
}
sendData(){
  this.router.navigate(['/orderConfirm'])
}
removeFromCart(prod:RemovedItem){
  if(prod.flag==1)
  this.productListService.removeProductFromCart(prod.product);
  else
  this.productListService.removeAllProductFromCart(prod.product);
  alert('Product removed successfully');
}
validatePhone(event:string){
  let testReg=RegExp('^[0-9]*$');
  if(event.length>0)
  this.phoneIsValid=testReg.test(event)&&event.length==12
// console.log(event +" Is valid= "+this.phoneIsValid);
}
validateName(name:string){
  console.log(name);
if(name.length<1 ||name==undefined||name==null)
this.nameIsValid=false;
else
this.nameIsValid=true;
}
}
