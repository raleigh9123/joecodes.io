// pages / index.tsx
// --> PAGE <-

// Node Modules Imports
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// Component Imports
import Layout from '../../components/layout/layout'
import { Post } from '../index'

// Data Imports
import { getAllPosts, getPost, markdownToHtml } from '../../lib/api'

export default function Project({ project }) {

  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <p>Status Code: 404</p>
  }

  return (
    <>
      <Layout>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {project.title} | TeamTreehouse
                </title>
                {/* <meta property="og:image" content={project.ogImage.url} /> */}
              </Head>
              {/* <projectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <projectBody content={project.content} />
              < */}
            </article>
          </>
        )}
        </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const project:Post = await getPost(params.slug, [
    'title',
    'subline',
    'excerpt',
    'type',
    'technologies',
    'secondaryTechnologies',
    'githubURL',
    'demoURL',
    'coverImage',
    'content',
    'slug',
  ], "_projects")

  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects:Post[] = await getAllPosts(['slug'], "_projects")

  return {
    paths: projects.map((project)=> {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}
