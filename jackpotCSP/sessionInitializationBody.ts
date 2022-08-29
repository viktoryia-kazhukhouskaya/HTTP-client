import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { SessionInitializationBody } from '../API3Methods/sessionInitializationRequest';

export const sessionInitializationBody: SessionInitializationBody = {
    correlationId: generateString(32),
    sessionId: variables.sessionId,
    casinoId: variables.casinoId,
    licenseeSessionId: variables.licenseeSessionId,
    licenseePlayerId: variables.licenseePlayerId,
    currency: variables.currency,
    channel: {
        type: variables.channelType,
        wrapped: variables.channelWrapped,
        os: variables.channelOs
    }
};