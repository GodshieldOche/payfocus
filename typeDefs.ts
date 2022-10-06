export type Transaction = {
    id: string,
    paymentId: string,
    refId: string,
    qrcode: string
    payment: string,
    inData: string,
    repostdata: string,
    insideData: null,
    outData: string,
    initiated: string,
    finished: string,
    narration: string,
    channel: string,
    processor: string,
    amountSrc: string,
    amountDst: string,
    charges: string,
    status: string,
    payer: string,
    beneficiary: string,
    src: string,
    dst: string
}


export type transaction =  {
  id: string,
  channel: string,
  narration: string,
  amount: string,
  currency: string,
  status: string,
  initiated: string,
  type: string,
  completed: string
}
  
  
export type balance =  { 
  id: string,
  currency: string, 
  balance: string 
}
  

export type pfTransfer = {
  amountDst : number,
  narration?: string,
  channel: string,
  inData: string,
  src: string,
  dst: string
}

export type bankTransfer = {
  amountDst : number,
  narration?: string,
  channel: string,
  inData: {bankId: string, actNo: string},
  src: string,
  dst: string
}

export type Person = {
  Id: string,
  Name : string,
  Picture: string,
}

export type Payment = {
  Id: string,
  Title: string,
  Amount: string,
  Currency: string,
  Status: string,
  Created: string,
  Link: string,
  Redirect: string
}

export type Card =   {
  Id: string,
  owner: string,
  currency: string,
  name: string,
  number: string,
  pin: string,
  cvv: string,
  expiry: string,
  address: string,
  balance: number,
  type: string,
  transactions: [] | null
}