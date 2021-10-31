package com.crm.crm;

import com.crm.crm.domain.Contact;
import com.crm.crm.repository.ContactRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrmApplication implements CommandLineRunner {

	private final ContactRepository repository;

	@Autowired
	CrmApplication(ContactRepository repository)
	{
		this.repository = repository;
	}

	public static void main(String[] args) {
		SpringApplication.run(CrmApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		this.repository.save(new Contact("Emmanuel", "Henri", "me@me.com"));	
	}
}
