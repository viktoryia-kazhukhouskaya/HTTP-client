import * as globalVariables from '../util/globalVariables';
import { randomGenerator } from "../util/randomGenerator";
import { CompleteSessionInitializationBody } from '../API3Methods/completeSessionInitializationRequest';

export const completeSessionInitializationBody: CompleteSessionInitializationBody = {
    correlationId: randomGenerator.getRandomId(32),
    sessionId: globalVariables.sessionId,
    playerId: globalVariables.playerId
};