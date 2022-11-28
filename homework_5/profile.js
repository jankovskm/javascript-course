async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if(!response.ok){
        //something bad happened
    }
    const res =  await response.json();
    createProfile(res);
}


function createProfile(data){
    let nameInput = document.getElementsByTagName('h1');
    nameInput[0].innerText = data.name;
    let contactInput = document.getElementsByTagName('p');
    contactInput[0].innerText = data.website;
    contactInput[0].style.marginBottom = 0;
    contactInput[0].style.marginTop = "15px";
    const jobInfo = document.getElementById('job_info');
    jobInfo.innerText = data.email;
    jobInfo.style.marginTop = 0;
    jobInfo.style.fontSize = "20px";
    //const span = document.createElement('span');
    const span = document.getElementsByTagName('span');
    span[0].innerText = data.address.suite +"-"+data.address.street +"-"+data.address.city +"-"+data.address.zipcode;
    span[0].style.opacity = 0.5;
    //document.getElementsByTagName('p').appendChild(span);

}

getUser();