async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getHeaders(preview) {

  const headers = await fetchGraphQL(
    `query {
      headersCollection {
        items {
          page
          firstHeader
          description
        }   
      }
    }`,
    preview
  )
  return headers;
}

export async function getLogo(preview) {

  const logo = await fetchGraphQL(
    `query {
      logo(id: "4WWvUPCfUdKjthyV9EVTiC") {
        title
        image {
          url
        }
      }
    }`,
    preview
  )
  return logo;
}

export async function getBackground(preview) {

  const logo = await fetchGraphQL(
    `query {
      backgroundImage(id: "64xNHHr6U5dDhGTIbTFMzf") {
        title
        background {
          url
        }
      }
    }`,
    preview
  )
  return logo;
}

export async function getMenu(preview) {

  const menu = await fetchGraphQL(
    `query {
      menuItemsCollection (order: sys_firstPublishedAt_ASC){
        items {
         itemName
         description
         price
         link
         image {
           url
         }
       }
       }
    }`,
    preview
  )
  return menu;
}