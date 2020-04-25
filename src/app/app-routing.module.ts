import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'food-details',
    loadChildren: () => import('./food-details/food-details.module').then( m => m.FoodDetailsPageModule)
  },
  {
    path: 'command-succes',
    loadChildren: () => import('./command-succes/command-succes.module').then( m => m.CommandSuccesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
