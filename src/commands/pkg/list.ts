import {Command, Flags} from '@oclif/core'
import {execSync} from 'child_process'
import {homedir} from 'os'

const DEFAULT_PACKAGES_DIR = `${homedir()}/.dotfiles/pkg`

export default class List extends Command {
  static description = 'List packages. Pipe to grep if filtering needed'

  static examples = [
    '$ wk pkg:list',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // for testing
    packagesDir: Flags.string(),
  }

  async run(): Promise<any> {
    const {flags} = await this.parse(List)

    const packagesDir = flags.packagesDir || DEFAULT_PACKAGES_DIR

    try {
      const output = execSync(`ls ${packagesDir}`)
      this.log(output.toString())
    } catch (error) {
      this.error((error as any).output.toString())
    }
  }
}
