import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import "@angular/common/locales/global/es";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarloteriaComponent } from './componentes/generarloteria/generarloteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { NumerosPipe } from './pipes/numeros.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarloteriaComponent,
    MultiplicarComponent,
    CalculadoraComponent,
    HolaComponent,
    TuberiasComponent,
    NumerosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue: "es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
