rm -rf dist
# build
pnpm i
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm start in $time"

pnpm --filter main build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

# vite

pnpm --filter vite-es-vue2 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite-es-vue3 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite-react build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite-vue2 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite-vue3 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

# webpack

pnpm --filter webpack-vue2 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter webpack-vue3 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"