import { IApiDashboardChart, IApiDashboardDeposit, IApiDashboardInstrument, IApiYearsMonthesMap } from "./api/dashboard";

export interface IApiDashboardInfo {
    portfolios: IApiUserPortfolio[];
    instruments: IApiDashboardInstrument[];
    deposits: IApiDashboardDeposit;
    chart: IApiDashboardChart
}

export interface IApiUserPortfolio {
    id: number;
    name: string;
    portfolioPrice: number;
    portfolioAvgPrice: number;
    profit: number;
    profitPercent: number;
    instruments: IApiUserInstrument[]
    dividends: IApiYearsMonthesMap;
    taxes: IApiYearsMonthesMap;
}

export interface IApiUserInstrument {
    userInstrumentId: number;
    symbol: string;
    instrumentPrice: number;
    avgInstrumentPrice: number;
    expectedPercentage: number;
    currentPercentage: number;
    profit: number;
    profitPercent: number;
    quantity: number;
}

export interface IApiStockInfo {
    price: number;
    grahams: {
        eps: number;
        pOnENoGrowth: number
        growthRate: number
        averageYealdAAABond: number
        currentYealdAAACorporateBond: number
    },
    dcf: {
        cashFlow:{ [year: string]: { cash: number; growthRate: number }}
        averageGrowthRate: number;
        cashAndCashEquivalents: number;
        totalDebt: number;
    },
    wacc: {
        costOfDebt: {
            interestExpence: number;
            totalDebt: number;
            costOfDebt?: number;
            incomeTaxExpense: number;
            incomeBeforeTax: number;
            effectiveTaxRate?: number;
            costOfDebtAfterTax?: number;
        },
        costOfEquity: {
            riskFreeRate?: number;
            marketReturnRate?: number;
            beta?: number;
            costOfEquity?: number;
        },
        marketCap: number;
    },
    lynch: {
        futureEpsGrowth: number;
    },
    }
}

export interface IApiSearchStock {
    exchange: string
    shortname: string
    quoteType: string
    symbol: string
    score: number
    longname: string
    sector: string
    industry: string
}