import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { UpdateproductComponent } from './pages/updateproduct/updateproduct.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: HomeComponent },
      { path: 'products/create', component: AddproductComponent },
      { path: 'products/update/:id', component: UpdateproductComponent },
      { path: 'products/detail/:id', component: DetailComponent },
    ]
  }, {
    path: "**", component: NotfoundComponent
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
