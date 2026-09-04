package studentportal.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Timetable;
import studentportal.repository.TimetableRepository;

@CrossOrigin(origins = "*")
@RestController
public class TimetableController {

    private final TimetableRepository timetableRepository;

    public TimetableController(TimetableRepository timetableRepository) {
        this.timetableRepository = timetableRepository;
    }

    @GetMapping("/timetable")
    public List<Timetable> getTimetable() {
        return timetableRepository.findByStudentId(1);
    }
}