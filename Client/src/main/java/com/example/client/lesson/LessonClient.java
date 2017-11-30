package com.example.client.lesson;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.demo.course.Course;
import com.example.demo.language.Language;
import com.example.demo.lesson.Lesson;

public class LessonClient {

	public static void main(String[] args) {
		
		Client client = ClientBuilder.newClient();
		
		WebTarget baseTarget1 = client.target("http://localhost:8081/languages/java/courses/java-streams/");
		WebTarget baseTarget2 = client.target("http://localhost:8081/languages/javascript/courses/java-api/");
		WebTarget lessonsTarget1 = baseTarget1.path("lessons");
		WebTarget lessonsTarget2 = baseTarget2.path("lessons");
		

		 Lesson lesson1 = new Lesson("java-streams-lesson1","Java Streams lessons 1","The Java Streams course lesson 1", "java-streams");
		 Lesson lesson2 = new Lesson("java-streams-lesson2","Java Streams lessons 2","The Java Streams course lesson 2", "java-streams");
		 Lesson lesson3 = new Lesson("java-api-lesson1","Java API lesson 1","The first java API lesson", "java-api");
		 Lesson lesson4 = new Lesson("java-api-lesson2","Java API lesson 2","The secondss java API lesson", "java-api");

		 
		 Response postResponse1 = lessonsTarget1
				 .request()
				 .post(Entity.json(lesson1));
		 System.out.println(postResponse1);
		 
		 
		 Response postResponse2 = lessonsTarget1
				 .request()
				 .post(Entity.json(lesson2));
		 System.out.println(postResponse2);
		 
		 Response postResponse3 = lessonsTarget2
				 .request()
				 .post(Entity.json(lesson3));
		 System.out.println(postResponse3);
		 
		 Response postResponse4 = lessonsTarget2
				 .request()
				 .post(Entity.json(lesson4));
		 System.out.println(postResponse4);
		 
		


		 
		 
	}

}
