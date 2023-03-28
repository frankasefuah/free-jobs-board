// TODO: Build a Jobs Board
// Display job title - Done
// Display company name 
// Display company location
// Display remote or not
// Display link to role
// Show hr below each job
// List all jobs
// Auto create html tags for them

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

        addElement(result)
    })
    .catch(error => console.log('error', error));

// document.body.onload = addElement;

function addElement(result) {
    // create a new section element
    const newSection = document.createElement("section");

    // create elements
    const newH3 = document.createElement('h3')
    const newH4 = document.createElement('h4')
    const newPar = document.createElement('p')
    // const aTag = document.createElement('a')

    // and give it some content
    const jobTitle = document.createTextNode(result.data[0].title)
    const companyName = document.createTextNode(result.data[0].company_name)
    const jobLocation = document.createTextNode(result.data[0].location)

    // const jobUrl = document.createAttribute('href')
    // jobUrl.value = result.data[0].url
    // aTag.setAttribute(jobUrl)
    // const viewJobText = document.createTextNode('View Job')

    // add the content to the newly created tags
    newH3.appendChild(jobTitle)
    newH4.appendChild(companyName);
    newPar.appendChild(jobLocation);
    // aTag.appendChild(viewJobText)

    // add the h3 to the new section
    newSection.appendChild(newH3)
    newSection.appendChild(newH4)
    newSection.appendChild(newPar)

    // add the newly created element and its content into the DOM
    const currentSection = document.getElementById("mainSection")
    document.body.insertBefore(newSection, currentSection)
}
