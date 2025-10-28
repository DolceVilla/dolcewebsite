
import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import RelatedBlog from '../components/RelatedBlog'
import DOMPurify from 'dompurify'

const BlogList = () => {
  const { docId } = useParams()
  const { blogs } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  useEffect(() => {
    const doc = blogs.find(doc => doc._id === docId)
    setDocInfo(doc || null)
  }, [blogs, docId])

  if (!docInfo) return null

  return (
    <div className="">
      <div className="">
        {/* Blog Image */}
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-bl-[50px] rounded-br-[50px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif mt-6 text-center">
        {docInfo.title}
      </h1>

      {/* Content */}
      <div className="mt-4 sm:mt-6 ml-20 mr-10  ">
        {docInfo.content && (
          <div
            className="prose max-w-full sm:prose-sm md:prose md:mx-auto"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(docInfo.content) }}
          />
        )}
      </div>

      {/* Related Blogs */}
      <div className="mt-10">
        <RelatedBlog />
      </div>
    </div>
  )
}

export default BlogList

