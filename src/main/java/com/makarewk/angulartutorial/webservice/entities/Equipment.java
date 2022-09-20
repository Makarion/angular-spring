package com.makarewk.angulartutorial.webservice.entities;

import com.makarewk.angulartutorial.webservice.enums.CategoryEnum;
import com.makarewk.angulartutorial.webservice.enums.StatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private CategoryEnum categoryName;
    private String details;
    private StatusEnum statusEnum = StatusEnum.SPRAWNY;
    private String comment;

    public Equipment(String name, CategoryEnum categoryName, String details) {
        this.name = name;
        this.categoryName = categoryName;
        this.details = details;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Equipment equipment = (Equipment) o;
        return name.equals(equipment.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
