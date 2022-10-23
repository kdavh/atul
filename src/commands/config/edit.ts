import {Command, Flags} from '@oclif/core'
import editor from '../../editor'

export default class Edit extends Command {
  static description = 'Open workspace configs in your favorite editor'

  static examples = [
    '$ wk config edit',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
  }

  // static args = [{name: 'file'}]

  async run(): Promise<any> {
    // const {args, flags} = await this.parse(Edit)

    // const name = flags.name ?? 'world'
    // this.log('edit wip')
    editor.openEditor()
    // exec(`code -n "${workspace_dir}"`)
    // if (args.file) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
