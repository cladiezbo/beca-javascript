import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpImagenesComponent } from './cmp-imagenes/cmp-imagenes.component';
import { CmpTextoInferiorComponent } from './cmp-imagenes/cmp-texto-inferior/cmp-texto-inferior.component';
import { CmpTextoSuperiorComponent } from './cmp-imagenes/cmp-texto-superior/cmp-texto-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpImagenesComponent,
    CmpTextoInferiorComponent,
    CmpTextoSuperiorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
