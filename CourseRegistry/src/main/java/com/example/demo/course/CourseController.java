package com.example.demo.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.language.Language;

@RestController
public class CourseController {
	
	@Autowired
	private CourseService courseService;

	@RequestMapping("/languages/{languageId}/courses")
	public List<Course> getAllCourses(@PathVariable String languageId) {
		return courseService.getAllCourses(languageId);
	}
	
	@RequestMapping("/languages/{languageId}/courses/{id}")
	public Course getCourse(@PathVariable String id) {
		return courseService.getCourse(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/languages/{languageId}/courses")
	public void addCourse(@RequestBody Course course, @PathVariable String languageId) {
		course.setLanguage(new Language(languageId,"",""));
		courseService.addCourse(course);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/languages/{languageId}/courses/{id}")
	public void modifyCourse(@RequestBody Course course, @PathVariable String languageId) {
		course.setLanguage(new Language(languageId,"",""));
		courseService.modifyCourse(course);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/languages/{languageId}/courses/{id}")
	public void deleteCourse(@PathVariable String id) {
		courseService.deleteCourse(id);
	}
	
	
	
	
	
	
	
}
