import getProjetcs from '../requests/get-projects'

export default async function(doc) {
    const projects = await getProjetcs()
    Object.values(projects).forEach(project => {
        const name = doc.createElement('p')
        name.innerText = project.name
        main.appendChild(name)
    })
}
