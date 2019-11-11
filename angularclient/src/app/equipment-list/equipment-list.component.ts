import { Component, OnInit } from '@angular/core';
import { Equipment } from '../model/equipment';
import { EquipmentService } from '../service/equipment-service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent{

  equipment: Equipment[];

  constructor(private equipmentService: EquipmentService) {
    this.onShowEquipment();
  }

  onShowEquipment() {
    this.equipmentService.findAll().subscribe(data => {
      this.equipment = data;
    });
  }
}
