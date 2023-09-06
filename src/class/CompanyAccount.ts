import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, saldo: number){
    super(name, accountNumber, saldo)
  }

  getLoan(value: number): void {
    if(!this.validateStatus()) {
      throw new Error('Não é possível fazer emprestimo em uma conta inativa!');
    }
    this.sumSaldo(value);
    console.log('Voce pegou um empréstimo')
  }
}
