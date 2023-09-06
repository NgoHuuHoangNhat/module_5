package com.example.exam_be.repository;

import com.example.exam_be.model.Clothes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IClothesRepository extends JpaRepository<Clothes, Long> {
    @Query(value = "select * \n" +
            "from clothes c\n" +
            "where c.name like :search\n" +
            "and c.clothes_type_id = :clothesTypeId", nativeQuery = true)
    Page<Clothes> getAllForType(Pageable pageable, @Param("search") String search, @Param("clothesTypeId") Long clothesTypeId);

    @Query(value = "select * \n" +
            "from clothes c\n" +
            "where c.name like :search\n", nativeQuery = true)
    Page<Clothes> getAll(Pageable pageable, @Param("search") String search);

    @Query(value = "select * from clothes.clothes c where c.id = :id", nativeQuery = true)
    Clothes getClothesById(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "call update_clothes(:#{#clothes.id},:#{#clothes.name},:#{#clothes.date},:#{#clothes.quantity},:#{#clothes.clothesType.id});",nativeQuery = true)
    void updateClothes(Clothes clothes);
    @Modifying
    @Transactional
    @Query(value = "delete from clothes.clothes where id= :id",nativeQuery = true)
    void removeProduct(@Param("id") Long id);
    @Modifying
    @Transactional
    @Query(value = "call create_clothes(:#{#clothes.code},:#{#clothes.name},:#{#clothes.date},:#{#clothes.quantity},:#{#clothes.clothesType.id})",nativeQuery = true)
    void addNewProduct(Clothes clothes);

    @Query(value = "select * from clothes.clothes where clothes.code = :code",nativeQuery = true)
    Clothes getClothesByCode(@Param("code") String code);
}
