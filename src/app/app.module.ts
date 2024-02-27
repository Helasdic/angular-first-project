import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserComponent } from './components/user/user.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NavbarComponent } from './components/layout/navbar.component';
import { PaslonComponent } from './components/pemilu/paslon.component';
import { PemiluComponent } from './components/pemilu/pemilu.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './components/category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/product/add-product.component';
import { EditProductComponent } from './components/product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserComponent,
    UserItemComponent,
    NavbarComponent,
    PaslonComponent,
    PemiluComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
