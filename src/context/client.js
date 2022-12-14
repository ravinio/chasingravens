import * as contentful from "contentful"

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: "master",
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})