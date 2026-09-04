package studentportal.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import studentportal.model.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}