# Secret Santa Algorithm

Inspired by [https://www.tjmahr.com/secret-santa-graph-traversal/](https://www.tjmahr.com/secret-santa-graph-traversal/)

Allows the creation of Secret Santa Style pairings of objects.

## Example

```typescript
import { SecretSantaAlgorithm } from "https://deno.land/x/secret_santa@v1.0.0/mod.ts";

const pairings = SecretSantaAlgorithm.generate([
    "player_1", "player_2", "player_3", "player_4", "player_5", "player_6", "player_7", "player_8", "player_9", "player_10"
]);

console.log(JSON.stringify(pairings, null, 4));
```

Produces

```json
[
    [ "player_1", "player_3" ],
    [ "player_2", "player_10" ],
    [ "player_3", "player_8" ],
    [ "player_4", "player_5" ],
    [ "player_5", "player_2" ],
    [ "player_6", "player_4" ],
    [ "player_7", "player_6" ],
    [ "player_8", "player_9" ],
    [ "player_9", "player_7" ],
    [ "player_10", "player_1" ]
]
```