import { Outlet } from "@remix-run/react"

const BlogPostLayout = () => {
  return (
    <article className="prose lg:prose-2xl">
      <Outlet />
    </article>
  )
}

export default BlogPostLayout
