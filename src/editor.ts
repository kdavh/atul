const execa = require('execa')
import {srcRootDir} from './definitions'

function openEditor() {
  const isTerminalEditor = false
  const stdio = isTerminalEditor ? 'inherit' : 'ignore'

  const subprocess = execa('code', ['-n', srcRootDir], {
    detached: true,
    stdio,
  })

  // Fallback
  subprocess.on('error', () => {
    open(srcRootDir)
  })

  if (isTerminalEditor) {
    subprocess.on('exit', process.exit)
  } else {
    subprocess.unref()
  }
}

export default {
  openEditor,
}
