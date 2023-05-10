#!/bin/bash
set -euo pipefail
web-ext lint
web-ext build --overwrite-dest
web-ext sign "--api-key=$(cat ~/secrets/addons_mozilla_key)" "--api-secret=$(cat ~/secrets/addons_mozilla_secret)