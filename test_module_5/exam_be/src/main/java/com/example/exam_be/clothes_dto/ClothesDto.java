package com.example.exam_be.clothes_dto;


import com.example.exam_be.model.ClothesType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.*;

public class ClothesDto implements Validator {

    private Long id;
    private String code;
    private String name;
    private String date;
    private Long quantity;
    private ClothesType clothesType;

    public ClothesDto() {
    }

    public ClothesDto(Long id, String code, String name, String date, Long quantity, ClothesType clothesType) {
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        ClothesDto clothesDto = (ClothesDto) target;
        if(clothesDto.getName() == null || clothesDto.getName().trim().equals("")){
            errors.rejectValue("name",null,"không có tên sản phẩm");
        }
        if(clothesDto.getDate() == null || clothesDto.getDate().trim().equals("")){
            errors.rejectValue("date",null,"không có ngày nhập");
        }
        if(clothesDto.getQuantity() == null){
            errors.rejectValue("quantity",null,"không có số lượng");
        }else if(clothesDto.getQuantity() <= 0){
            errors.rejectValue("quantity",null,"số lượng phải lớn hơn 0");
        }
        if(clothesDto.getClothesType() == null){
            errors.rejectValue("clothesType",null,"không có loại sản phẩm");
        }
    }
}
