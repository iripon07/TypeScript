class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;
  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  //Getter
  get balance(): number {
    return this._balance;
  }
  set deposit(amount: number) {
    this._balance = this.balance + amount;
  }

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    // this.
  }
}

const myAccount = new BankAccount(22, "Villain", 20);
// myAccount.addDeposit(20)
// myAccount.getBalance()

console.log(myAccount.balance);
myAccount.deposit = 20;
