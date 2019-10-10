import postProject from '../requests/post-project'

export default function(doc) {
    personalDetailsForm(doc)
}

function personalDetailsForm(doc) {
    const fields = ['Name', 'Description', 'URL']
    const form = doc.createElement('form')
    form.addEventListener('submit', event => {
        event.preventDefault()
        const values = fields.reduce((acc, curr) => {
            const value = document.getElementById(curr).value
            return { ...acc, [curr.toLowerCase()]: value }
        }, {})
        postProject(values)
    })
    fields.forEach(item => {
        const input = doc.createElement('textarea')
        input.setAttribute('id', item)
        const label = doc.createElement('label')
        label.setAttribute('html-for', item)
        label.innerText = item
        form.appendChild(label)
        form.appendChild(input)
    })
    const button = doc.createElement('button')
    button.setAttribute('role', 'submit')
    button.innerText = 'Submit'
    form.appendChild(button)
    main.appendChild(form)
}
