#!/usr/bin/env zsh
set -e

PACKAGES_DIR="$1"
PACKAGE="$2"
SCRIPTS_DIR="$(pwd)"

export ALREADY_INSTALLED_ERROR=50

function is_mac() {
    test "$(uname)" = "Darwin"
}

function is_debian() {
    test -f "/etc/debian_version"
}

function package_manager_check_install() {
    if is_mac; then
        brew ls --versions "$1"
    elif is_debian; then
        apt -qq --installed list apt -qq --installed list "$1" | grep -P '.+'
    else
        echo "OS not supported"
        exit 1
    fi
}

cd "$PACKAGES_DIR/$PACKAGE"

. ./index.sh

for d in $dependencies; do
    pushd "$SCRIPTS_DIR"
    echo "Dependency '$PACKAGES_DIR/$d'"
    ./install.sh "$PACKAGES_DIR" "$d"
    echo ''
    popd
done

check_installed
if [ "$?" != "$ALREADY_INSTALLED_ERROR" ]; then
    echo "Installing '${PACKAGE}'"
    install
else 
    echo "'${PACKAGE}' already installed."
fi

exit 0