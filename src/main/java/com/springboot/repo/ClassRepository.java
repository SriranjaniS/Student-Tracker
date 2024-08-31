package com.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.ClassEntity;

public interface ClassRepository extends JpaRepository<ClassEntity, Long> {

}
