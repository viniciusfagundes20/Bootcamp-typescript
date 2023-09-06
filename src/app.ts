import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PeopleAccountPremuin } from './class/PeoplePremuim'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10, 5000)
console.log(peopleAccount)
peopleAccount.withdraw(1122)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, 21000)
companyAccount.deposit(1000, peopleAccount);
//console.log(companyAccount);

const peopleAccountPremuim = new PeopleAccountPremuin(202, 'Vini Boy', 5502, 11202);

console.log(`O saldo de ${peopleAccount.getName()} é ${peopleAccount.getSaldo()}`)
peopleAccountPremuim.deposit(1002, peopleAccount);

console.log(`O saldo de ${peopleAccount.getName()} agora é ${peopleAccount.getSaldo()}`)