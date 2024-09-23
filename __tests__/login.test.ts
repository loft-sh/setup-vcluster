import { describe, expect, test } from '@jest/globals'

import { loginToPlatform } from '../src/login'

describe('loginToPlatform(url: string, accessKey: string)', () => {
  test('with empty url', async () => {
    await expect(loginToPlatform('', 'foo', false, false)).rejects.toThrow(
      'No vCluster Platform url provided'
    )
  })

  test('with empty accessKey', async () => {
    await expect(
      loginToPlatform('https://prod.loft.rocks', '', false, false)
    ).rejects.toThrow('No vCluster Platform access key provided')
  })
})
