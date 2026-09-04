package studentportal.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Marks;
import studentportal.repository.MarksRepository;

@CrossOrigin(origins = "*")
@RestController
public class MarksController {

    private final MarksRepository marksRepository;

    public MarksController(MarksRepository marksRepository) {
        this.marksRepository = marksRepository;
    }

    @GetMapping("/marks")
    public List<Marks> getMarks() {
        return marksRepository.findByStudentId(1);
    }
}