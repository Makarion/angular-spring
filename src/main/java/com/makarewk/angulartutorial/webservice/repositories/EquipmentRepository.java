package com.makarewk.angulartutorial.webservice.repositories;

import com.makarewk.angulartutorial.webservice.entities.*;
import org.springframework.data.repository.CrudRepository;

/**
 * Interfejs implementujący metody CRUD dla bazy danych
 */
public interface EquipmentRepository extends CrudRepository<Equipment, Long> {

}
