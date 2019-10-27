export default async function() {
    try {
        const result = await fetch(
            'https://foo-coding-portfolio.firebaseio.com/projects.json',
            {
                method: 'GET',
            },
        )
        return result.json()
    } catch (error) {
        throw new Error(error)
    }
}
