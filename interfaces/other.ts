
export interface IDashboardInfo {
    instruments: IInstrument[];
    dividends: IDividend
    taxes: ITax;
    deposits: IDeposit; 
    chart:{
        timeline: string[];
        portfolio: number[];
    }
}

export interface IInstrument {
    symbol: string
    description: string;
    quantity: number;
    averagePrice: number;
    currentPrice: number;
}
// export interface IDividend {
//     [year: string]: {
//         [month: string]: number
//     }
// }

export interface ITax {
    [year: string]: {
        [month: string]: number
    }
}

export  interface IDeposit {
    depositedAmount: number;
    withdrawnAmount: number;
    currentPortfolioValue: number;
    list: []
}

export interface TreeNode<P> {
    data: P;
    children?: TreeNode<P>[];
    expanded?: boolean;
}
export interface IInstrumentEntry {
    name?: string;
    percentage?: number;
    // price?: number;
    expectedPercentage?: number;
    avgInstrumentPrice?: number;
    instrumentPrice?: number;

    // currentPrice?: number;
    profit?: number;
    profitPercent?: number;
    expanded?: boolean;
    quantity?: number;
    isParent?: boolean;

}
  
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