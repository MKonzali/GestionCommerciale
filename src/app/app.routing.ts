import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from './clients/clients.component';

//import { HomeComponent } from './home/home.component';
//import { UserComponent } from './user/user.component';
//import { TablesComponent } from './tables/tables.component';
//import { TypographyComponent } from './typography/typography.component';

const routes: Routes =[
 //  { path: 'dashboard',      component: HomeComponent },
  //  { path: 'user',           component: UserComponent },
  //  { path: 'table',          component: TablesComponent },
 //   { path: 'typography',     component: TypographyComponent },
      {path: 'client', component: ClientsComponent},
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
