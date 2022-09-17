type DataDifferent= 'income'|'outcome'| 'loan'|'investment'

export interface DataEl {
  _id: string
  amount: any
  type: DataDifferent
  name: {
    first: string
    last: string
  }
  company: string
  email: string
  phone: string
  address: string
}
