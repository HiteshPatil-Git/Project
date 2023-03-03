package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Epass;
import com.app.pojos.TimeSlot;
import com.app.pojos.User;
import com.app.service.IEpassService;
import com.app.service.ITimeSlotService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/timeslot")
public class TimeSlotController {
	
	@Autowired
	private ITimeSlotService  timeslotService;
	public TimeSlotController() {
		System.out.println("in cnst of"+getClass().getName());
	}
	
	@GetMapping
	public List<TimeSlot> getAllPasses()
	{
		return timeslotService.getAllTimeSlot();
	}
	@PostMapping
	public ResponseEntity<?> addNewTimeSlot(@RequestBody TimeSlot slotDetails){
		System.out.println("in add new user"+slotDetails);
		try {
			
			return new ResponseEntity<>(timeslotService.addTimeSlotDetails(slotDetails),HttpStatus.CREATED);
			
		}catch (RuntimeException e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);	
		}
	}
		
		@GetMapping("/{id}")
		public TimeSlot getSlotById(@PathVariable int slotid) {
			return timeslotService.getDetailsById(slotid);
		
		}
	
	@DeleteMapping("/{passId}")
	public ResponseEntity<?>  deleteTimeSlotDetails(@PathVariable int slotId)
	{try {
		return new ResponseEntity<>(timeslotService.deleteTimeSlotDetails(slotId), HttpStatus.OK);
	} catch (RuntimeException e) {
		return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}	

	}

}
