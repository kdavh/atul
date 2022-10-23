atul
=================

A workstation setup tool

# Actual intended use

This package is not published to npm.

Install node 15/npm somehow, which may or may not be superceded by install commands when running `atul`.
```
# https://brew.sh/
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

eval "$(/opt/homebrew/bin/brew shellenv)"

# for Mac M1
softwareupdate --install-rosetta --agree-to-license

brew install nvm

mkdir ~/.nvm

export NVM_DIR="$HOME/.nvm"
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh" # This loads nvm

nvm install 15

nvm use 15
```

make `atul` available on your system
```
git clone https://github.com/kdavh/workstation
cd workstation
npm install
npm run build
npm link
```

download some dotfiles to work with
```
git clone git@github.com:kdavh/dotfiles.git ~/.dotfiles
```

Install things
```
atul manifest

<!-- toc -->
* [Actual intended use](#actual-intended-use)
* [https://brew.sh/](#httpsbrewsh)
* [for Mac M1](#for-mac-m1)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g atul
$ atul COMMAND
running command...
$ atul (--version)
atul/0.0.1 darwin-x64 node-v15.14.0
$ atul --help [COMMAND]
USAGE
  $ atul COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`atul config commit`](#atul-config-commit)
* [`atul config edit`](#atul-config-edit)
* [`atul help [COMMAND]`](#atul-help-command)
* [`atul manifest install [MANIFEST]`](#atul-manifest-install-manifest)
* [`atul manifest list`](#atul-manifest-list)
* [`atul pkg install [PACKAGE]`](#atul-pkg-install-package)
* [`atul pkg list`](#atul-pkg-list)
* [`atul plugins`](#atul-plugins)
* [`atul plugins:install PLUGIN...`](#atul-pluginsinstall-plugin)
* [`atul plugins:inspect PLUGIN...`](#atul-pluginsinspect-plugin)
* [`atul plugins:install PLUGIN...`](#atul-pluginsinstall-plugin-1)
* [`atul plugins:link PLUGIN`](#atul-pluginslink-plugin)
* [`atul plugins:uninstall PLUGIN...`](#atul-pluginsuninstall-plugin)
* [`atul plugins:uninstall PLUGIN...`](#atul-pluginsuninstall-plugin-1)
* [`atul plugins:uninstall PLUGIN...`](#atul-pluginsuninstall-plugin-2)
* [`atul plugins update`](#atul-plugins-update)

## `atul config commit`

Updates package_definitions, manifests, and workstation-setup repo

```
USAGE
  $ atul config commit [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Updates package_definitions, manifests, and workstation-setup repo

EXAMPLES
  $ wk config commit
```

## `atul config edit`

Open workspace configs in your favorite editor

```
USAGE
  $ atul config edit [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Open workspace configs in your favorite editor

EXAMPLES
  $ wk config edit
```

## `atul help [COMMAND]`

Display help for atul.

```
USAGE
  $ atul help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for atul.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `atul manifest install [MANIFEST]`

Install a manifest (set of packages).

```
USAGE
  $ atul manifest install [MANIFEST] [-h] [--manifestsDir <value>]

FLAGS
  -h, --help              Show CLI help.
  --manifestsDir=<value>

DESCRIPTION
  Install a manifest (set of packages).

EXAMPLES
  $ wk manifest:install work
```

## `atul manifest list`

List manifests. Pipe to grep if filtering needed

```
USAGE
  $ atul manifest list [-h] [--manifestsDir <value>]

FLAGS
  -h, --help              Show CLI help.
  --manifestsDir=<value>

DESCRIPTION
  List manifests. Pipe to grep if filtering needed

EXAMPLES
  $ wk manifest:list
```

## `atul pkg install [PACKAGE]`

Install a package.

```
USAGE
  $ atul pkg install [PACKAGE] [-h] [--packagesDir <value>]

FLAGS
  -h, --help             Show CLI help.
  --packagesDir=<value>

DESCRIPTION
  Install a package.

EXAMPLES
  $ wk pkg:install docker
```

## `atul pkg list`

List packages. Pipe to grep if filtering needed

```
USAGE
  $ atul pkg list [-h] [--packagesDir <value>]

FLAGS
  -h, --help             Show CLI help.
  --packagesDir=<value>

DESCRIPTION
  List packages. Pipe to grep if filtering needed

EXAMPLES
  $ wk pkg:list
```

## `atul plugins`

List installed plugins.

```
USAGE
  $ atul plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ atul plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

## `atul plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ atul plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ atul plugins add

EXAMPLES
  $ atul plugins:install myplugin 

  $ atul plugins:install https://github.com/someuser/someplugin

  $ atul plugins:install someuser/someplugin
```

## `atul plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ atul plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ atul plugins:inspect myplugin
```

## `atul plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ atul plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ atul plugins add

EXAMPLES
  $ atul plugins:install myplugin 

  $ atul plugins:install https://github.com/someuser/someplugin

  $ atul plugins:install someuser/someplugin
```

## `atul plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ atul plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ atul plugins:link myplugin
```

## `atul plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ atul plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ atul plugins unlink
  $ atul plugins remove
```

## `atul plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ atul plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ atul plugins unlink
  $ atul plugins remove
```

## `atul plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ atul plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ atul plugins unlink
  $ atul plugins remove
```

## `atul plugins update`

Update installed plugins.

```
USAGE
  $ atul plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
