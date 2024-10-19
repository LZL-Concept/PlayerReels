#!/bin/bash

default_node_server_port=3031

# Define variables
node_server_port=$1
if [ -z "$1" ]; then
    node_server_port="$default_node_server_port"
fi

path_to_node_server="./backend/playerreels-node-main"

# Start TypeScript compiler in watch mode
tsc --watch --project "$path_to_node_server/tsconfig.json" &

# Start the Node server with watch mode
node --watch "$path_to_node_server/dist/app.js" "$node_server_port"
