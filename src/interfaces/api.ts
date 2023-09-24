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