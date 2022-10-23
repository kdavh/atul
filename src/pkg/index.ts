import {execSync} from 'child_process'

import {srcRootDir} from '../definitions'

const PACKAGE_SCRIPTS_DIR = srcRootDir + '/pkg'

export function install(packageName: string, packagesDir: string): string {
  try {
    // TODO: output line-by-line and accept user input.  some installs have user input or prompts that user needs to read then take action on.
    // example, rust package doesn't install
    const output = execSync(`./install.sh ${packagesDir} ${packageName}`, {cwd: PACKAGE_SCRIPTS_DIR})
    return output.toString()
  } catch (error) {
    throw (error as any).output.toString()
  }
}
