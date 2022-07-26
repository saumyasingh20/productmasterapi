import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProductmasterService } from './services/productmaster.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductmasterComponent } from './components/productmaster/productmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductmasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductmasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
