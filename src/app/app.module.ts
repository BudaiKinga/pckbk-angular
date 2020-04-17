import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewHouseComponent } from './house-list/new-house.component';


@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    WelcomeComponent,
    NewHouseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'houses', component: HouseListComponent },
      { path: 'newHouse', component: NewHouseComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])],
  bootstrap: [AppComponent]
})
export class AppModule { }
