import { SecretSantaAlgorithm } from "./SecretSantaAlgorithm.ts";

const pairings = SecretSantaAlgorithm.generate([
    "player_1", "player_2", "player_3", "player_4", "player_5", "player_6", "player_7", "player_8", "player_9", "player_10"
]);

console.log(JSON.stringify(pairings, null, 4));