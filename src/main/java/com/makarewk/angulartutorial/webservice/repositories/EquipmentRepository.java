package com.makarewk.angulartutorial.webservice.repositories;

import com.makarewk.angulartutorial.webservice.entities.Equipment;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * Interfejs implementujący metody CRUD dla bazy danych
 */
public interface EquipmentRepository extends CrudRepository<Equipment, Long> {

    Optional<Equipment> findOneByName(String name);
}
