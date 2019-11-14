package com.makarewk.angulartutorial.webservice.controllers;

import com.makarewk.angulartutorial.webservice.enums.StatusEnum;
import com.makarewk.angulartutorial.security.model.UserLogin;
import com.makarewk.angulartutorial.webservice.repositories.*;
import com.makarewk.angulartutorial.webservice.entities.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


/**
 * Główny kontroler
 */
@RestController
@RequestMapping(path="/equipment")
@CrossOrigin(origins = "http://localhost:4200")
public class EquipmentController {

    private final EquipmentRepository equipmentRepository;

    /**
     * Konstruktor kontrolera
     * @param equipmentRepository - interfejs obsługujący metody CRUD dla bazy danych
     */
    public EquipmentController(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }


    /**
     * Endpoint dla listy sprzętów
     */
    @GetMapping("equipmentList")
    public List<Equipment> getEquipment() {
        return (List<Equipment>)equipmentRepository.findAll();
    }

    /**
     * Endpoint dla szczegółów sprzętu
     */
    @GetMapping("/equipmentDetails/{id}")
    public Optional<Equipment> getEquipmentDetails(@PathVariable("id") String id){
        return equipmentRepository.findById(Long.valueOf(id));
    }

    /**
     * Endpoint dla edycji statusu sprzętu
     */
    @PostMapping("/equipmentDetails/{id}")
    public void reportSomeDamage(@RequestBody Equipment equipment, @PathVariable String id) {
        equipment.setStatusEnum(StatusEnum.AWARIA);
        equipmentRepository.save(equipment);
    }

}
