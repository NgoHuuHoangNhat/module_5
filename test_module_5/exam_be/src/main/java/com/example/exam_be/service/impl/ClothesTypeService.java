package com.example.exam_be.service.impl;

import com.example.exam_be.model.ClothesType;
import com.example.exam_be.repository.IClothesTypeRepository;
import com.example.exam_be.service.IClothesTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothesTypeService implements IClothesTypeService {
    @Autowired
    private IClothesTypeRepository clothesTypeRepository;
    @Override
    public List<ClothesType> getAll() {
        return clothesTypeRepository.getAll();
    }
}
