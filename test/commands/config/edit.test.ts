import {expect, test} from '@oclif/test'
import {stub} from 'sinon'
import editor from '../../../src/editor'

describe('config:edit', () => {
  const openEditorStub = stub(editor, 'openEditor')
  test
  .stdout()
  .command(['config:edit'])
  .it('runs config:edit', () => {
    expect(openEditorStub.calledOnce).to.be.true
  })
})
