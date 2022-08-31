import { gql } from "@apollo/client";
import { User } from "../types";

export const LIST_CONTINENTS = gql`
  {
    continents {
      code
      name
      countries {
        name
        code
        capital
      }
    }
  }
`;

export const LIST_COUNTRIES = gql`
  {
    countries {
      code
      name
      capital
    }
  }
`;

export const API_USER:User = {
  username: 'admin', 
  password: 'admin',
  accesToken: 'thisisatokenreceivedfromapi'
}