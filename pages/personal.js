export default function(doc, main) {
    const content = doc.createElement('p')
    content.innerText = 'Hi, this is the personal page'
    main.appendChild(content)
}
