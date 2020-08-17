export class User{
  firstName;
  lastName: string
  birthDate: string
  email: string
  password: string
  role: number
  active: number


  constructor(firstName: string,
              lastName: string,
              birthDate: string,
              email: string,
              password: string,
              role: number,
              active: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
    this.password = password
    this.role = role;
    this.active = active

  }


}
