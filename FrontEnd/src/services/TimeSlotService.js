import axios from 'axios';

const TIMESLOT_API_BASE_URL = "http://localhost:8080/spring-mvc-boot/timeslot"
class TimeSlotService{

    getTimeSlot(){
        return axios.get(TIMESLOT_API_BASE_URL);
    }

    createTimeSlot(timeslot){
        return axios.post(TIMESLOT_API_BASE_URL,timeslot)
            .then(response => {
       
                if (response) {
                    localStorage.setItem("timeslot", JSON.stringify(response.data));
                }
            return response;
            });
                }

    deleteTimeSlot(slotId){
        return axios.delete(TIMESLOT_API_BASE_URL + '/' +slotId);

    }
    getTimeSlotById(slotId){
        return axios.get(TIMESLOT_API_BASE_URL+ '/' +slotId)
    }
}
export default new TimeSlotService()