package studentportal.controller;



import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import studentportal.model.Certificate;
import studentportal.repository.CertificateRepository;

@CrossOrigin(origins = "*")
@RestController
public class CertificateController {

    private final CertificateRepository certificateRepository;

    public CertificateController(CertificateRepository certificateRepository) {
        this.certificateRepository = certificateRepository;
    }

    @GetMapping("/certificates")
    public List<Certificate> getCertificates() {
        return certificateRepository.findByStudentId(1);
    }
}