import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {EquipmentDetailsService} from "./service/equipment-details.service";
import {EquipmentListComponent} from "./equipment-list/equipment-list.component";
import {EquipmentFormComponent} from "./equipment-form/equipment-form.component";
import {EquipmentService} from "./service/equipment-service";
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EquipmentListComponent,
    EquipmentFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [EquipmentService, EquipmentDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
