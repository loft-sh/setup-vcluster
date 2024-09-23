import { exec } from '@actions/exec'

export async function loginToPlatform(
  url: string,
  accessKey: string,
  insecure: boolean,
  dockerLogin: boolean
): Promise<void> {
  if (url === '') {
    throw new Error('No vCluster Platform url provided')
  }

  if (accessKey === '') {
    throw new Error('No vCluster Platform access key provided')
  }

  await exec(
    `vcluster platform login ${url} --access-key ${accessKey} --docker-login=${dockerLogin} --insecure=${insecure}`
  )
}
