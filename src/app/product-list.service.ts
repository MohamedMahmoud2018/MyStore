import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, skip } from 'rxjs';
import { Cart, Product } from './productModule';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
cartProducts:Cart[]=[]
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
 return this.http.get<Product[]>('../assets/data.json')
  }
  addProductToCart(count: number,prod:Product)  {
    let index= this.cartProducts.findIndex(c=>c.items.id===prod.id)
    if(index!=-1)
    this.cartProducts[index].count+=count;
    else
    this.cartProducts ?.push(new Cart(count, prod));
    
  }
getCartProducts(): Cart[] {
return this.cartProducts;
}

removeProductFromCart(prod: Product){
  let index= this.cartProducts.findIndex(c=>c.items.id===prod.id)
    if(index!=-1){
     if (this.cartProducts[index].count>1)
          this.cartProducts[index].count-=1;
          else
          this.cartProducts.splice(index,1)

    }
}

removeAllProductFromCart(prod: Product){
  let existProd=this.cartProducts.filter(p=>p.items.id==prod.id)[0];
  
   this.cartProducts.splice(this.cartProducts.indexOf(existProd),1)
 }
 totalAmount:number=0
 getTotalAmount():number{
  if( this.cartProducts.length>0){
    this.totalAmount=0;
    this.cartProducts.forEach(c=>{
      console.log(c.count +"   "+this.cartProducts.length)
      this.totalAmount+= c.count*c.items.price;
    })
    return this.totalAmount;
   }
  else  return 0;
 }
}
