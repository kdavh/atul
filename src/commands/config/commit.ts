import {Command, Flags} from '@oclif/core'
// import * as Git from 'nodegit'

export default class ConfigCommit extends Command {
  static description = 'Updates package_definitions, manifests, and workstation-setup repo'

  static examples = [
    '$ wk config commit',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
  }

  // https://github.com/nodegit/nodegit
  async run(): Promise<any> {
    this.log('To be implemented')
    // Git.Repository.open(...)
  }
}
