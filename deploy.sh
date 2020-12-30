#!/usr/bin/env bash

# Add identity to avoid retyping password
ssh-add -K ~/.ssh/id_rsa

# Create project directory on remote if doesnt exist already
ssh bondbrkg@dev.bondroy.com -p21098 'cd ~/dev.bondroy.com && mkdir -p bondroy'

# Sync local to remote
rsync -r --progress -e 'ssh -p 21098' ./dist/ bondbrkg@dev.bondroy.com:~/dev.bondroy.com/bondroy/
