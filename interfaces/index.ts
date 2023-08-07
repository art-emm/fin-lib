
export interface IPortfolio {
    id: number;
    name: string;
    userInstruments: {
        id: number;
        instrument: IUserInstrument;
        percentage: number;
    }[]
}

export interface IUserInstrument {
    id: number;
    dividends: IDividend[];
    instrument: IInstrument;
    taxes: Itax[];
    trades: ITrade[];
}

export interface IDividend {
    id: number;
    type: string,
    currency: string,
    symbol: string,
    date: Date,
    amount: number,
    description: string,
}

export interface IInstrument{
    id: number,
    assetCategory: string,
    symbol: string,
    description: string,
    conid: string,
    securityId: string,
    listingExch: string,
    multiplier: string,
    type: string,
    exchange: string,
    price: number,
    code: string
}

export interface Itax {}

export interface ITrade {
    id: number,
    category: string,
    currency: string,
    symbol: string,
    date: Date,
    quantity: number,
    transactionPrice: number,
    closePrice: number,
    proceeds: number,
    fee: number,
    basis: number,
    createdAt: string
    updatedAt: string
}

export interface IDividendSummary {
    dividendsAmount: number;
}

export interface ITradesSummary {
    instrumentAmount: number;
    instrumentBoughtAmount: number;
    instrumentSoldAmount: number;
    avgBuyPrice: number;
    avgSellPrice: number;
    fees: number;
}


export type IInstrumentSummary = ITradesSummary & IDividendSummary;