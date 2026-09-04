package studentportal.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.LeaveRequest;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Integer> {

    List<LeaveRequest> findByStudentId(int studentId);

}