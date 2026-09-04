package studentportal.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Assignments;

public interface AssignmentsRepository extends JpaRepository<Assignments, Integer> {

    List<Assignments> findByStudentId(int studentId);

}