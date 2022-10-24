export class Record {
  private recordID: number;
  public userID: number;
  public categoryID: number;
  private date: Date;
  private amount: string;
  constructor(
    recordID: number,
    userID: number,
    categoryID: number,
    amount: string,
  ) {
    this.recordID = recordID;
    this.userID = userID;
    this.categoryID = categoryID;
    this.amount = amount;
  }
}
