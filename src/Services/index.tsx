const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export default LIST_COUNTRIES