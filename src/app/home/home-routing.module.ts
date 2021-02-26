import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy, PreloadAllModules } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
       {
         path:'about',
         children:[
           {path:'',
           loadChildren: () => import('../pages/about/about.module').then(m=>m.AboutPageModule)}
         ]
       },
       {
         path:'list-view',
         children:[
           {path:'',
           loadChildren: () => import('../pages/list-view/list-view.module').then(m=>m.ListViewPageModule)}
         ]
       },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
