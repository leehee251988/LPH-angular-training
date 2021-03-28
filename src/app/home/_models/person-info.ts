export class PersonInfo {
  id?: any;
  name: string;
  code: string;
  address: string;
  birth: string;
  email: string;
  image: string;

  constructor(id: any = null, name: string = '', code: string = '',
              address: string = '', birth: string = '', email: string = '',
              image: string = '') {
    this.id = id;
    this.name = name;
    this.code = code;
    this.address = address;
    this.birth = birth;
    this.email = email;
    this.image = image;
  }
}