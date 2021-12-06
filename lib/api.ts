import fs from 'fs'
import { join } from 'path'
import { getPlaiceholder } from 'plaiceholder';
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

interface Post {
  order?: number
}

export function getPostSlugs(directory: string) {
  return fs.readdirSync(directory)
}

export async function getAllPosts(fields = [], type: string) {
  // Gets the current working directory, and joins the specific markdown folder (e.g. "_posts") to append to the directory to pass to the the function
  const directory = join(process.cwd(), type)

  // Returns an array of all the directory item's titles (e.g. ["post-1.md, post-2.md"])
  const slugs = getPostSlugs(directory)

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      // Remove .md file extension
      const realSlug = slug.replace(/\.md$/, '')
      // Write the full path of the individual post
      const fullPath = join(directory, `${realSlug}.md`)
      // Use fs to define all file contents, then pass the file contents into matter to extract the data and contents (e.g. { data: { title: 'Home'}, content: 'Other stuff' } )
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)


      let items = {}
      // Add the 'order' field to the fields array so it can be sorted in the following function
      fields.push('order')
      // Loop over all fields provided in the function getAllPosts, and check against the data returned from matter. If the field is 'slug' return real slug. If the field is 'content' return the content of the markdown file from matter. Else, as long as the data returned from matter is not undefined (i.e. if there is no author in data), return the post data.
      for(let field of fields) {
        if (field === 'slug') {
          items[field] = realSlug
        }
        if (field === 'content') {
          items[field] = content
        }
        if (typeof data[field] !== 'undefined') {
          if(field === 'coverImage') {
            const { base64 } = await getPlaiceholder(data[field])
            let coverImageObject = {
              coverImage : {
                url: data[field],
                blurDataURL: base64
              }
            }
            Object.assign(items, coverImageObject)
          } else {
            items[field] = data[field]
          }
        }
      }

      return items
    })
  ).then((values) => values.sort((post1: Post, post2: Post) => (post1?.order - post2?.order)))

  return posts
}

export async function getPost(slug: string, fields = [], type: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(type, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
