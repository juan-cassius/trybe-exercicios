const header = document.querySelector('header').style.backgroundColor="green";

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor='pink';
const emergencyTaskHeaders = document.querySelectorAll('.emergency-tasks h3');
for(let index=0; index < emergencyTaskHeaders.length;index+=1){
    emergencyTaskHeaders[index].style.backgroundColor="purple";
}
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor='yellow';
const noEmergencyTaskHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for(let index=0; index < noEmergencyTaskHeaders.length;index+=1){
    noEmergencyTaskHeaders[index].style.backgroundColor="black";}