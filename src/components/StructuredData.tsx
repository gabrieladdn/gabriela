import React from 'react'

type Props = {
  data: object | object[]
}

export default function StructuredData({ data }: Props) {
  const json = Array.isArray(data) ? data : [data]

  return (
    <>
      {json.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
