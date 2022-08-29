import { randomGenerator } from "./randomGenerator";

//Randomly generated values
export const sessionId: string = randomGenerator.getRandomId(32);
export const licenseeSessionId: string = randomGenerator.getRandomId(32);
export const licenseePlayerId: string = randomGenerator.getRandomNumericId(6);
export const playerGameId: string = randomGenerator.getRandomId(24);
export const gameRoundId: string = randomGenerator.getRandomId(32);
export const txId: string = randomGenerator.getRandomNumericId(18);
export const txId1: string = randomGenerator.getRandomNumericId(18);
export const betId: string = randomGenerator.getRandomId(32);
export const betId1: string = randomGenerator.getRandomId(32);
export const jackpotId: string = "nwa6zu5zlncqcorp";
export const jackpotTopPotId: string = "inttestp6k0go9zy";
export const reservePostId: string = "inttestn67mksw5y";

//Default values
export const casinoId: string = "testrbowevostdg1";
export const balanceId: string = "combined";
export const playerId: string = "mk4743pzmjuaadei";
export const channelType: string = "NotMobile";
export const channelWrapped: boolean = false;
export const channelOs: string = "Other";
export const settlementType: string = "GameFinished";
export const rbowDomain: string = "10.10.88.52";
export const rbowPort: string = "9092";
export const decimal: number = 2;
export let timestamp: string = new Date().toJSON();
export const currency = 'EUR';
export const virtualTableId: string|null = null;

//Jackpot Top Level values
export const tableIdForJackpot: string = "CSPTable00000001";
export const gameTypeForJackpot: string = "csp";
export const betAmountForJackpot: number = 5;
export const betAmountForJackpot1: number = 1;
export const betAmountForJackpot2: number = 10;
export const betCodeForJackpot: string = "CSPBet0000000001";
export const betCodeForJackpot1: string = "CSPBet0000000004";
export const betCodeForJackpot2: string = "CSPBet0000000002";
export const payoffAmountForJackpot: number = 63726567.47;
export const payoffAmountForJackpot1: number = 10
export const jackpotIdAmount: number = 1.00;
export const topAmount: number = 0.45;
export const topAmountInEur: number = 0.45;
export const reserveAmount: number = 0.05;
export const reserveAmountInEur: number = 0.05;
export const fixedAmount: number = 0.5;
export const fixedAmountInEur: number = 0.5;

//Preliminary settlement values
export const tableId: string = "HoldemTable00001";
export const gameType: string = "holdem";
export const bet: number = 3.402011;
export const betCode: string = "HoldemBet0000001";
export const betCode1: string = "HoldemBet0000003";
export const payoff: number = 8.402011;



