function login() {



    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://127.0.0.1:8080/students")
        .then(response => response.json())
        .then(students => {

            const student = students.find(
                s => s.email === email && s.password === password
            );


            if (student) {
                alert("Login Successful! Welcome " + student.name);
            } else {
                alert("Invalid Email or Password");
            }
        })
        .catch(error => {
            console.error("Login Error:", error);
            alert("Cannot connect to backend");
        });
}


function registerStudent() {

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    fetch("/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
    `name=${encodeURIComponent(name)}` +
    `&email=${encodeURIComponent(email)}` +
    `&password=${encodeURIComponent(password)}`
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message || "Registration Successful!");
        })
        .catch(error => {
            console.error("Registration Error:", error);
            alert(error.message);
        });
}


function showDashboard() {

    document.getElementById("dashboard").innerHTML = `
        <h3>Welcome to Student Dashboard</h3>
        <p>Profile</p>
        <p>Attendance</p>
        <p>Marks</p>
        <p>Timetable</p>
        <p>Assignments</p>
        <p>Notices</p>
        <p>Leave Requests</p>
        <p>Certificates</p>
    `;
}


function showProfile() {

    fetch("http://127.0.0.1:8080/students")
        .then(response => response.json())
        .then(students => {

            if (students.length === 0) {
                alert("No student data found");
                return;
            }

            const student = students[0];

            document.getElementById("dashboardContent").innerHTML = `
                <h2>Student Profile</h2>
                <p>Name: ${student.name}</p>
                <p>Email: ${student.email}</p>
                <p>Student ID: ${student.id}</p>
                <p>Course: ${student.course}</p>
                <p>Year: ${student.year}</p>
            `;
        })
        .catch(error => {
            console.error("Profile Error:", error);
            alert("Cannot load profile");
        });
}


function showAttendance() {

    fetch("http://127.0.0.1:8080/attendance")
        .then(response => response.json())
        .then(attendance => {

            let html = `
                <h2>Attendance</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Subject</th>
                        <th>Total Classes</th>
                        <th>Attended Classes</th>
                        <th>Attendance %</th>
                    </tr>
            `;

            attendance.forEach(record => {
                html += `
                    <tr>
                        <td>${record.subject}</td>
                        <td>${record.totalClasses}</td>
                        <td>${record.attendedClasses}</td>
                        <td>${record.attendancePercentage}%</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Attendance Error:", error);
            alert("Cannot load attendance");
        });
}


function showMarks() {

    fetch("http://127.0.0.1:8080/marks")
        .then(response => response.json())
        .then(marks => {

            let html = `
                <h2>Marks / Results</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Subject</th>
                        <th>Max Marks</th>
                        <th>Obtained Marks</th>
                        <th>Grade</th>
                    </tr>
            `;

            marks.forEach(record => {
                html += `
                    <tr>
                        <td>${record.subject}</td>
                        <td>${record.maxMarks}</td>
                        <td>${record.obtainedMarks}</td>
                        <td>${record.grade}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Marks Error:", error);
            alert("Cannot load marks");
        });
}


function showTimetable() {

    fetch("http://127.0.0.1:8080/timetable")
        .then(response => response.json())
        .then(timetable => {

            let html = `
                <h2>Timetable</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Day</th>
                        <th>Subject</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Room</th>
                    </tr>
            `;

            timetable.forEach(record => {
                html += `
                    <tr>
                        <td>${record.day}</td>
                        <td>${record.subject}</td>
                        <td>${record.startTime}</td>
                        <td>${record.endTime}</td>
                        <td>${record.room}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Timetable Error:", error);
            alert("Cannot load timetable");
        });
}


function showAssignments() {

    fetch("http://127.0.0.1:8080/assignments")
        .then(response => response.json())
        .then(assignments => {

            let html = `
                <h2>Assignments</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Subject</th>
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
            `;

            assignments.forEach(record => {
                html += `
                    <tr>
                        <td>${record.subject}</td>
                        <td>${record.title}</td>
                        <td>${record.dueDate}</td>
                        <td>${record.status}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Assignments Error:", error);
            alert("Cannot load assignments");
        });
}


function showNotices() {

    fetch("http://127.0.0.1:8080/notices")
        .then(response => response.json())
        .then(notices => {

            let html = `
                <h2>Notices / Announcements</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
            `;

            notices.forEach(record => {
                html += `
                    <tr>
                        <td>${record.title}</td>
                        <td>${record.message}</td>
                        <td>${record.noticeDate}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Notices Error:", error);
            alert("Cannot load notices");
        });
}


function showLeaveRequests() {

    fetch("http://127.0.0.1:8080/leave-requests")
        .then(response => response.json())
        .then(leaves => {

            let html = `
                <h2>Leave Requests</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Leave Type</th>
                        <th>Reason</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Status</th>
                    </tr>
            `;

            leaves.forEach(record => {
                html += `
                    <tr>
                        <td>${record.leaveType}</td>
                        <td>${record.reason}</td>
                        <td>${record.fromDate}</td>
                        <td>${record.toDate}</td>
                        <td>${record.status}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Leave Request Error:", error);
            alert("Cannot load leave requests");
        });
}


function showCertificates() {

    fetch("http://127.0.0.1:8080/certificates")
        .then(response => response.json())
        .then(certificates => {

            let html = `
                <h2>Certificates</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Certificate Type</th>
                        <th>Request Date</th>
                        <th>Status</th>
                    </tr>
            `;

            certificates.forEach(record => {
                html += `
                    <tr>
                        <td>${record.certificateType}</td>
                        <td>${record.requestDate}</td>
                        <td>${record.status}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Certificate Error:", error);
            alert("Cannot load certificates");
        });
}
function showFees() {

    fetch("http://127.0.0.1:8080/fees")
        .then(response => response.json())
        .then(fees => {

            let html = `
                <h2>Fee Information</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Total Fee</th>
                        <th>Paid Fee</th>
                        <th>Pending Fee</th>
                        <th>Payment Status</th>
                    </tr>
            `;

            fees.forEach(record => {
                html += `
                    <tr>
                        <td>₹${record.totalFee}</td>
                        <td>₹${record.paidFee}</td>
                        <td>₹${record.pendingFee}</td>
                        <td>${record.paymentStatus}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Fee Error:", error);
            alert("Cannot load fee information");
        });
}
function showComplaints() {

    fetch("http://127.0.0.1:8080/complaints")
        .then(response => response.json())
        .then(complaints => {

            let html = `
                <h2>Complaints / Helpdesk</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
            `;

            complaints.forEach(record => {
                html += `
                    <tr>
                        <td>${record.subject}</td>
                        <td>${record.message}</td>
                        <td>${record.complaintDate}</td>
                        <td>${record.status}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Complaint Error:", error);
            alert("Cannot load complaints");
        });
}
function showEvents() {

    fetch("http://127.0.0.1:8080/events")
        .then(response => response.json())
        .then(events => {

            let html = `
                <h2>College Events</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Venue</th>
                    </tr>
            `;

            events.forEach(record => {
                html += `
                    <tr>
                        <td>${record.title}</td>
                        <td>${record.description}</td>
                        <td>${record.eventDate}</td>
                        <td>${record.venue}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Events Error:", error);
            alert("Cannot load events");
        });
}
function showFaculty() {

    fetch("http://127.0.0.1:8080/faculty")
        .then(response => response.json())
        .then(faculty => {

            let html = `
                <h2>Faculty Information</h2>

                <table border="1" cellpadding="10">
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Email</th>
                    </tr>
            `;

            faculty.forEach(record => {
                html += `
                    <tr>
                        <td>${record.name}</td>
                        <td>${record.department}</td>
                        <td>${record.subject}</td>
                        <td>${record.email}</td>
                    </tr>
                `;
            });

            html += `
                </table>
            `;

            document.getElementById("dashboardContent").innerHTML = html;
        })
        .catch(error => {
            console.error("Faculty Error:", error);
            alert("Cannot load faculty information");
        });
}