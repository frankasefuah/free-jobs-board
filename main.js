// TODO: Build a Jobs Board
// Display job title - Done
// Display company name - Done 
// Display company location - Done
// Display remote or not
// Display link to role - Done
// Show hr below each job
// List all jobs
// Style the jobs Board


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://www.arbeitnow.com/api/job-board-api", requestOptions)
    .then(res => res.json())
    .then(result => {
        console.log(result.data)
        console.log(result.data[0])
        console.log(result.data[0].title)
        console.log(result.data[0].company_name)
        console.log(result.data[0].location)
        console.log(result.data[0].url)

        addJob(result)
    })
    .catch(error => console.log('error', error));

// document.body.onload = addElement;

function addJob(result) {
    // create a new section element
    const newSection = document.createElement("section");

    // create elements
    const newH3 = document.createElement('h3')
    const newH4 = document.createElement('h4')
    const newPar = document.createElement('p')
    const aTag = document.createElement('a')

    // and give it some content
    const jobTitle = document.createTextNode(result.data[0].title)
    const companyName = document.createTextNode(result.data[0].company_name)
    const jobLocation = document.createTextNode(result.data[0].location)
    const viewJobText = document.createTextNode('Click to View Job')

    // Add the href for the link to the full job
    aTag.setAttribute('href', result.data[0].url)

    // add the content to the newly created tags
    newH3.appendChild(jobTitle)
    newH4.appendChild(companyName);
    newPar.appendChild(jobLocation);
    aTag.appendChild(viewJobText)

    // add the tags to the new section
    newSection.appendChild(newH3)
    newSection.appendChild(newH4)
    newSection.appendChild(newPar)
    newSection.appendChild(aTag)

    // add the newly created element and its contents into the DOM
    const currentSection = document.getElementById("mainSection")
    document.body.insertBefore(newSection, currentSection)
}
