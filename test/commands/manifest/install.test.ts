import {expect, test} from '@oclif/test'

import {testRootDir} from '../../../src/definitions'

describe('manifest:install', () => {
  test
  .stdout()
  .command(['manifest:install', '--manifestsDir', testRootDir + '/manifest', 'test-manifest'])
  .it('runs manifest:install test-manifest', ctx => {
    expect(ctx.stdout).to.contain('test docker install check')
    expect(ctx.stdout).to.contain('test zsh install check')
  })
})
