package com.example.exam_be.repository;

import com.example.exam_be.model.ClothesType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IClothesTypeRepository extends JpaRepository<ClothesType,Long> {
    @Query(value = "select * from  clothes.clothes_type",nativeQuery = true)
    List<ClothesType> getAll();
}
