package com.spring.restApp.service;

import com.spring.restApp.dto.PersonDto;

import java.util.List;

public interface PersonService {
    List<PersonDto> getAll();

    PersonDto getPerson(Integer personId);

    PersonDto addPersonRecord(PersonDto personDto);

    PersonDto updatePersonRecord(Integer personId, PersonDto personDto);

    String deletedRecord(Integer personId);
}
