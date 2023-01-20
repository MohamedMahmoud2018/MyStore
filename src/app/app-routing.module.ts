import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import{OrderConfirmComponent} from './order-confirm/order-confirm.component';

const routes: Routes = [
  {path: '', component:ProductListComponent},
  {path: 'productList', component:ProductListComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'cart', component:CartComponent},
  {path: 'orderConfirm', component:OrderConfirmComponent},
  {path: '**', component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
