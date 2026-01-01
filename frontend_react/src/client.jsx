import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'i172lioc',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skxXq6TJXJOpRAetZFWIgE672zdZxdP56UwU3r1qLz0htCcmRuokRv2VKCNzpRwok5MU47CzuV1clRGsKKYrWlraVdpaOlTbXzRFauxqc8jPIZLViTXI5nr7EFiQEiQsnXjVBvq0Tyq0nZ6fWql8839o16Dm4n9TlgY60KtdScrYdUYzIE15',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);