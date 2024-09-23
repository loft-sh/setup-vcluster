import * as core from '@actions/core'
import * as io from '@actions/io'
import { homedir } from 'os'
import path from 'path'

async function run(): Promise<void> {
  try {
    core.startGroup('Remove vCluster Configuration')
    const homeDir = homedir()
    await io.rmRF(path.join(homeDir, '.vcluster'))
  } catch (error: unknown) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  } finally {
    core.endGroup()
  }
}

run()
