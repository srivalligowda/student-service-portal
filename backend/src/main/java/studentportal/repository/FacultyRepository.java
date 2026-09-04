package studentportal.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Integer> {

}