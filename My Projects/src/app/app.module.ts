import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackComponent } from './stack/stack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { QueueComponent } from './queue/queue.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import { PercentageComponent } from './percentage/percentage.component';
import { UnitsComponent } from './units/units.component';
import{ MatSelectModule} from '@angular/material/select';
import { CountingComponent } from './counting/counting.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    QueueComponent,
    AgeCalculatorComponent,
    PercentageComponent,
    UnitsComponent,
    CountingComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,




  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
