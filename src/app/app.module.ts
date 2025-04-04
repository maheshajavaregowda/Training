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
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    HeaderComponent,
    FooterComponent,
    RightComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,FormsModule, HttpClientModule
  ],
  providers: [MyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
