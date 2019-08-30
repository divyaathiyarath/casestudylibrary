import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddbookComponent } from './addbook/addbook.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { ViewauthorComponent } from './viewauthor/viewauthor.component';
const appRoutes=[
  {path:'',component:HomeComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'viewbook',component:ViewbookComponent},
  {path:'addauthor',component:AddauthorComponent},
  {path:'viewauthor',component:ViewauthorComponent}
  

]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddbookComponent,
    HomeComponent,
    ViewbookComponent,
    AddauthorComponent,
    ViewauthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavComponent]
})
export class AppModule { }
