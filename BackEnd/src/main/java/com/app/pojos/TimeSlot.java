package com.app.pojos;


import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.mapping.AccessOptions.GetOptions.GetNulls;
import org.springframework.format.annotation.DateTimeFormat;



@Entity
@Table(name = "timeslot")
public class TimeSlot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer slotId;
	@Column(length = 20,name = "pass_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate slotDate;
	@Column(length = 20)
	private String slot; 

  
	private int maxPersonPerSlot;
	

	@OneToOne
	@JoinColumn(name = "u_id")
	private User user;
	public TimeSlot() {
		System.out.println("in cnstr of"+getClass().getName());
	}



	public TimeSlot(LocalDate slotDate, String slot, int maxPersonPerSlot) {
		super();
		this.slotDate = slotDate;
		this.slot = slot;
		this.maxPersonPerSlot = maxPersonPerSlot;
	}



	public Integer getSlotId() {
		return slotId;
	}



	public void setSlotId(Integer slotId) {
		this.slotId = slotId;
	}



	public LocalDate getSlotDate() {
		return slotDate;
	}



	public void setSlotDate(LocalDate slotDate) {
		this.slotDate = slotDate;
	}



	public String getSlot() {
		return slot;
	}



	public void setSlot(String slot) {
		this.slot = slot;
	}



	public int getMaxPersonPerSlot() {
		return maxPersonPerSlot;
	}



	public void setMaxPersonPerSlot(int maxPersonPerSlot) {
		this.maxPersonPerSlot = maxPersonPerSlot;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "TimeSlot [slotId=" + slotId + ", slotDate=" + slotDate + ", slot=" + slot + ", maxPersonPerSlot="
				+ maxPersonPerSlot + ", user=" + user + "]";
	}




	

}
