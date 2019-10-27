export default function(doc, main) {
    const content = doc.createElement('p')
    content.innerText = 'Hi, this is the home page'
    main.appendChild(content)
}
