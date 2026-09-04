package studentportal.controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Faculty;
import studentportal.repository.FacultyRepository;

@CrossOrigin(origins = "*")
@RestController
public class FacultyController {

    private final FacultyRepository facultyRepository;

    public FacultyController(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    @GetMapping("/faculty")
    public List<Faculty> getFaculty() {
        return facultyRepository.findAll();
    }
}