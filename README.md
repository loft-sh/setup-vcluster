# setup-vcluster

[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)

This is a GitHub Action to install the vcluster CLI. Windows, Mac, and Linux
runners are supported.

## Usage

This action will install the vCluster CLI for use in job steps. The default
behavior installs the latest release from
[vCluster Releases](https://github.com/loft-sh/vcluster/releases). Subsequent
steps may run any `vcluster` CLI command.

To avoid leaking your Loft access key onto GitHub runners, this action will
remove the `~/.vcluster` directory at the end of the job.

### Example: Use a specific vCluster version

```yaml
name: loft version
on:
  push:
    branches:
      - 'main'
jobs:
  whoami:
    runs-on: ubuntu-latest
    steps:
      - name: Install vCluster CLI
        uses: loft-sh/setup-vcluster@main
        with:
          version: v0.16.0
          kubectl-install: false
      - name: Show Version
        run: vcluster --version
```

## Install `kubectl`

Options are provided to install `kubectl`. Many GitHub runners now come with
`kubectl` pre-installed, however this allows for controlling the version of
`kubectl` if desired.

### Example: Install the latest vCluster CLI, and install a specific kubectl version

```yaml
name: vcluster version
on:
  push:
    branches:
      - 'main'
jobs:
  whoami:
    runs-on: ubuntu-latest
    steps:
      - name: Install vCluster CLI
        uses: loft-sh/setup-vcluster@main
        with:
          kubectl-install: true
          kubectl-version: v1.28.2
      - name: Show vCluster Version
        run: vcluster --version
      - name: Show kubectl Version
        run: kubectl --version --client
```

### Example: Use a specific vCluster version and login to the platform

```yaml
name: vcluster version
on:
  push:
    branches:
      - 'main'
jobs:
  whoami:
    runs-on: ubuntu-latest
    steps:
      - name: Install vCluster CLI
        uses: loft-sh/setup-vcluster@main
        with:
          url: ${{ secrets.VCLUSTER_PLATFORM_URL }}
          access-key: ${{ secrets.VCLUSTER_PLATFORM_ACCESS_KEY }}
      - name: Show Version
        run: vcluster --version
      - name: Show current user
        run: vcluster platform get current-user
```

## Customizing

### inputs

The following inputs can be used as `step.with` keys.

<!-- markdownlint-disable MD013 -->

| Name              | Type    | Description                                                                                                                                                                                              |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`         | String  | The version of vCluster CLI to install. See [vCluster Releases](https://github.com/loft-sh/vcluster/releases) for available versions. Defaults to latest.                                                |
| `url`             | String  | The URL used to access your vCluster Platform instance.                                                                                                                                                  |
| `access-key`      | String  | A vCluster Platform access key used for logging in through the CLI. See [Access Keys](https://vcluster.com/docs/platform/users/advanced/access-keys) for help generating a vCluster Platform access key. |
| `insecure`        | Boolean | Allow login into an insecure vCluster Platform instance                                                                                                                                                  |
| `docker-login`    | Boolean | If true, will log into the Docker image registries the user has image pull secrets for (default true)                                                                                                    |
| `kubectl-install` | Boolean | Install kubectl if not already installed. Defaults to true.                                                                                                                                              |
| `kubectl-version` | String  | The version of the kubectl to install. Defaults to latest stable version.                                                                                                                                |

<!-- markdownlint-enable MD013 -->
