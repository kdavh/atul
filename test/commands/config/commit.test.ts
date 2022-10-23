import {expect, test} from '@oclif/test'

describe('config:commit', () => {
  test
  .stdout()
  .command(['config:commit'])
  .it('runs config:commit', ctx => {
    expect(ctx.stdout).to.contain('To be implemented')
  })
})
