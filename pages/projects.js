import getProjetcs from '../requests/get-projects'
import { removeLoader, renderLoader } from './components/loader'

export default async function(doc, main) {
    renderLoader(doc, main)
    const projects = await getProjetcs()
    removeLoader(doc, main)
    Object.values(projects).forEach(project => {
        const title = doc.createElement('h1')
        title.innerText = project.name

        const description = doc.createElement('p')
        description.innerText = project.description

        const url = doc.createElement('a')
        url.setAttribute('href', project.url)
        url.innerText = project.url

        main.appendChild(title)
        main.appendChild(description)
        main.appendChild(url)
    })
}
