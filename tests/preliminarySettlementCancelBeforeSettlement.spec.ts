import { getBalance } from "../API3Methods/getBalanceRequest";
import { playerWithdrawal } from "../API3Methods/playerWithdrawalRequest";
import { playerPreliminarySettlement } from "../API3Methods/playerPreliminarySettlementRequest";
import { playerFinalSettlement } from "../API3Methods/playerFinalSettlementRequest";
import { sessionInitialization } from "../API3Methods/sessionInitializationRequest";
import { сompleteSessionInitialization } from "../API3Methods/completeSessionInitializationRequest";
import { completeSessionInitializationBody } from "../multiTransactions/completeSessionInitializationBody";
import { getBalanceBody } from "../multiTransactions/getBalanceBody";
import { getBalanceForTableBody } from "../multiTransactions/getBalanceForTableBody";
import { playerFinalSettlementBody } from "../multiTransactions/playerFinalSettlementBody";
import { playerPreliminarySettlementBody } from "../multiTransactions/playerPreliminarySettlementBody";
import { playerWithdrawalBody } from "../multiTransactions/playerWithdrawalBody";
import { playerWithdrawalBody2 } from "../multiTransactions/playerWithdrawalBody2";
import { sessionInitializationBody } from "../multiTransactions/sessionInitializationBody";
import { bet, decimal, payoff } from "../util/variables";
import { statusCodeOk, statusCodeCreated, statusCodeAccepted } from "../util/expectedStatusCodes";

let initialBalance: number;
let currentBalance: number;
let previousBalance: number;
let expectedBalance: number;
let response: any;

describe("Preliminary settlement - cancel before the settlement scenario", () => {
    test("Start session initialization", async () => {
        response = await sessionInitialization(sessionInitializationBody);
        expect(response.data.currency).toEqual(sessionInitializationBody.currency);
        expect(response.data.licenseePlayerId).toEqual(sessionInitializationBody.licenseePlayerId);
        expect(response.data.licenseeSessionId).not.toBeNull();
        expect(response.status).toEqual(statusCodeOk);
        console.log(`start_session_initialization_request: ${response.config.data}`);
        console.log(`start_session_initialization_response: ${JSON.stringify(response.data)}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Complete session initialization", async () => {
        response = await сompleteSessionInitialization(completeSessionInitializationBody);
        expect(response.status).toEqual(statusCodeCreated);
        console.log(`complete_session_initialization_request: ${response.config.data}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Get balance", async () => {
        response = await getBalance(getBalanceBody);
        initialBalance = response.data.balances[0].amount;
        expect(response.status).toEqual(statusCodeOk);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
    test("Get balance for table", async () => {
        response = await getBalance(getBalanceForTableBody);
        currentBalance = response.data.balances[0].amount;
        expect(initialBalance).toEqual(currentBalance);
        expect(response.status).toEqual(statusCodeOk);
        console.log(`initial_balance_for_table: ${initialBalance}`);
        console.log(`current_balance_for_table: ${currentBalance}`);
        console.log(`get_balance_request_for_table: ${response.config.data}`);
        console.log(`get_balance_request_for_table: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 1", async () => {
        response = await playerWithdrawal(playerWithdrawalBody);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance - bet;
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 2", async () => {
        response = await playerWithdrawal(playerWithdrawalBody2);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance - bet;
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Preliminary settlement - cancel", async () => {
        response = await playerPreliminarySettlement(playerPreliminarySettlementBody);
        expect(response.status).toEqual(statusCodeAccepted);
        console.log(`preliminary_settlement_request: ${response.config.data}`);
    });
    test("Get balance after preliminary settlement", async () => {
        response = await getBalance(getBalanceForTableBody);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance + bet;
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`get_balance_request_for_table: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
    test("Final settlement", async () => {
        response = await playerFinalSettlement(playerFinalSettlementBody);
        expect(response.status).toEqual(statusCodeAccepted);
        console.log(`payoff: ${payoff}`);
        console.log(`final_settlement_request: ${response.config.data}`);
    });
    test("Get final balance", async () => {
        response = await getBalance(getBalanceBody);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance + payoff;
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
});
