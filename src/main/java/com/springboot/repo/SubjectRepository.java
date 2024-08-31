package com.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {

}
