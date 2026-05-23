#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const DOCS = path.join(ROOT, 'docs')

const IN_PROGRESS_KEYWORDS = [
  'WIP',
  'TODO',
  'TO-DO',
  'draft',
  'em andamento',
  'em progresso',
  'a fazer',
  'pendente'
]

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const ent of entries) {
    const res = path.join(dir, ent.name)
    if (ent.isDirectory()) files.push(...walk(res))
    else files.push(res)
  }
  return files
}

function isMarkdown(file) {
  return file.endsWith('.md') || file.endsWith('.mdx')
}

function hasInProgress(content) {
  const lower = content.toLowerCase()
  return IN_PROGRESS_KEYWORDS.some(k => lower.includes(k.toLowerCase()))
}

function proposeRename(file) {
  const dir = path.dirname(file)
  const base = path.basename(file)
  if (base.startsWith('done_') || base.includes('_done')) return null
  const ext = path.extname(base)
  const name = base.slice(0, -ext.length)
  const newName = `${name}_done${ext}`
  return path.join(dir, newName)
}

function main() {
  if (!fs.existsSync(DOCS)) {
    console.error('No docs directory found at', DOCS)
    process.exit(1)
  }

  const all = walk(DOCS).filter(isMarkdown)
  const candidates = []

  for (const f of all) {
    const content = fs.readFileSync(f, 'utf8')
    if (hasInProgress(content)) continue
    const rename = proposeRename(f)
    if (rename) candidates.push({ from: f, to: rename })
  }

  if (candidates.length === 0) {
    console.log('No candidate files found to mark as done.')
    return
  }

  console.log('Proposed doc files to mark as done (dry-run):')
  for (const c of candidates) console.log('-', path.relative(ROOT, c.from), '→', path.relative(ROOT, c.to))

  if (process.argv.includes('--apply')) {
    for (const c of candidates) {
      fs.renameSync(c.from, c.to)
      console.log('Renamed', path.relative(ROOT, c.from), '→', path.relative(ROOT, c.to))
    }
    console.log(`Applied ${candidates.length} renames.`)
  } else {
    console.log('\nRun with `--apply` to perform the renames.')
  }
}

main()
