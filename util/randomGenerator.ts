import {alphabet, digits} from "./constantsForRandomGenerator";

export function generateString(length: number): string {
    let characters: string = alphabet + digits;
    let result: string = "";
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generateInteger(length: number): string {
    let characters: string = digits;
    let result: string = "";
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}