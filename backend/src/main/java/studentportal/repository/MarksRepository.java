package studentportal.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Marks;

public interface MarksRepository extends JpaRepository<Marks, Integer> {

    List<Marks> findByStudentId(int studentId);

}