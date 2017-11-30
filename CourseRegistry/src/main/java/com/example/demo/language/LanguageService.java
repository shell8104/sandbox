package com.example.demo.language;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LanguageService {
	
	@Autowired
	private LanguageRepository langRepo;
	
	public List<Language> getAllLanguages() {
		List<Language> languages = new ArrayList<>();
		langRepo.findAll().forEach(languages::add);
		return languages;
}

	public Language getLanguage(String id) {
		
		return langRepo.findOne(id);
	}

	public void addLanguage(Language language) {
		langRepo.save(language);
	}

	public void modifyLanguage(Language language) {
		langRepo.save(language);
		
	}

	public void deleteLanguage(String id) {
		langRepo.delete(id);
		
	}
}
