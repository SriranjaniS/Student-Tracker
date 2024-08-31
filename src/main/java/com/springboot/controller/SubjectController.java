package com.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.springboot.model.ClassEntity;
import com.springboot.model.Subject;
import com.springboot.service.SubjectService;
import com.springboot.service.ClassService;

@RestController
@RequestMapping("/api/subjects")
@CrossOrigin(origins = "http://localhost:3000")
public class SubjectController {
	
	 	@Autowired
	    private SubjectService subjectService;
	 	
	 	@Autowired
	 	private ClassService classService;

	    @GetMapping
	    public List<Subject> getAllSubjects() {
	        return subjectService.getAllSubjects();
	    }

	    @GetMapping("/{id}")
	    public Optional<Subject> getSubjectById(@PathVariable Long id) {
	        return subjectService.getSubjectById(id);
	    }

	    @PostMapping
	    public Subject createSubject(@RequestBody Subject subject) {
	      Optional<ClassEntity> referencedClass = Optional.ofNullable(classService.getClassById(subject.getClassEntity().getId()));
	      if (!referencedClass.isPresent()) {
	        // Handle error - ClassEntity with provided ID not found
	        return null;
	      }
	      subject.setClassEntity(referencedClass.get());
	      return subjectService.saveSubject(subject);
	    }

	    @PutMapping("/{id}")
	    public Subject updateSubject(@PathVariable Long id, @RequestBody Subject subjectDetails) {
	        Optional<Subject> subject = subjectService.getSubjectById(id);
	        if (subject.isPresent()) {
	            Subject existingSubject = subject.get();
	            existingSubject.setName(subjectDetails.getName());
	            existingSubject.setClassEntity(subjectDetails.getClassEntity());
	            return subjectService.saveSubject(existingSubject);
	        } else {
	            return null; 
	        }
	    }

	    @DeleteMapping("/{id}")
	    public void deleteSubject(@PathVariable Long id) {
	        subjectService.deleteSubject(id);
	    }
    
}
