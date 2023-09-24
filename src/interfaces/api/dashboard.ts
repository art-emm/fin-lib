export interface IApiDashboardDeposit {
    avgBuyPricePortfolioValue: number;
    currentPortfolioValue: number;
    list: any[]
    totalDepositedAmount: number;
    totalWithdrawnAmount: number;
}

export interface IApiDashboardChart {
    portfolio: number[]
    timeline: string[]
}

export interface IApiDashboardDividends extends IApiYearsMonthesMap {}

export interface IApiDashboardTaxes extends IApiYearsMonthesMap {}


export interface IApiYearsMonthesMap {
    [year: number]: {
        [month: string]: number
    }
}

export interface IApiDashboardInstrument {
    averagePrice:number;
    currentPrice: number
    id: number;
    quantity:number;
    symbol: string;
}