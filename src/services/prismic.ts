import Prismic from '@prismicio/client'

export function getPrismicClient() {
  const repositoryName = process.env.PRISMIC_ACCESS_TOKEN
  const prismic = Prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  return prismic;
}