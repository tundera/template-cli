import { expect, test } from 'vitest'
import type { Repository } from '../src/types'
import { generateRepositorySummary } from '../src/utils'

const createRepository = (): Repository => {
  const repo: Repository = {
    name: 'antfu/vscode-file-nesting-config',
    description: 'Config of File Nesting for VS Code',
    url: 'https://github.com/antfu/vscode-file-nesting-config',
    createdAt: '2022-03-08T00:47:08Z',
    stargazerCount: 1188,
  }

  return repo
}

test('resolveDependency', async () => {
  expect(generateRepositorySummary(createRepository())).toEqual(`
antfu/vscode-file-nesting-config (https://github.com/antfu/vscode-file-nesting-config)
Config of File Nesting for VS Code
1188 stars
2022-03-08T00:47:08Z
`)
})
