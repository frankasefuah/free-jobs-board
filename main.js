// TODO: Build a Jobs Board
// Display job title
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

        let sectionElement = document.querySelector('#mainSection')
        let h3Tag = document.createElement('h3')
        let jobTitleContent = document.createTextNode(result.data[0].title)
        h3Tag.appendChild(jobTitleContent)
        sectionElement.appendChild(h3Tag)
    })
    .catch(error => console.log('error', error));

// document.querySelector('#jobs').addEventListener('click', () => {
//     const url = `https://arbeitnow.com/api/job-board-api`
//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// })