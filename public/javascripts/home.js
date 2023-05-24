async function getDataSkill (){
    const url = '/api/skill';
    const option = {
        method : 'GET',
        headers:{
            'Content-type':'application/json'
        }
    }

    const promisse = await fetch(url, option);
    const response  = await promisse.json()

    handdlerPromisse(promisse,response)

};getDataSkill();

const handdlerPromisse = (promisse, response) => {
    switch (promisse.status) {
        case 200:
            insertDataReturned(response)
            break;
        default:
            window.alert(`Error code ${promisse.status}`)
            break;
    }
};

function insertDataReturned (response){
    let arrayCreate = JSON.parse(response, null, 4);

    arrayCreate.forEach( element => {
        let span = document.createElement('span');
        span.innerText = element.name;

        span.addEventListener('mouseover', e => {
            let paragraph = document.createElement('p');
            paragraph.innerText = element.description;

            document.querySelector('.skills-desc').innerHTML = '';
            document.querySelector('.skills-desc').appendChild(paragraph);
        })
        document.querySelector('.skills').appendChild(span);
    })
}
