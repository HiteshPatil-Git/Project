package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Epass;
import com.app.pojos.TimeSlot;

public interface TimeSlotRepository extends JpaRepository<TimeSlot, Integer>  {

}
