import { json, type LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react"

import * as firstPost from './__post/firstPost.mdx'

function postFromModule(mod: typeof firstPost) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}

// interface PostData {
//   slug: string
// }

interface PostData {
  slug: string
  title: string
  description: string
}

export const loader: LoaderFunction = async () => {
  return json([
    postFromModule(firstPost)
  ])
}

const Blogs = () => {
  const posts = useLoaderData<PostData[]>();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? (
            <p>{post.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export default Blogs
