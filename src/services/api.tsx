import { gql } from "@apollo/client";

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