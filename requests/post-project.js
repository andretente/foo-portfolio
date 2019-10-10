export default async function(data) {
    try {
        const result = await fetch(
            'https://foo-coding-portfolio.firebaseio.com/projects.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
            },
        )
        return result.json()
    } catch (error) {
        throw new Error(error)
    }
}
