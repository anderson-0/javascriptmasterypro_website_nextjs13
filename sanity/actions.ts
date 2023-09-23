import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResourcesParams) => {
  const { page, query, category } = params;
  
  try {
    const resources = await readClient.fetch(groq`${buildQuery({
      type: 'resource',
      query,
      category,
      page: parseInt(page),
    })} {
      _id,
      title,
      downloadLink,
      "image": poster.asset->url,
      views,
      slug,
      category
    }`)
    return resources;
  } catch (error) {
    console.log(error);
  }

}