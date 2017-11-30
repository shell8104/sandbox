package com.example.demo.lesson;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.course.Course;


@RestController
public class LessonController {
	
	@Autowired
	private LessonService lessonService;

	@RequestMapping("/languages/{languageId}/courses/{courseId}/lessons")
	public List<Lesson> getAllLessons(@PathVariable String courseId) {
		return lessonService.getAllLessons(courseId);
	}
	
	@RequestMapping("/languages/{languageId}/courses/{courseId}/lessons/{id}")
	public Lesson getLesson(@PathVariable String id) {
		return lessonService.getLesson(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/languages/{languageId}/courses/{courseId}/lessons")
	public void addLesson(@RequestBody Lesson lesson, @PathVariable String courseId) {
		lesson.setCourse(new Course(courseId,"","",""));
		lessonService.addLesson(lesson);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/languages/{languageId}/courses/{courseId}/lessons/{id}")
	public void modifyLesson(@RequestBody Lesson lesson, @PathVariable String courseId) {
		lesson.setCourse(new Course(courseId,"","",""));
		lessonService.modifyLesson(lesson);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/languages/{languageId}/courses/{courseId}/lessons/{id}")
	public void deleteCourse(@PathVariable String id) {
		lessonService.deleteLesson(id);
	}
	
	
	
	
	
	
	
}
