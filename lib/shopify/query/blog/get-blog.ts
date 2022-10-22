const getBlogByHandle = (handle: string): string => {
    return `
    {
        blog(handle: "${handle}") {
          id
          articles(first: 10) {
            edges {
              node {
                id
                title
                image {
                  id
                  url
                  altText
                }
                contentHtml
              }
            }
          }
        }
      }      
    `
}

export { getBlogByHandle }