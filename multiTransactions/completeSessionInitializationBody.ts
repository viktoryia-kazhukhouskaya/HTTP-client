import * as variables from "../util/variables";
import { generateString } from "../util/randomGenerator";
import { CompleteSessionInitializationBody } from "../API3Methods/completeSessionInitializationRequest";

export const completeSessionInitializationBody: CompleteSessionInitializationBody = {
    correlationId: generateString(32),
    sessionId: variables.sessionId,
    playerId: variables.playerId
};