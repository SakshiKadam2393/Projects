<?php 
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "students"; 
 
$conn = new mysqli($servername, $username, $password, $dbname); 
 
if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error); 
} 
 
$rollNo = $_POST['rollNo']; 
$studName = $_POST['studName']; 
$studDept = $_POST['studDept']; 
$passingYear = $_POST['passingYear']; 
$classGrades = $_POST['classGrades']; 
 
$sql = "INSERT INTO students (rollNo, studName, studDept, passingYear, classGrades)  
        VALUES ('$rollNo', '$studName', '$studDept', '$passingYear', '$classGrades')"; 
 
if ($conn->query($sql) === TRUE) {     echo "New record created successfully"; 
} else {     echo "Error: " . $sql . "<br>" . $conn->error; 
} 
 
$conn->close(); 
?> 
