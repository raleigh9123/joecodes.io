// pages / index.tsx
// --> PAGE <-

// Node Modules Imports
import Head from 'next/head'

// Data Imports
import { getAllPosts } from '../lib/api'

// Component Imports
import Layout from '../components/layout/layout'
import Welcome from '../components/welcome'
import Work from '../components/work'
import About from '../components/about'
// import Uses from '../components/uses'

// TS Declarations
export interface Post {
  title?: string
  subline?: string
  excerpt?: string
  type?: string
  projectCompleted?: { isComplete: Boolean, completionDate: string }
  technologies?: string[]
  secondaryTechnologies?: string[],
  githubURL?: string
  coverImage?: { url?: string, blurDataURL?: string }
  demoURL?: string
  slug?: string
  content?: any
}
export interface WorkData {
  allJobs: Post[],
  allProjects: Post[]
}

export default function Index({ allProjects, allJobs }) {

  const workData: WorkData = { allProjects, allJobs }

  return (
    <>
      <Head>
        <title>Joseph Butterfield - Portfolio {"&"} Resume</title>
      </Head>

      <Layout>

        <Welcome />

        <Work data={workData} />

        <About />

        {/* <Uses /> */}

      </Layout>

    </>
  )
}

export async function getStaticProps() {

  const allJobs = await getAllPosts([
    'title',
    'subline',
    'excerpt',
    'technologies',
    'demoURL',
    'githubURL',
    'projectCompleted',
    'coverImage',
    'slug',
  ], "_jobs")

  const allProjects = await getAllPosts([
    'title',
    'subline',
    'excerpt',
    'type',
    'technologies',
    'secondaryTechnologies',
    'githubURL',
    'demoURL',
    'coverImage',
    'slug',
  ], "_projects")


  return {
    props: { allJobs, allProjects },
  }
}
