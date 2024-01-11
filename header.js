

const index =  [ 
    {title: 'Personal Info', des:'Please, provide your name, email, adress and phone number'}
]

export const header = ({title, description}) => {
    return `
    <h2>${title}</h2>
    <p class="detail">
    ${description}
    </p>
`
}

const headerElement = document.querySelector('#header')
headerElement.outerHTML = header({title: index[0].title, description: index[0].des})