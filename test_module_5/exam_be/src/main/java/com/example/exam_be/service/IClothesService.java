package com.example.exam_be.service;

import com.example.exam_be.model.Clothes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IClothesService {
    Page<Clothes> getAll(Pageable pageable, String search,Long clothesTypeId);

    Clothes getById(Long id);

    void updateClothes(Clothes clothes);

    void createClothes(Clothes clothes);

    void deleteClothes(Long id);
}
