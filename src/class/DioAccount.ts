export abstract class DioAccount {
  
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  private saldo: number = 0

  constructor(name: string, accountNumber: number, saldo: number){
    this.name = name
    this.accountNumber = accountNumber
    this.saldo = saldo
  }
  
  getName = (): string => {
    return this.name
  }

  getSaldo():number {
    return this.saldo;
  }

  subSaldo(value:number):void {    
    this.saldo -= value;
  }

  sumSaldo(value:number): void {
    this.saldo += value;
  }

  deposit(value: number, account: DioAccount): void {
    if(this.validateStatus() && account.status){
      account.sumSaldo(value);
    } else {
      throw new Error('Conta inválida');
    }
  }

  withdraw(value: number): void {
    if(this.saldo >= value) {
      this.subSaldo(value);
      console.log('Saque realizado com êxito.');
    } else {
      throw new Error('Não há saldo suficiente para saque.');
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus(): boolean {
    return this.status;
  }
}
