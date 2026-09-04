package studentportal.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Fee;

public interface FeeRepository extends JpaRepository<Fee, Integer> {

    List<Fee> findByStudentId(int studentId);

}