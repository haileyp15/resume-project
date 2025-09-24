// Define Variables
let myName= "Hailey Parker";
let myEmail= "parkerhn@oru.edu";
let title= "Student";
let experience= "Barista, Office Receptionist, Camp Counselor, & Sunday Preschool Curriculm Coordinator";
let education = "Jenks High School, John Brown University, & Oral Robert's University";
let skills = ["HTML", "CSS", "JavaScript"];
let skillsList = document.createElement("ul");

//Connect Variables to the html
document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = "Experience: " + experience;
document.getElementById("education").textContent = "Education: " + education;
document.getElementById("skills-section").appendChild(skillsList);



for (let i = 0; i < skills.length; i++) {
    let li = document.createElement("li"); 
    li.textContent = skills [i];
    skillsList.appendChild(li);
}

function showFunFact(){
    alert("Fun Fact: I love to dance!");
}
