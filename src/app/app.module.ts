import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {JeopardyService } from './jeopardy.service';
import { EditJeopardyComponent } from './editjeopardy/editjeopardy.component';

@NgModule({
  declarations: [
    AppComponent,
    EditJeopardyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
