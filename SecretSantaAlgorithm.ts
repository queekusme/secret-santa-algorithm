interface ISecretSantaPossiblePairing<T>
{
    player: T;
    possibles: T[];
}

export type Pairing<T> = [T, T];

export interface SecretSantaAlgorithmOptions
{
    /**
     * Prevent a player's pairing from being paired back to itself (Default: false)
     *
     * e.g. A <=> B
     */
    noCouplePairings: boolean;
}

export class SecretSantaAlgorithm
{
    /**
     * Generate the Secret Santa Pairings
     *
     * @param players - Players to generate pairings for
     * @returns list of pairings, one player with another
     */
    public static generate<T>(players: T[], options?: SecretSantaAlgorithmOptions): Pairing<T>[]
    {
        const possibles = players.map((player: T) => ({ player, possibles: players.filter((possible: T) => possible !== player) }));

        for(let i = 0; i < possibles.length; i++)
        {
            const from: T = possibles[i].player;
            const to: T = possibles[i].possibles[Math.floor(Math.random() * possibles[i].possibles.length)];
            const others: ISecretSantaPossiblePairing<T>[]
                = possibles.filter((otherPossible: ISecretSantaPossiblePairing<T>) => otherPossible.player !== from && otherPossible.player !== to);

            const isValidRemoval: boolean = others.find(
                (other: ISecretSantaPossiblePairing<T>) => other.possibles.filter((otherPossible: T) => otherPossible !== to).length === 0
            ) === undefined;

            if(isValidRemoval)
            {
                const toPossiblePairings: ISecretSantaPossiblePairing<T> | undefined
                    = possibles.find((possible: ISecretSantaPossiblePairing<T>) => possible.player === to);

                if(toPossiblePairings !== undefined && options?.noCouplePairings === true)
                    toPossiblePairings.possibles = toPossiblePairings.possibles.filter((possible: T) => possible !== from)

                others.forEach((other: ISecretSantaPossiblePairing<T>) => other.possibles = other.possibles.filter((otherPossible: T) => otherPossible !== to));
            }
            else
                i--; // Retry Link
        }

        return possibles.map((possible: ISecretSantaPossiblePairing<T>): Pairing<T> => [possible.player, possible.possibles[0]]);
    }
}