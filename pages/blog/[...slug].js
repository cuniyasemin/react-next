import React from 'react'
import {useRouter} from 'next/router'

const BlogPostDetailPage = () => {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>BlogPostDetailPage</div>
  )
}

export default BlogPostDetailPage