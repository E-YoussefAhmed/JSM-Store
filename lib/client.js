//https://jsm-store.sanity.studio/desk  to manage sanity
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zqni6cwh",
  dataset: "production",
  apiVersion: "2022-11-02",
  useCdn: true,
  token: process.env.NEXT_PUPLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
