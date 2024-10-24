default_node_server_port=3031
default_ui_port=5175

# Define variables
node_server_port=$1
if [ -z "$1" ]; then
    node_server_port="$default_node_server_port"
fi

# Define variables
ui_port=$2
if [ -z "$2" ]; then
    ui_port="$default_ui_port"
fi

path_to_frontend="./ui"
path_back_from_frontend="../"

cd "$path_to_frontend" || { echo "Failed to change directory to $path_to_frontend"; exit 1; }

# dynamically set frontend's env
rm -rf .env
echo "BACKEND_PORT=$node_server_port" > .env

npm run dev &  # Run frontend in the background
cd - || exit 1  # Go back to the previous directory, exit if failed