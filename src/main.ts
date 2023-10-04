import * as core from '@actions/core'
import os from 'os'
import { installVCluster } from './vcluster'
import { installKubectl } from './kubectl'

export async function run(): Promise<void> {
  const runnerPlatform: string = os.platform()
  const architecture: string = os.arch()

  try {
    core.startGroup('Install vcluster CLI')
    const version: string = core.getInput('version') || 'latest'
    await installVCluster(runnerPlatform, architecture, version)
  } catch (error: unknown) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  } finally {
    core.endGroup()
  }

  const kubectlInstallEnabled = core.getBooleanInput('kubectl-install')
  if (kubectlInstallEnabled) {
    try {
      core.startGroup('Install kubectl')
      const kubectlVersion = core.getInput('kubectl-version') || 'latest'
      await installKubectl(runnerPlatform, architecture, kubectlVersion)
    } catch (error: unknown) {
      if (error instanceof Error) {
        core.setFailed(error.message)
      }
    } finally {
      core.endGroup()
    }
  }
}
