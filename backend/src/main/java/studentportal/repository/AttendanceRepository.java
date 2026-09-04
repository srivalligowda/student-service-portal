package studentportal.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {

    List<Attendance> findByStudentId(int studentId);

}