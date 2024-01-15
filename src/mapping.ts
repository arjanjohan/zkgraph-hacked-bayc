//@ts-ignore
import { Bytes, Event, Block, ByteArray } from "@hyperoracle/zkgraph-lib";

var bayc_address = Bytes.fromHexString(
  "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
);
var transfer_event = Bytes.fromHexString(
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
);

export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  let bayc_holders: ByteArray = ByteArray.empty();
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].address == bayc_address && events[i].esig == transfer_event) {
      bayc_holders = bayc_holders.concat(events[i].topic2);
    }
  }

  let state = Bytes.fromByteArray(bayc_holders);

  return state;
}