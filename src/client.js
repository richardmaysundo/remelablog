import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "hvicqgfx", // find this at manage.sanity.io, run `sanity init` to initialize
  dataset: "production", // this is from when we answered those question from 'sanity init'
  useCdn: true,
});
