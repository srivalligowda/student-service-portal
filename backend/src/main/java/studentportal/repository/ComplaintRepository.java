package studentportal.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Integer> {

    List<Complaint> findByStudentId(int studentId);

}