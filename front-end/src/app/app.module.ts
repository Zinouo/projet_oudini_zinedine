import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { cartState } from './shared/states/cartState';
import { cartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchComponent,
    cartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    NgxsModule.forRoot([cartState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
