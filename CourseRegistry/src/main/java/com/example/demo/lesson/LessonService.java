package com.example.demo.lesson;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LessonService {
	
	@Autowired
	private LessonRepository lessonRepo;
	
	public List<Lesson> getAllLessons(String courseId) {
		List<Lesson> lessons = new ArrayList<>();
		lessonRepo.findByCourseId(courseId).forEach(lessons::add);
		return lessons;
	

}

	public Lesson getLesson(String id) {
		
		return lessonRepo.findOne(id);
	}

	public void addLesson(Lesson lesson) {
		lessonRepo.save(lesson);
	}

	public void modifyLesson(Lesson lesson) {
		lessonRepo.save(lesson);
		
	}

	public void deleteLesson(String id) {
		lessonRepo.delete(id);
		
	}
}
