package studentportal.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Notices;

public interface NoticesRepository extends JpaRepository<Notices, Integer> {

}