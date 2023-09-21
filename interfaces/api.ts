import { IApiDashboardChart, IApiDashboardDeposit, IApiDashboardDividends, IApiDashboardInstrument, IApiDashboardTaxes } from "./api/dashboard";

export interface IApiDashboardInfo {
    instruments: IApiDashboardInstrument[];
    taxes: IApiDashboardTaxes;
    dividends: IApiDashboardDividends;
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