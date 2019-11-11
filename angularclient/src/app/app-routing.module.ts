import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EquipmentListComponent} from "./equipment-list/equipment-list.component";
import {EquipmentFormComponent} from "./equipment-form/equipment-form.component";

const routes: Routes = [
  { path: 'equipment', component: EquipmentListComponent },
  { path: 'equipmentDetails/:id', component: EquipmentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
