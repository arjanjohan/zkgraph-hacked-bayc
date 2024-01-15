# Test script for zkGraph

# Update `zkgraph.config.ts` with your own parameters first!
# Then run `sh test.sh`

# npm run compile-local &&
# npm run exec-local -- 5087832 &&
# npm run prove-local -- --inputgen <blockId> <expectedStateStr> &&
# npm run prove-local -- --test <blockId> <expectedStateStr>

npm run compile &&
npm run exec -- 19003210 &&
npm run prove -- --inputgen 19003210 '<expectedStateStr>' &&
npm run prove -- --test 19003210 <expectedStateStr>