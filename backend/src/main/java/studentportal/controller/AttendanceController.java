package studentportal.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Attendance;
import studentportal.repository.AttendanceRepository;

@CrossOrigin(origins = "*")
@RestController
public class AttendanceController {

    private final AttendanceRepository attendanceRepository;

    public AttendanceController(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @GetMapping("/attendance")
    public List<Attendance> getAttendance() {
        return attendanceRepository.findByStudentId(1);
    }
}