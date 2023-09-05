package com.example.exam_be.service;

import com.example.exam_be.model.ClothesType;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IClothesTypeService {
    List<ClothesType> getAll();
}
