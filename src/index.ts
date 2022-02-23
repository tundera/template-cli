import cac from 'cac'
import { promises as fs } from 'fs'

import { presetConfig, resolveConfig } from 'src/config'
import { version } from 'package.json'

// const { TEMPLATE_TOKEN: token, TEMPLATE_LOGIN: login } = process.env

// if (!token || !login) {
//   console.error('Envoronment variable TEMPLATE_TOKEN & TEMPLATE_LOGIN must be proved')
//   process.exit(1)
// }

const cli = cac('template-cli')

cli
  .command('')
  .usage('[...options]')
  .option('-o, --output [output]', 'Output filename', {
    default: presetConfig.output,
  })
  .action(async (configFromCLI) => {
    console.log('Generating output...')

    const { output } = resolveConfig(configFromCLI)

    await fs.writeFile(output, 'output data', 'utf8')
  })

cli.version(version).help().parse()
