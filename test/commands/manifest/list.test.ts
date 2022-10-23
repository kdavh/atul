import {expect, test} from '@oclif/test'

import {testRootDir} from '../../../src/definitions'

describe('pkg:list', () => {
  test
  .stdout()
  .command(['pkg:list', '--packagesDir', testRootDir + '/pkg'])
  .it('runs pkg:list finds all', ctx => {
    expect(ctx.stdout).to.contain('docker\nshell\nzsh')
  })
})
