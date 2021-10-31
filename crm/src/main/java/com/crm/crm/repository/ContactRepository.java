package com.crm.crm.repository;

import com.crm.crm.domain.Contact;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface ContactRepository extends CrudRepository<Contact, Long> {
	
}
