import { DioAccount } from "./DioAccount"

export class PeopleAccountPremuin extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, saldo: number){
    super(name, accountNumber, saldo)
    this.doc_id = doc_id
  }

  deposit(value: number, account: DioAccount): void {
    if(this.validateStatus() && account.validateStatus()){
      account.sumSaldo(value + 10);
    } else {
      throw new Error('Conta inválida');
    }
  }

}