package com.example.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("test")
public class Resource {
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String testMethod() {
		return "it works!";
	}

}
