import {Command, Flags} from '@oclif/core'
import {homedir} from 'os'

import {install} from '../../pkg'

const DEFAULT_PACKAGES_DIR = `${homedir()}/.dotfiles/pkg`

export default class Install extends Command {
  static description = 'Install a package.'

  static examples = [
    '$ wk pkg:install docker',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // for testing
    packagesDir: Flags.string(),
  }

  static args = [
    {
      name: 'package',
    },
  ]

  async run(): Promise<any> {
    const {args, flags} = await this.parse(Install)

    const packagesDir = flags.packagesDir || DEFAULT_PACKAGES_DIR

    try {
      this.log(install(args.package, packagesDir))
    } catch (error) {
      this.log(`When installing '${args.package}':`)
      this.error(error as any)
    }
  }
}
