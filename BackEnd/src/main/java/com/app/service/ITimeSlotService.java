package com.app.service;

import java.util.List;

import com.app.pojos.Epass;
import com.app.pojos.TimeSlot;

public interface ITimeSlotService {

	List<TimeSlot> getAllTimeSlot();

	Object addTimeSlotDetails(TimeSlot slotDetails);

	TimeSlot getDetailsById(int slotid);

	TimeSlot deleteTimeSlotDetails(int slotId);

	
}
