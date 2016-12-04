#! /usr/bin/env bash

declare -r __GO_CORE="${0%/*}/scripts/go-script-bash/go-core.bash"

if [[ ! -f "$__GO_CORE" ]]; then
  git submodule update --init
fi

. "$__GO_CORE" "scripts"
. "$_GO_USE_MODULES" 'log'

export PATH="node_modules/.bin:$PATH"

if [[ ! -d "$_GO_ROOTDIR/node_modules" ]]; then
  @go.setup_project 'setup'

  if [[ "$#" -ne '0' ]]; then
    @go "$@"
  fi
else
  @go "$@"
fi
