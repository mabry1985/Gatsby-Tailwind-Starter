import React from 'react'

interface Props {
  tagName: string
  
}

const Tag = (props: Props) => {
  return (
    <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
      #{props.tagName}
    </span>
  )
}

export default Tag
