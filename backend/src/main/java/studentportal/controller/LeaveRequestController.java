package studentportal.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.LeaveRequest;
import studentportal.repository.LeaveRequestRepository;

@CrossOrigin(origins = "*")
@RestController
public class LeaveRequestController {

    private final LeaveRequestRepository leaveRequestRepository;

    public LeaveRequestController(LeaveRequestRepository leaveRequestRepository) {
        this.leaveRequestRepository = leaveRequestRepository;
    }

    @GetMapping("/leave-requests")
    public List<LeaveRequest> getLeaveRequests() {
        return leaveRequestRepository.findByStudentId(1);
    }
}