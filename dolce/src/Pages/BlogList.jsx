


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
    <div className="w-full">
      {/* Blog Image */}
      <img
        src={docInfo.image}
        alt={docInfo.name}
         loading="lazy"
        className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-bl-[50px] rounded-br-[50px] object-cover"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif mt-6 text-center">
        {docInfo.title}
      </h1>

      {/* Description */}
      <div className="mt-6 px-6 sm:px-10 md:px-20 lg:px-40">
        {docInfo.content && (
          <div
            className="prose max-w-none text-justify text-gray-800 leading-relaxed"
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


