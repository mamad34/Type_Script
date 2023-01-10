class Department {
  //   public name: string;
  //   private readonly id: string;
  //   private name: string;
  private employees: string[] = [];
  //   private means only accessible over the class

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id
  }
  describe(this: Department) {
    console.log("describe " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformations() {
    console.log(this.employees.length);
  }
}

const account = new Department("id:11", "Accounting");
console.log(account);
account.describe();
const accountingCopy = { name: "dik", describe: account.describe };
// accountingCopy.describe();
account.name = " NEW NAME ";
account.addEmployee("Max");
account.addEmployee("Manufact");
// account.employees[2] = "Anna "; errorMessage
account.printEmployeeInformations();
