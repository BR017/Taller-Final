import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './auto/list/list.component';
import { EditComponent } from './auto/edit/edit.component';

// Formularios

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AutoService } from './auto/auto.service';
import { CreateComponent } from './auto/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
