#!/usr/bin/env bash
set -e
if [ -d "build" ]; then cp build/index.html build/404.html; fi
