package com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.ClassEntity;
import com.springboot.repo.ClassRepository;

@Service
public class ClassService {
	
	@Autowired
    private ClassRepository classRepository;

    public List<ClassEntity> getAllClasses() {
        return classRepository.findAll();
    }

    public ClassEntity getClassById(Long id) {
        return classRepository.findById(id).orElse(null);
    }

    public ClassEntity createClass(ClassEntity classEntity) {
        return classRepository.save(classEntity);
    }

    public ClassEntity updateClass(Long id, ClassEntity classEntity) {
        ClassEntity existingClass = classRepository.findById(id).orElse(null);
        if (existingClass != null) {
            existingClass.setName(classEntity.getName());
            existingClass.setGrade(classEntity.getGrade());
            existingClass.setSection(classEntity.getSection());
            return classRepository.save(existingClass);
        }
        return null;
    }

    public void deleteClass(Long id) {
        classRepository.deleteById(id);
    }

}
