package com.example.exam_be.service.impl;

import com.example.exam_be.clothes_dto.ClothesDto;
import com.example.exam_be.model.Clothes;
import com.example.exam_be.model.ClothesType;
import com.example.exam_be.repository.IClothesRepository;
import com.example.exam_be.service.IClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

@Service
public class ClothesService implements IClothesService {
    @Autowired
    private IClothesRepository clothesRepository;

    @Override
    public Page<Clothes> getAll(Pageable pageable, String search, Long clothesTypeId) {
        if (clothesTypeId == 0) {
            return clothesRepository.getAll(pageable, search);
        }
        return clothesRepository.getAllForType(pageable, search, clothesTypeId);
    }

    @Override
    public Clothes getById(Long id) {
        return clothesRepository.getClothesById(id);
    }

    @Override
    public void updateClothes(Clothes clothes) {
        clothesRepository.updateClothes(clothes);
    }

    @Override
    public void createClothes(Clothes clothes) {
        clothesRepository.addNewProduct(clothes);
    }

    @Override
    public void deleteClothes(Long id) {
        clothesRepository.removeProduct(id);
    }

    @Override
    public void checkDuplicateCode(ClothesDto clothesDto, BindingResult bindingResult) {
        Clothes clothes = clothesRepository.getClothesByCode(clothesDto.getCode());
        if(clothes != null){
            bindingResult.rejectValue("code",null,"mã sản phẩm đã trùng lặp");
        }
    }
}
