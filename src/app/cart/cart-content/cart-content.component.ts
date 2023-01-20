import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListService } from 'src/app/product-list.service';
import { Cart, Product, RemovedItem } from 'src/app/productModule';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent {
@Input() cartProductFromParent:Cart[]=[];
@Output() removedItem=new EventEmitter();
totalAmount:number = 0;
constructor(private productListService: ProductListService){
  
}
ngOnInit(){
this.totalAmount=this.productListService.getTotalAmount();
}
removeFromCart(itemToRemove:Product):void{
  let removed:RemovedItem =new RemovedItem(1,itemToRemove);
  this.removedItem.emit(removed);
  this.totalAmount=this.productListService.getTotalAmount();
}
removeAllFromCart(itemToRemove:Product):void{
  let removed:RemovedItem =new RemovedItem(0,itemToRemove);
  this.removedItem.emit(removed);
  this.totalAmount=this.productListService.getTotalAmount();
}
}
