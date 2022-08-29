export type User = {
  username: string
  password: string
}

export type Country = {
  name: string, 
  code: string,
  capital: string, 
  native: string, 
  phone: string, 
  continent: string, 
  currency: string, 
  language: Language[]
}

export type Continent = {
  name: string, 
  code: string, 
  countries: Country[]
}

export type Language = {
  name: string, 
  code: string
}

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}