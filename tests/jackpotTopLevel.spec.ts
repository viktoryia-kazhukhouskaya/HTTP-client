import { playerFinalSettlement } from '../API3Methods/playerFinalSettlementRequest';
import { sessionInitialization } from '../API3Methods/sessionInitializationRequest';
import { сompleteSessionInitialization } from '../API3Methods/completeSessionInitializationRequest';
import { getBalance } from "../API3Methods/getBalanceRequest";
import { playerWithdrawal } from "../API3Methods/playerWithdrawalRequest";
import { completeSessionInitializationBody } from '../jackpotCSP/completeSessionInitializationBody';
import { getBalanceBody } from "../jackpotCSP/getBalanceBody";
import { getBalanceForTableBody } from "../jackpotCSP/getBalanceForTableBody";
import { playerFinalSettlementBody } from "../jackpotCSP/playerFinalSettlementBody";
import { playerWithdrawalBody } from "../jackpotCSP/playerWithdrawalBody";
import { playerWithdrawalBody2 } from "../jackpotCSP/playerWithdrawalBody2";
import { sessionInitializationBody } from "../jackpotCSP/sessionInitializationBody";
import { betAmountForJackpot, betAmountForJackpot1, betAmountForJackpot2, decimal, payoffAmountForJackpot, payoffAmountForJackpot1 } from "../util/variables";
import { statusCodeOk, statusCodeCreated, statusCodeAccepted } from "../util/expectedStatusCodes";
import { errorValue } from "../util/expectedTextValue";

let initialBalance: number;
let currentBalance: number;
let previousBalance: number;
let expectedBalance: number;
let sumOfTwoBets: number;

describe("Jackpot CSP - top level scenario", () => {
    test("Start session initialization", async () => {
        const response = await sessionInitialization(sessionInitializationBody);
        expect(response.status).toEqual(statusCodeOk);
        expect(response.statusText).not.toEqual(errorValue);
        console.log(`start_session_initialization: ${response.config.data}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Complete session initialization", async () => {
        const response = await сompleteSessionInitialization(completeSessionInitializationBody);
        expect(response.status).toEqual(statusCodeCreated);
        expect(response.statusText).not.toEqual(errorValue);
        console.log(`complete_session_initialization: ${response.config.data}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Get balance", async () => {
        const response = await getBalance(getBalanceBody);
        initialBalance = response.data.balances[0].amount;
        currentBalance = response.data.balances[0].amount;
        expect(initialBalance).toBe(currentBalance);
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
    test("Get balance for table", async () => {
        const response = await getBalance(getBalanceForTableBody);
        currentBalance = response.data.balances[0].amount;
        expect(initialBalance).toBe(currentBalance);
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance_for_table: ${initialBalance}`);
        console.log(`current balance_for_table: ${currentBalance}`);
        console.log(`get_balance_request_for_table: ${response.config.data}`);
        console.log(`get_balance_request_for_table: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 1", async () => {
        const response = await playerWithdrawal(playerWithdrawalBody);
        currentBalance = response.data.balances[0].amount;
        sumOfTwoBets = betAmountForJackpot + betAmountForJackpot1;
        previousBalance = currentBalance + sumOfTwoBets;
        expectedBalance = previousBalance - sumOfTwoBets;
        expect(currentBalance.toFixed(decimal).toString()).toBe(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`sum_of_two_bets: ${betAmountForJackpot + betAmountForJackpot1}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 2", async () => {
        const response = await playerWithdrawal(playerWithdrawalBody2);
        currentBalance = response.data.balances[0].amount;
        previousBalance = currentBalance + betAmountForJackpot2;
        expectedBalance = previousBalance - betAmountForJackpot2;
        expect(currentBalance.toFixed(decimal)).toBe((expectedBalance).toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`bet_amount: ${betAmountForJackpot2}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Final settlement", async () => {
        const response = await playerFinalSettlement(playerFinalSettlementBody);
        expect(response.status).toEqual(statusCodeAccepted);
        expect(response.statusText).not.toContain(errorValue);
        console.log(`payoff1: ${payoffAmountForJackpot + payoffAmountForJackpot1}`);
        console.log(`payoff2: ${payoffAmountForJackpot + payoffAmountForJackpot1*2}`);
        console.log(`final_settlement_request: ${response.config.data}`);
    });
    test("Get final balance", async () => {
        const response = await getBalance(getBalanceBody);
        currentBalance = response.data.balances[0].amount;
        expectedBalance = initialBalance - sumOfTwoBets - betAmountForJackpot2 + payoffAmountForJackpot + payoffAmountForJackpot1*2;
        expect(currentBalance.toFixed(decimal).toString()).toBe(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
});