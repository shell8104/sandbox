package com.example.client.course;

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

public class CourseClient {

	public static void main(String[] args) {
		
		Client client = ClientBuilder.newClient();
		
		
		WebTarget baseTarget1 = client.target("http://localhost:8081/languages/java/");
		WebTarget baseTarget2 = client.target("http://localhost:8081/languages/javascript/");
		WebTarget coursesTarget1 = baseTarget1.path("courses");
		WebTarget coursesTarget2 = baseTarget2.path("courses");
//		WebTarget singleCourseTarget = coursesTarget.path("{courseId}");
		

		 Course course1 = new Course("java-streams","Java Streams","The Java Streams course", "java");
		 Course course2 = new Course("java-api","Java API","The Java API ", "java");
		 Course course3 = new Course("native-javascript","Native javascript","The native javascript course", "javascript");
		 Course course4 = new Course("angularJs","AngularJS","The AngularJS framework course", "javascript");

		 
		 Response postResponse1 = coursesTarget1
				 .request()
				 .post(Entity.json(course1));
		 
		 Response postResponse2 = coursesTarget1
				 .request()
				 .post(Entity.json(course2));
		 
		 Response postResponse3 = coursesTarget2
				 .request()
				 .post(Entity.json(course3));
		 
		 Response postResponse4 = coursesTarget2
				 .request()
				 .post(Entity.json(course4));
		 

		 
		 
	}

}
