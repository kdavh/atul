import {Command, Flags} from '@oclif/core'
import {execSync} from 'child_process'
import {homedir} from 'os'

import {install} from '../../pkg'

const DEFAULT_MANIFESTS_DIR = `${homedir()}/.dotfiles/manifest`

export default class Install extends Command {
  static description = 'Install a manifest (set of packages).'

  static examples = [
    '$ wk manifest:install work',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // for testing
    manifestsDir: Flags.string(),
  }

  static args = [
    {
      name: 'manifest',
    },
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Install)

    const manifestsDir = flags.manifestsDir || DEFAULT_MANIFESTS_DIR
    // assume packages are always in sibling dir
    const packagesDir = manifestsDir + '/../pkg'

    const output = execSync(`cat ${manifestsDir}/${args.manifest}`).toString()

    for (const p of output.trim().split('\n')) {
      if (!p) {
        this.log('Invalid empty manifest line.')
      }

      try {
        const output = install(p, packagesDir)
        this.log(output)
      } catch (error) {
        this.error(error as any)
      }
    }
  }
}
