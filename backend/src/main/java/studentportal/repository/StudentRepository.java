package studentportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studentportal.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}