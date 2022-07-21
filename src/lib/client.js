import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-07-19",
    token: process.env.REACT_APP_SANITY_TOKEN,
    useCdn: true
});

export default client;
