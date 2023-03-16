import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { GraphQLModule } from './graphql.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './state';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AddBookingComponent,
    BookingsComponent,
    UpdateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    GraphQLModule,
    MatCardModule,
    StoreModule.forRoot(reducers, { metaReducers })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
