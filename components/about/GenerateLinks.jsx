import React from 'react'

const GenerateLinks = ({ block }) => {
  const matchedLinks = block.children.map((child) => {
    const childMark = child.marks[0]
    const innerText = child.text
    const matchingMarkDef = block.markDefs.find(
      (markDef) => markDef._key === childMark
    )
    if (matchingMarkDef) {
      return (
        <a
          key={childMark}
          href={matchingMarkDef.href}
          className="about-heading-stylee mb-4 lg:mb-8"
        >
          {innerText}
        </a>
      )
    }

    return null
  })

  return <>{matchedLinks}</>
}

export default GenerateLinks
