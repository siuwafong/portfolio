// client.js files will 'talk' to Sanity
import sanityClient from '@sanity/client';

export default sanityClient({
  // every Sanity project has a projectId found in the santiy.json file
  projectId: 'dgyldcwf',
  dataset: 'production',
});
