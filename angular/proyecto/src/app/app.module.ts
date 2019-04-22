import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';
import { MiTercerComponenteComponent } from './mi-tercer-componente/mi-tercer-componente.component';
import { CmpStrInterpolationComponent } from './mi-tercer-componente/cmp-str-interpolation/cmp-str-interpolation.component';
import { CmpPropertyBindingComponent } from './mi-tercer-componente/cmp-property-binding/cmp-property-binding.component';
import { CmpEventBindingComponent } from './mi-tercer-componente/cmp-event-binding/cmp-event-binding.component';
import { CmpTwoWayBindingComponent } from './mi-tercer-componente/cmp-two-way-binding/cmp-two-way-binding.component';
import { MiTwoWayBindingComponent } from './mi-tercer-componente/mi-two-way-binding/mi-two-way-binding.component';
import { CmpRefPlantillaComponent } from './mi-tercer-componente/cmp-ref-plantilla/cmp-ref-plantilla.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { CmpAComponent } from './cmp-input-output/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-input-output/cmp-b/cmp-b.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { ConvertTextPipe } from './cmp-pipes/convert-text.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { EscribirchuloDirective } from './cmp-directivas/escribirchulo.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { UsuarioAComponent } from './cmp-servicios/usuario-a/usuario-a.component';
import { UsuarioBComponent } from './cmp-servicios/usuario-b/usuario-b.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    MiTercerComponenteComponent,
    CmpStrInterpolationComponent,
    CmpPropertyBindingComponent,
    CmpEventBindingComponent,
    CmpTwoWayBindingComponent,
    MiTwoWayBindingComponent,
    CmpRefPlantillaComponent,
    CmpInputOutputComponent,
    CmpAComponent,
    CmpBComponent,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    HideWordsPipe,
    CmpDirectivasComponent,
    ConvertTextPipe,
    FiltroPipe,
    MarcarDirective,
    EscribirchuloDirective,
    CmpServiciosComponent,
    UsuarioAComponent,
    UsuarioBComponent,
    CmpFormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
