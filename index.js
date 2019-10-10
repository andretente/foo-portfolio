import { home, personal, projects, settings } from './pages'
const doc = window.document
const nav = doc.getElementById('nav')
const main = doc.getElementById('main')

function start() {
    renderNav()
    renderPage()
}

function renderPage() {
    switch (doc.location.pathname) {
        case '/home':
            home(doc)
            break
        case '/personal':
            personal(doc)
            break
        case '/projects':
            projects(doc)
            break
        case '/settings':
            settings(doc)
            break
        default:
            break
    }
}

function renderNav() {
    const pages = ['Home', 'Projects', 'Personal', 'Settings']
    pages.forEach(item => {
        const navItem = doc.createElement('a')
        navItem.setAttribute('id', item)
        navItem.setAttribute('class', 'nav-item')
        navItem.setAttribute('href', `/${item.toLowerCase()}`)
        navItem.innerText = item

        navItem.addEventListener('click', event => {
            history.pushState(null, null, event.target.href)
            main.innerHTML = ''
            renderPage()
            event.preventDefault()
        })

        nav.appendChild(navItem)
    })
}

start()
