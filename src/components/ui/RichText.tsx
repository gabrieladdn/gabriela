import React from 'react'

// Lexical node formats
const IS_BOLD = 1
const IS_ITALIC = 2
const IS_STRIKETHROUGH = 4
const IS_UNDERLINE = 8
const IS_CODE = 16
const IS_SUBSCRIPT = 32
const IS_SUPERSCRIPT = 64

interface LexicalTextNode {
  type: 'text'
  text: string
  format: number
  style?: string
}

interface LexicalElementNode {
  type: 'root' | 'paragraph' | 'heading' | 'quote' | 'list' | 'listitem' | 'link' | 'autolink'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  listType?: 'bullet' | 'number'
  fields?: {
    url?: string
    newTab?: boolean
    linkType?: 'custom' | 'internal'
  }
  children?: LexicalNode[]
  format?: string
  indent?: number
}

type LexicalNode = LexicalTextNode | LexicalElementNode

interface RichTextProps {
  content: {
    root: {
      children: LexicalNode[]
    }
  } | any
  className?: string
  style?: React.CSSProperties
}

export function RichText({ content, className = '', style }: RichTextProps) {
  if (!content || !content.root || !Array.isArray(content.root.children)) {
    return null
  }

  const renderTextNode = (node: LexicalTextNode, index: number) => {
    let text = node.text
    if (!text) return null

    let element: React.ReactNode = text

    const format = node.format || 0

    const isBold = (format & IS_BOLD) !== 0
    const isItalic = (format & IS_ITALIC) !== 0
    const isUnderline = (format & IS_UNDERLINE) !== 0
    const isStrikethrough = (format & IS_STRIKETHROUGH) !== 0
    const isCode = (format & IS_CODE) !== 0
    const isSubscript = (format & IS_SUBSCRIPT) !== 0
    const isSuperscript = (format & IS_SUPERSCRIPT) !== 0

    if (isBold) element = <strong key={index}>{element}</strong>
    if (isItalic) element = <em key={index}>{element}</em>
    if (isUnderline) element = <u key={index}>{element}</u>
    if (isStrikethrough) element = <span key={index} style={{ textDecoration: 'line-through' }}>{element}</span>
    if (isCode) element = <code key={index}>{element}</code>
    if (isSubscript) element = <sub key={index}>{element}</sub>
    if (isSuperscript) element = <sup key={index}>{element}</sup>

    return <React.Fragment key={index}>{element}</React.Fragment>
  }

  const renderNode = (node: LexicalNode, index: number): React.ReactNode => {
    if (node.type === 'text') {
      return renderTextNode(node as LexicalTextNode, index)
    }

    const elementNode = node as LexicalElementNode
    const children = elementNode.children?.map((child, childIdx) => renderNode(child, childIdx)) || []

    switch (elementNode.type) {
      case 'root':
        return <div key={index}>{children}</div>

      case 'paragraph':
        return (
          <p key={index} style={{ marginBottom: '1.25rem', lineHeight: 1.75 }}>
            {children}
          </p>
        )

      case 'heading': {
        const Tag = elementNode.tag || 'h2'
        const headingStyles: Record<string, React.CSSProperties> = {
          h1: { fontSize: '2.25rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' },
          h2: { fontSize: '1.75rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' },
          h3: { fontSize: '1.5rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.875rem', fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' },
          h4: { fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' },
          h5: { fontSize: '1.125rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' },
          h6: { fontSize: '1rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' },
        }
        return (
          <Tag key={index} style={headingStyles[Tag]}>
            {children}
          </Tag>
        )
      }

      case 'quote':
        return (
          <blockquote
            key={index}
            style={{
              borderLeft: '4px solid var(--color-secondary)',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
              margin: '2rem 0',
              color: 'var(--color-on-surface-variant)',
            }}
          >
            {children}
          </blockquote>
        )

      case 'list': {
        const Tag = elementNode.listType === 'number' ? 'ol' : 'ul'
        const listStyle: React.CSSProperties = {
          paddingLeft: '1.5rem',
          marginBottom: '1.25rem',
          listStyleType: elementNode.listType === 'number' ? 'decimal' : 'disc',
        }
        return (
          <Tag key={index} style={listStyle}>
            {children}
          </Tag>
        )
      }

      case 'listitem':
        return (
          <li key={index} style={{ marginBottom: '0.5rem', lineHeight: 1.75 }}>
            {children}
          </li>
        )

      case 'link':
      case 'autolink': {
        const url = elementNode.fields?.url || ''
        const newTab = elementNode.fields?.newTab
        return (
          <a
            key={index}
            href={url}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            style={{
              color: 'var(--color-secondary)',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            {children}
          </a>
        )
      }

      default:
        return <span key={index}>{children}</span>
    }
  }

  return (
    <div className={`rich-text ${className}`} style={style}>
      {content.root.children.map((node: LexicalNode, index: number) => renderNode(node, index))}
    </div>
  )
}
