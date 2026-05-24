import React from 'react'

type Props = {
  value?: string
  onChange?: (value: string, ev?: any) => void
  [key: string]: any
}

const CodeEditor: React.FC<Props> = ({ value, onChange, ...rest }) => {
  return (
    <textarea
      {...rest}
      value={value ?? ''}
      onChange={(e) => onChange?.(e.target.value, e)}
      style={{ width: '100%', minHeight: 120, fontFamily: 'monospace' }}
    />
  )
}

export default CodeEditor
