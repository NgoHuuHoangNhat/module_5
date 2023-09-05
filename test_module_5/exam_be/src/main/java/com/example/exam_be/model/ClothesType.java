package com.example.exam_be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ClothesType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "clothesType")
    @JsonBackReference
    private Set<Clothes> clothesSet;

    public ClothesType() {
    }

    public ClothesType(Long id, String name, Set<Clothes> clothesSet) {
        this.id = id;
        this.name = name;
        this.clothesSet = clothesSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Clothes> getClothesSet() {
        return clothesSet;
    }

    public void setClothesSet(Set<Clothes> clothesSet) {
        this.clothesSet = clothesSet;
    }
}
