import { IDividend, IInstrumentSummary, ITrade, IDividendSummary, ITradesSummary, IUserInstrument } from "../interfaces";
import { IApiYearsMonthesMap } from "../interfaces/api/dashboard";

export function getAmountFromYearsMonthesMap(yearsMonthesMap: IApiYearsMonthesMap): number {
    debugger;
    let amount = 0;
    for (const year in yearsMonthesMap) {
        for (const month in yearsMonthesMap[year]) {
            amount += yearsMonthesMap[year][month];
        }
    }
    return amount;
}

export function getUserInstrumentSummary(userInstrument:  IUserInstrument): IInstrumentSummary {
    
    const { trades, dividends } = userInstrument;

    const tradesSummary = getTradesSummary(trades);
    const dividendsSummary = getDividendsSummary(dividends);
    return {
        ...tradesSummary,
        ...dividendsSummary
    }
}

export function getDividendsSummary(dividends: IDividend[]): IDividendSummary {

    let dividendsAmount = 0;
    for (const dividend of dividends) {
        dividendsAmount += dividend.amount * 1;
    }
    dividendsAmount = parseFloat(dividendsAmount.toFixed(2));
    return {
        dividendsAmount
    }
}
export function getTradesSummary(trades: ITrade[]): ITradesSummary {
    let instrumentAmount = 0;
    let instrumentBoughtAmount = 0;
    let instrumentSoldAmount = 0;
    
    let avgBuyPrice = 0;
    let avgSellPrice = 0;

    let fees = 0;

    const buyPrices = [];
    const sellPrices = [];

    for (const trade of trades) {
        if (trade.quantity > 0) {
            instrumentBoughtAmount += trade.quantity;
            for (let i = 0; i < trade.quantity; i++) {
                buyPrices.push(trade.transactionPrice);
            }
        } else {
            instrumentSoldAmount += trade.quantity * -1;
            for(let i = 0; i < trade.quantity * -1; i++) {
                sellPrices.push(trade.transactionPrice);
            }
        }
        fees += (trade.fee || 0) * -1;
    }

    avgBuyPrice = buyPrices.reduce((a, b) => a + b, 0) / buyPrices.length;
    avgBuyPrice = parseFloat(avgBuyPrice.toFixed(2));
    
    avgSellPrice = sellPrices.reduce((a, b) => a + b, 0) / sellPrices.length;
    avgSellPrice = parseFloat(avgSellPrice.toFixed(2));

    return {
        fees,
        avgBuyPrice,
        avgSellPrice,
        instrumentAmount: instrumentBoughtAmount - instrumentSoldAmount,
        instrumentBoughtAmount,
        instrumentSoldAmount
    }
}
// Path: src/interfaces/index.ts