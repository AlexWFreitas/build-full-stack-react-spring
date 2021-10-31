package com.crm.crm.repository;

import com.crm.crm.domain.Contact;

import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Long> {
	
}
