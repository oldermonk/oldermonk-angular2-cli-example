import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/example/header/header.component';
import { BodyComponent } from './components/example/list/body.component';
import { UserService } from "./common/services/user.service";
import { HomeComponent } from './components/example/home/home.component';

import AppRouter from './app.routes';
import RootReducer from './common/reducers/root.reducer'
import { NewComponent } from './components/example/new/new.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    RootReducer
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
