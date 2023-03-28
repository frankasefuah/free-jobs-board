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
        // const sectionElement = document.getElementById('mainSection')
        // const h3Tag = document.createElement('h3')
        // console.log(h3Tag)
        // const jobTitleContent = document.createTextNode(result.data[0].title)
        // h3Tag.appendChild(jobTitleContent)
        // document.body.insertBefore(sectionElement, h3Tag)
        // sectionElement.appendChild(h3Tag)

    })
    .catch(error => console.log('error', error));

// document.body.onload = addElement;

function addElement(result) {
    // create a new section element
    const newSection = document.createElement("section");

    // create an h3 element
    const newH3 = document.createElement('h3')

    // and give it some content
    const jobTitle = document.createTextNode(result.data[0].title);

    // add the job title node to the newly created h3
    newH3.appendChild(jobTitle);

    // add the h3 to the new section
    newSection.appendChild(newH3)

    // add the newly created element and its content into the DOM
    const currentSection = document.getElementById("mainSection");
    document.body.insertBefore(newSection, currentSection);
}
