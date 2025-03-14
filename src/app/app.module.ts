import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeftComponent } from './left/left.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    HeaderComponent,
    FooterComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
