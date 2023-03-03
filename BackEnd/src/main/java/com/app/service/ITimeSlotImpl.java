package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excp.UserNotFoundExc;

import com.app.dao.EpassRepository;
import com.app.dao.TimeSlotRepository;
import com.app.pojos.Epass;
import com.app.pojos.TimeSlot;
import com.app.pojos.User;

@Service
@Transactional

public class ITimeSlotImpl implements ITimeSlotService{
	@Autowired
	private TimeSlotRepository TimeSlotRepo;
	

	@Override
	public Object addTimeSlotDetails(TimeSlot slotDetails) {
		
		return TimeSlotRepo.save(slotDetails);
	}
	
	
	@Override
	public List<TimeSlot> getAllTimeSlot() {
		// TODO Auto-generated method stub
		return TimeSlotRepo.findAll();
	}


	@Override
	public TimeSlot deleteTimeSlotDetails(int slotId) {
		
		Optional<TimeSlot> optionalTimeSlot=TimeSlotRepo.findById(slotId);
		TimeSlot timeSlot=optionalTimeSlot.orElseThrow(()->new UserNotFoundExc("Invalid Product ID "));
		TimeSlotRepo.deleteById(slotId);
		return timeSlot;
	}



	@Override
	public TimeSlot getDetailsById(int slotId) {
		Optional<TimeSlot> slot=TimeSlotRepo.findById(slotId);
		TimeSlot timeSlot=slot.orElseThrow(()-> new UserNotFoundExc("id not found"));
		return timeSlot;
		
	}


	

}
