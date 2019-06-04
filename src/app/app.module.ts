import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {FooterComponent, HeaderComponent, LoginComponent, LeftSidebarComponent} from 'kanetu';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LeftSidebarComponent,
    MainPageComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ProductComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
