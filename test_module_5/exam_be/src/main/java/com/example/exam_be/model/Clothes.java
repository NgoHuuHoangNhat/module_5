package com.example.exam_be.model;

import javax.persistence.*;

@Entity
public class Clothes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String name;
    private String date;
    private Long quantity;
    @ManyToOne
    @JoinColumn(name = "clothes_type_id",referencedColumnName = "id")
    private ClothesType clothesType;

    public Clothes() {
    }

    public Clothes(Long id, String code, String name, String date, Long quantity, ClothesType clothesType) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.clothesType = clothesType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public ClothesType getClothesType() {
        return clothesType;
    }

    public void setClothesType(ClothesType clothesType) {
        this.clothesType = clothesType;
    }
}
