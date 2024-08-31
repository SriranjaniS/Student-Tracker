package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Teacher;
import com.springboot.repo.TeacherRepository;

@Service
public class TeacherService {
	
	  @Autowired
	    private TeacherRepository teacherRepository;

	    public List<Teacher> getAllTeachers() {
	        return teacherRepository.findAll();
	    }

	    public Optional<Teacher> getTeacherById(Long id) {
	        return teacherRepository.findById(id);
	    }

	    public Teacher saveTeacher(Teacher teacher) {
	        return teacherRepository.save(teacher);
	    }

	    public void deleteTeacher(Long id) {
	        teacherRepository.deleteById(id);
	    }

}
