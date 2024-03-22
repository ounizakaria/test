import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeComponent } from './liste/liste.component';
import { CrudComponent } from './crud/crud.component';
import { WelcomcomComponent } from './welcomcom/welcomcom.component';
import { AffichageComponent } from './affichage/affichage.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { CarteComponent } from './carte/carte.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeComponent,
    CrudComponent,
    WelcomcomComponent,
    AffichageComponent,
    ChartComponent,
    CarteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
