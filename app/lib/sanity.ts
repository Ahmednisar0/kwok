import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'fbw58oi2',   // 🔁 replace with your actual project ID
  dataset: 'production',        // or your dataset name
  apiVersion: '2023-07-01',     // use any recent date in YYYY-MM-DD
  useCdn: false,                // false to get fresh data and allow writes
  token: 'skBukt04SVcJUpbZiCicmqrn3RHDwjKc9cP1PKSkTbeJuoA6q6Vdl03eVhR1pi7atNazwIlFf2AVmMBqem07cdtAtv9LjwO66y5YVk1mFjhyaTEtsLWwwlZVrswMuJE0zs5wKCZeglrBXJ76Hxp4B1Y4qHD7mJuu17VZ72JRu9nIlCSgIYk1',  // 🔒 REQUIRED for write access
});

export default client;