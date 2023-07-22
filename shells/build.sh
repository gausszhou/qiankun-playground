rm -rf dist
# build
pnpm i
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm start in $time"

pnpm --filter main build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite_react build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite_vue2 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter vite_vue3 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"

pnpm --filter webpack_vue2 build
time=$(date "+%Y-%m-%d %H:%M:%S")
echo "pnpm success in $time"