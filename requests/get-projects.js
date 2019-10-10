export default async function() {
    try {
        const result = await fetch(
            'https://foo-coding-portfolio.firebaseio.com/projects.json',
        )
        return result.json()
    } catch (error) {
        throw new Error(error)
    }
}
