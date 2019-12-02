import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { HomeComponent } from './home/home.component';
import { ImportComponent } from './import/import.component';

const routes: Routes = [
  {
    path: 'not-authorized',
    pathMatch: 'full',
    component: NotAuthorizedComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'import',
    pathMatch: 'full',
    component: ImportComponent
  },
  {
    // wildcard default route
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}