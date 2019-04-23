import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { FormComponent } from './form/form.component';
import { MemesComponent } from './memes/memes.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    FormComponent,
    MemesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
