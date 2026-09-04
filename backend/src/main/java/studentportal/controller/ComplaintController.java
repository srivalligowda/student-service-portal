package studentportal.controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Complaint;
import studentportal.repository.ComplaintRepository;

@CrossOrigin(origins = "*")
@RestController
public class ComplaintController {

    private final ComplaintRepository complaintRepository;

    public ComplaintController(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    @GetMapping("/complaints")
    public List<Complaint> getComplaints() {
        return complaintRepository.findByStudentId(1);
    }
}