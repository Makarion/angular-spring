package com.makarewk.angulartutorial.initializer;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.makarewk.angulartutorial.webservice.entities.Equipment;
import com.makarewk.angulartutorial.webservice.enums.CategoryEnum;
import com.makarewk.angulartutorial.webservice.mappers.EquipmentMapper;
import com.makarewk.angulartutorial.webservice.repositories.EquipmentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Component
public class DbInitializer {
    private final ObjectMapper objectMapper = new ObjectMapper();

    public DbInitializer(EquipmentRepository equipmentRepository, ResourceReader resourceReader) {
        initializeEquipmentList(equipmentRepository, resourceReader);
    }

    private void initializeEquipmentList(EquipmentRepository equipmentRepository, ResourceReader resourceReader) {
        Resource productsResourcee = resourceReader.getProduct();

        try {
            EquipmentMapper equipmentMapper = objectMapper.readValue(productsResourcee.getInputStream(), EquipmentMapper.class);

            equipmentMapper.getProductsList().forEach(
                    product -> {
                        Equipment equipment = null;
                        try {
                            CategoryEnum categoryName = convert(product.get("category").textValue());
                            if(categoryName != null) {
                                equipment = new Equipment(product.get("name").textValue(), categoryName,
                                        objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(product.get("details")));
                            }
                            else{
                                log.info("Pominięto produkt. Kategoria nie została zdefiniowana");
                            }
                        } catch (JsonProcessingException e) {
                            e.printStackTrace();
                        }
                        equipmentRepository.save(equipment);
                    }
            );
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    private static CategoryEnum convert(String categoryName) {
        switch (categoryName) {
            case ("fridge"):
                return CategoryEnum.FRIDGE;
            case ("phone"):
                return CategoryEnum.PHONE;
            case ("headphones"):
                return CategoryEnum.HEADPHONES;
            default:
                log.info("Not match to any category");
                return null;
        }
    }
}
