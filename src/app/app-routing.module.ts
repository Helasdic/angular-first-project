import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserComponent } from './components/user/user.component';
import { PemiluComponent } from './components/pemilu/pemilu.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/product/add-product.component';
import { EditProductComponent } from './components/product/edit-product.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'basic', component: UserComponent },
  { path: 'pemilu', component: PemiluComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/add', component: AddCategoryComponent },
  { path: 'category/update/:id', component: EditCategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/edit', component: EditProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: '**', component: HelloWorldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
