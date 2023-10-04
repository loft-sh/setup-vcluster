import { expect, test } from '@jest/globals'

import { binaryUrl } from '../src/vcluster'

test('binaryUrl(platform: string, architecture: string, version: string)', async () => {
  await expect(binaryUrl('darwin', 'arm64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-darwin-arm64'
  )
  await expect(binaryUrl('darwin', 'amd64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-darwin-amd64'
  )
  await expect(binaryUrl('darwin', 'x64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-darwin-amd64'
  )
  await expect(binaryUrl('darwin', 'amd64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-darwin-amd64'
  )
  await expect(binaryUrl('darwin', 'amd64', 'v5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-darwin-amd64'
  )
  await expect(binaryUrl('linux', 'arm64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-linux-arm64'
  )
  await expect(binaryUrl('linux', 'amd64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-linux-amd64'
  )
  await expect(binaryUrl('linux', 'x64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-linux-amd64'
  )
  await expect(binaryUrl('linux', 'amd64', 'v5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-linux-amd64'
  )
  await expect(binaryUrl('win32', 'amd64', '5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-windows-amd64.exe'
  )
  await expect(binaryUrl('win32', 'amd64', 'v5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-windows-amd64.exe'
  )
  await expect(binaryUrl('win32', 'x64', 'v5.14.4')).resolves.toEqual(
    'https://github.com/loft-sh/vcluster/releases/download/v5.14.4/vcluster-windows-amd64.exe'
  )
  await expect(binaryUrl('darwin', 'amd64', 'latest')).resolves.toMatch(
    /https:\/\/github.com\/loft-sh\/vcluster\/releases\/download\/v\d+\.\d+\.\d+(-.*)?\/vcluster-darwin-amd64/
  )
  await expect(binaryUrl('linux', 'amd64', 'latest')).resolves.toMatch(
    /https:\/\/github.com\/loft-sh\/vcluster\/releases\/download\/v\d+\.\d+\.\d+(-.*)?\/vcluster-linux-amd64/
  )
  await expect(binaryUrl('win32', 'amd64', 'latest')).resolves.toMatch(
    /https:\/\/github.com\/loft-sh\/vcluster\/releases\/download\/v\d+\.\d+\.\d+(-.*)?\/vcluster-windows-amd64/
  )
})
