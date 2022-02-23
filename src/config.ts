import path from 'path'
import fs from 'fs'

import type { Config } from 'types'

export const presetConfig: Required<Config> = {
  output: 'output.txt',
}

export function resolveConfig(config: Config) {
  const userConfig = loadUserConfig()
  return {
    ...presetConfig,
    ...config,
    ...userConfig,
  }
}

function loadUserConfig(configRoot: string = process.cwd()) {
  let resolvedPath: string | undefined

  const jsconfigFile = path.resolve(configRoot, 'template.config.js')
  if (fs.existsSync(jsconfigFile)) {
    resolvedPath = jsconfigFile
  }

  if (!resolvedPath) {
    console.log('No config file found.')
    return null
  }

  try {
    const userConfig: Config | undefined = require(resolvedPath)
    console.log('User config loaded ')

    return userConfig
  } catch (e) {
    throw e
  }
}
