const getAllCollections = (): string => `
    {
        collections(first: 20) {
            edges {
                node {
                    id
                    title
                    handle
                    description
                }
            }
        }
    }
`

export {
    getAllCollections
}