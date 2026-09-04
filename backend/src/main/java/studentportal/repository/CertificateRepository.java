package studentportal.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Certificate;

public interface CertificateRepository extends JpaRepository<Certificate, Integer> {

    List<Certificate> findByStudentId(int studentId);

}