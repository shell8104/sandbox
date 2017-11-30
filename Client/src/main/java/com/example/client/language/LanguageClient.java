package com.example.client.language;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.demo.language.Language;

public class LanguageClient {

	public static void main(String[] args) {
		
		Client client = ClientBuilder.newClient();
		
		WebTarget baseTarget = client.target("http://localhost:8081/");
		WebTarget languageTarget = baseTarget.path("languages");
		WebTarget singleLanguageTarget = languageTarget.path("{languageId}");
		
		 Language language =  singleLanguageTarget
				 				.resolveTemplate("languageId", "java")
				 				.request(MediaType.APPLICATION_JSON)
				 				.get(Language.class);
//		Language language = response.readEntity(Language.class);
//		System.out.println(language.getId());

//		 System.out.println(language.getId());
		 
		 Language lang1 = new Language("python","Python","The python language");
		 Language lang2 = new Language("java","Java","The Java language");
		 Language lang3 = new Language("javascript","JavaScript","The JavaScript language");
		 Language lang4 = new Language("pearl","Pearl","The Pearl language");
		 
		 Response postResponse1 = languageTarget
				 .request()
				 .post(Entity.json(lang1));
		 
		 Response postResponse2 = languageTarget
				 .request()
				 .post(Entity.json(lang2));
		 
		 Response postResponse3 = languageTarget
				 .request()
				 .post(Entity.json(lang3));
		 
		 Response postResponse4 = languageTarget
				 .request()
				 .post(Entity.json(lang4));
		 
		 System.out.println(postResponse1);
		 if (postResponse1.getStatus() == 200) {
		 }
		 
		 
	}

}
