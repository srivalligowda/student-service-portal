package studentportal.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Timetable;

public interface TimetableRepository extends JpaRepository<Timetable, Integer> {

    List<Timetable> findByStudentId(int studentId);

}