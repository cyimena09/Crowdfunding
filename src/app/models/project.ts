export class Project{
  creatorID: number;
  name: string;
  description: string;
  presentationURL: string;
  fundingMax: number;
  accountNumber: number;
  validation: number;
  startDate: Date;
  endDate: Date;

  constructor(creatorID: number,
              name: string,
              description: string,
              presentationURL: string,
              fundingMax: number,
              accountNumber: number,
              validation: number,
              startDate: Date,
              endDate: Date) {
    this.creatorID = creatorID;
    this.name = name;
    this.description = description;
    this.presentationURL = presentationURL;
    this.fundingMax = fundingMax
    this.accountNumber = accountNumber;
    this.validation = validation;
    this.startDate = startDate
    this.endDate = endDate;
  }
}
