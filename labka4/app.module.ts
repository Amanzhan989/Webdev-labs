import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRootComponent } from './components/app-root/app-root.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { AppProductListComponent } from './components/app-product-list/app-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRootComponent,
    AppTopBarComponent,
    AppProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
