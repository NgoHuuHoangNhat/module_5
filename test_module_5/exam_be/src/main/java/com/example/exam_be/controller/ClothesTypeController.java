package com.example.exam_be.controller;

import com.example.exam_be.model.Clothes;
import com.example.exam_be.model.ClothesType;
import com.example.exam_be.service.IClothesTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/clothes-type")
public class ClothesTypeController {
    @Autowired
    private IClothesTypeService clothesTypeService;
    @GetMapping("/list")
    public ResponseEntity<List<ClothesType>> getAll(){
       List<ClothesType> clothesTypeList = clothesTypeService.getAll();
       return new ResponseEntity<>(clothesTypeList, HttpStatus.OK);
    }

}
