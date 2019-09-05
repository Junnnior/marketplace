export class Vendor {
  name: String

  idUser: String

  idsProducts: []

  address = [
    {
      street: String,
      city: String,
      state: String,
      cep: String
    }
  ]
}