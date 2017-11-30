package com.example.demo.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepo;
	
	public List<Course> getAllCourses(String languageId) {
		List<Course> courses = new ArrayList<>();
		courseRepo.findByLanguageId(languageId).forEach(courses::add);
		return courses;
	

}

	public Course getCourse(String id) {
		
		return courseRepo.findOne(id);
	}

	public void addCourse(Course course) {
		courseRepo.save(course);
	}

	public void modifyCourse(Course course) {
		courseRepo.save(course);
		
	}

	public void deleteCourse(String id) {
		courseRepo.delete(id);
		
	}
}
