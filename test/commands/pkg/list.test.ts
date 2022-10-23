import {expect, test} from '@oclif/test'

import {testRootDir} from '../../../src/definitions'

describe('manifest:list', () => {
  test
  .stdout()
  .command(['manifest:list', '--manifestsDir', testRootDir + '/manifest'])
  .it('runs manifest:list finds all', ctx => {
    expect(ctx.stdout).to.contain('test-manifest\ntest-manifest2')
  })
})
