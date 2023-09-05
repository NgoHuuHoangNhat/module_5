package com.example.exam_be.controller;

import com.example.exam_be.clothes_dto.ClothesDto;
import com.example.exam_be.model.Clothes;
import com.example.exam_be.service.IClothesService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/clothes")
public class ClothesController {
    @Autowired
    private IClothesService clothesService;

    @GetMapping("/list")
    public ResponseEntity<Page<Clothes>> getAll(@RequestParam(defaultValue = "0", required = false) Integer page,
                                                @RequestParam(defaultValue = "", required = false) String search,
                                                @RequestParam(defaultValue = "0", required = false) Long clothesTypeId) {

        Pageable pageable = PageRequest.of(page, 3, Sort.by("quantity").ascending());
        Page<Clothes> clothesPage = clothesService.getAll(pageable, "%" + search + "%", clothesTypeId);
        return new ResponseEntity<>(clothesPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClothesDto> getById(@PathVariable Long id) {
        Clothes clothes = clothesService.getById(id);
        ClothesDto clothesDto = new ClothesDto();
        BeanUtils.copyProperties(clothes, clothesDto);
        return new ResponseEntity<>(clothesDto, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Clothes> updateClothes(@Valid @RequestBody ClothesDto clothesDto,
                                                 BindingResult bindingResult) {
        new ClothesDto().validate(clothesDto, bindingResult);
        if(bindingResult.hasErrors()){

        }
        Clothes clothes = new Clothes();
        BeanUtils.copyProperties(clothesDto, clothes);
        clothesService.updateClothes(clothes);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public  ResponseEntity<?> deleteProduct(@PathVariable Long id){
        clothesService.deleteClothes(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> createClothes(@Valid @RequestBody ClothesDto clothesDto,
                                           BindingResult bindingResult){
        new ClothesDto().validate(clothesDto,bindingResult);
        if(bindingResult.hasErrors()){

        }
        Clothes clothes = new Clothes();
        BeanUtils.copyProperties(clothesDto,clothes);
        System.out.println(clothes);
        clothesService.createClothes(clothes);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
