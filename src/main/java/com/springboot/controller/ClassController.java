package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.springboot.model.ClassEntity;
import com.springboot.service.ClassService;

@RestController
@RequestMapping("/api/classes")
@CrossOrigin(origins = "http://localhost:3000")
public class ClassController {
	
	 @Autowired
	    private ClassService classService;

	    @GetMapping
	    public List<ClassEntity> getAllClasses() {
	        return classService.getAllClasses();
	    }

	    @GetMapping("/{id}")
	    public ClassEntity getClassById(@PathVariable Long id) {
	        return classService.getClassById(id);
	    }

	    @PostMapping
	    public ClassEntity createClass(@RequestBody ClassEntity classEntity) {
	        return classService.createClass(classEntity);
	    }

	    @PutMapping("/{id}")
	    public ClassEntity updateClass(@PathVariable Long id, @RequestBody ClassEntity classEntity) {
	        return classService.updateClass(id, classEntity);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteClass(@PathVariable Long id) {
	        classService.deleteClass(id);
	    }

}
