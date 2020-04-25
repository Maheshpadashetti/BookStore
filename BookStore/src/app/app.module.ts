import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DisplaybookComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    
    

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
