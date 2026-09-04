package studentportal.controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Notices;
import studentportal.repository.NoticesRepository;

@CrossOrigin(origins = "*")
@RestController
public class NoticesController {

    private final NoticesRepository noticesRepository;

    public NoticesController(NoticesRepository noticesRepository) {
        this.noticesRepository = noticesRepository;
    }

    @GetMapping("/notices")
    public List<Notices> getNotices() {
        return noticesRepository.findAll();
    }
}