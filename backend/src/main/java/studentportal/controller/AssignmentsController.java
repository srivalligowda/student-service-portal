package studentportal.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Assignments;
import studentportal.repository.AssignmentsRepository;

@CrossOrigin(origins = "*")
@RestController
public class AssignmentsController {

    private final AssignmentsRepository assignmentsRepository;

    public AssignmentsController(AssignmentsRepository assignmentsRepository) {
        this.assignmentsRepository = assignmentsRepository;
    }

    @GetMapping("/assignments")
    public List<Assignments> getAssignments() {
        return assignmentsRepository.findByStudentId(1);
    }
}