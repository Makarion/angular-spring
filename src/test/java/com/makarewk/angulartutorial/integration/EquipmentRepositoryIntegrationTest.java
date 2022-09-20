package com.makarewk.angulartutorial.integration;

import com.makarewk.angulartutorial.webservice.entities.Equipment;
import com.makarewk.angulartutorial.webservice.enums.CategoryEnum;
import com.makarewk.angulartutorial.webservice.enums.StatusEnum;
import com.makarewk.angulartutorial.webservice.repositories.EquipmentRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EquipmentRepositoryIntegrationTest {
    @Autowired
    private EquipmentRepository equipmentRepository;

    @Before
    public void setup() {
        equipmentRepository.deleteAll();
    }

    @Test
    public void saveEquipmentTest() {
        Equipment equipment = new Equipment(1L, "Beko", CategoryEnum.FRIDGE, "good fridge", StatusEnum.SPRAWNY, "Sprzęt jest sprawny");

        Equipment savedEquipment = equipmentRepository.save(equipment);
        Equipment foundByName = equipmentRepository.findOneByName(savedEquipment.getName())
                .orElseThrow(() -> new IllegalArgumentException(String.format("Equipment with name %s not found", savedEquipment.getName())));


        assertEquals(foundByName, savedEquipment);
    }
}
