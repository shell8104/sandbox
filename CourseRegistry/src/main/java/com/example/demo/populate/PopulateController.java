package com.example.demo.populate;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.course.Course;
import com.example.demo.course.CourseService;
import com.example.demo.language.Language;
import com.example.demo.language.LanguageService;
import com.example.demo.lesson.Lesson;
import com.example.demo.lesson.LessonService;

@RestController
public class PopulateController {

	@Autowired
	private LanguageService languageService;

	@Autowired
	private CourseService courseService;

	@Autowired
	private LessonService lessonService;

	@PostConstruct
	public void init() {
		populate();
	}

	@RequestMapping("/populate")
	public String populate() {
		// language
		languageService.addLanguage(new Language("python", "Python", "The python language"));
		languageService.addLanguage(new Language("java", "Java", "The Java language"));
		languageService.addLanguage(new Language("javascript", "JavaScript", "The JavaScript language"));
		languageService.addLanguage(new Language("pearl", "Pearl", "The Pearl language"));

		// course
		courseService.addCourse(new Course("java-streams", "Java Streams", "The Java Streams course", "java"));
		courseService.addCourse(new Course("java-api", "Java API", "The Java API ", "java"));
		courseService.addCourse(
				new Course("native-javascript", "Native javascript", "The native javascript course", "javascript"));
		courseService.addCourse(new Course("angularJs", "AngularJS", "The AngularJS framework course", "javascript"));
		courseService.addCourse(new Course("pearl-basics", "Pearl basics", "Pearl basics course", "pearl"));

		// lessons
		lessonService.addLesson(new Lesson("java-streams-lesson1", "Java Streams lessons 1",
				"The Java Streams course lesson 1", "java-streams"));
		lessonService.addLesson(new Lesson("java-streams-lesson2", "Java Streams lessons 2",
				"The Java Streams course lesson 2", "java-streams"));
		lessonService.addLesson(
				new Lesson("java-api-lesson1", "Java API lesson 1", "The first java API lesson", "java-api"));
		lessonService.addLesson(
				new Lesson("java-api-lesson2", "Java API lesson 2", "The secondss java API lesson", "java-api"));
		return "DB is ready!";
	}

}
