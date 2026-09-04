package studentportal.controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Fee;
import studentportal.repository.FeeRepository;

@CrossOrigin(origins = "*")
@RestController
public class FeeController {

    private final FeeRepository feeRepository;

    public FeeController(FeeRepository feeRepository) {
        this.feeRepository = feeRepository;
    }

    @GetMapping("/fees")
    public List<Fee> getFees() {
        return feeRepository.findByStudentId(1);
    }
}