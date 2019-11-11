import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipment} from "../model/equipment";
import {EquipmentDetailsService} from "../service/equipment-details.service";


@Component({
  selector: 'equipment-user-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent{

  equipment: Equipment;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private equipmentDetailsService: EquipmentDetailsService) {
    this.equipment = new Equipment();
    this.id = route.snapshot.params.id;
    this.onGetEquipmentDetails();
  }

  onGetEquipmentDetails(){
    this.equipmentDetailsService.findOne(this.id).subscribe(data => {
      this.equipment = data;
    });
  }

  onSubmit() {
    this.equipmentDetailsService.save(this.equipment, this.id).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/equipment']);
  }
}
