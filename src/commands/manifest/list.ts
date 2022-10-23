import {Command, Flags} from '@oclif/core'
import {execSync} from 'child_process'
import {homedir} from 'os'

const DEFAULT_MANIFESTS_DIR = `${homedir()}/.dotfiles/manifest`

export default class List extends Command {
  static description = 'List manifests. Pipe to grep if filtering needed'

  static examples = [
    '$ wk manifest:list',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // for testing
    manifestsDir: Flags.string(),
  }

  async run(): Promise<any> {
    const {flags} = await this.parse(List)

    const manifestsDir = flags.manifestsDir || DEFAULT_MANIFESTS_DIR

    try {
      const output = execSync(`ls ${manifestsDir}`)
      this.log(output.toString())
    } catch (error) {
      this.error((error as any).output.toString())
    }
  }
}
