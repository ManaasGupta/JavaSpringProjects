package com.spring.restApp.controller;

import com.spring.restApp.dto.PersonDto;
import com.spring.restApp.service.PersonService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/person")
@CrossOrigin
public class PersonRestController {
    @Autowired
    private PersonService personService;

    @Autowired
    private ModelMapper mapper;

    @GetMapping("/")
    public ResponseEntity<List<PersonDto>> getAll(){
        List<PersonDto> personDto = this.personService.getAll();
        return new ResponseEntity<>(personDto, HttpStatus.OK);
    }

    @GetMapping("/{personId}")
    public ResponseEntity<PersonDto> getPerson(@PathVariable Integer personId){
        PersonDto personDto = this.personService.getPerson(personId);
        return  new ResponseEntity<>(personDto,HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<PersonDto> addPersonRecord(@RequestBody PersonDto personDto){
        PersonDto saved = this.personService.addPersonRecord(personDto);
        return  new ResponseEntity<>(saved,HttpStatus.CREATED);
    }

    @PutMapping("/{personId}")
    public ResponseEntity<PersonDto> updatePersonRecord(@PathVariable Integer personId,@RequestBody PersonDto personDto){
        PersonDto updated = this.personService.updatePersonRecord(personId,personDto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("/{personId}")
    public ResponseEntity<String> deletedRecord(@PathVariable Integer personId){
        String message = this.personService.deletedRecord(personId);
        return new ResponseEntity<>(message,HttpStatus.OK);
    }

}
