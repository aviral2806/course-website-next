import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2021-10-21",
    useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
    return builder.image(source)
}