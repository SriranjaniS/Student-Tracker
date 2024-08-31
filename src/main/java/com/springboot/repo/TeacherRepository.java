package com.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
