import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: '',loadChildren:'./login/login.module#LoginPageModule'},

  // { path: 'aaa', redirectTo: 'folder/Inbox', pathMatch: 'full'},

  { path: 'folder/:id',loadChildren: './folder/folder.module#FolderPageModule'},
  { path: 'register',loadChildren:'./register/register.module#RegisterPageModule'},
  { path: 'deshboard',loadChildren: './pages/deshboard/deshboard.module#DeshboardPageModule',canActivate: [AuthGuard] },
  {path: 'add-distributors',loadChildren: './pages/distributor/add-distributor/add-distributor.module#AddDistributorPageModule' ,canActivate: [AuthGuard]},
  {path: 'show-distributors',loadChildren:'./pages/distributor/show-distributor/show-distributor.module#ShowDistributorPageModule',canActivate: [AuthGuard] },
  { path: 'add-retailer',loadChildren:'./pages/retailer/add-retailer/add-retailer.module#AddRetailerPageModule',canActivate: [AuthGuard] },
  { path: 'show-retailers',loadChildren: './pages/retailer/show-retailer/show-retailer.module#ShowRetailerPageModule',canActivate: [AuthGuard] },
  { path: 'add-shop',loadChildren: './pages/shop/add-shop/add-shop.module#AddShopPageModule',canActivate: [AuthGuard] },
  { path: 'show-shop',loadChildren: './pages/shop/show-shop/show-shop.module#ShowShopPageModule',canActivate: [AuthGuard] },
  { path: 'add-seller',loadChildren: './pages/seller/add-seller/add-seller.module#AddSellerPageModule',canActivate: [AuthGuard] },
  { path: 'show-sellers',loadChildren: './pages/seller/show-seller/show-seller.module#ShowSellerPageModule',canActivate: [AuthGuard] },
  { path: 'add-worker',loadChildren: './pages/worker/add-worker/add-worker.module#AddWorkerPageModule',canActivate: [AuthGuard] },
  { path: 'show-workers',loadChildren: './pages/worker/show-worker/show-worker.module#ShowWorkerPageModule',canActivate: [AuthGuard] },
  { path: 'add-brand',loadChildren:'./pages/shop/brand/add-brand/add-brand.module#AddBrandPageModule',canActivate: [AuthGuard]},
  { path: 'show-brands',loadChildren:'./pages/shop/brand/show-brand/show-brand.module#ShowBrandPageModule',canActivate: [AuthGuard]},
  { path: 'add-category',loadChildren:'./pages/shop/category/add-category/add-category.module#AddCategoryPageModule',canActivate: [AuthGuard]},
  { path: 'show-categories',loadChildren:'./pages/shop/category/show-category/show-category.module#ShowCategoryPageModule',canActivate: [AuthGuard]},
  { path: 'add-product',loadChildren:'./pages/shop/product/add-product/add-product.module#AddProductPageModule',canActivate: [AuthGuard]},
  { path: 'show-products',loadChildren:'./pages/shop/product/show-product/show-product.module#ShowProductPageModule',canActivate: [AuthGuard]},
  { path: 'sell-product',loadChildren:'./pages/shop/product/sell-product/sell-product.module#SellProductPageModule',canActivate: [AuthGuard]},
  { path: 'add-order', loadChildren:'./pages/order/add-order/add-order.module#AddOrderPageModule',canActivate: [AuthGuard]},
  { path: 'show-orders', loadChildren: './pages/order/show-order/show-order.module#ShowOrderPageModule',canActivate: [AuthGuard]},
  { path: 'order-history',loadChildren: './pages/order/order-history/order-history.module#OrderHistoryPageModule',canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
