import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Country, Language } from "../../types"
import { Button, Card, Descriptions } from "antd";
import { RollbackOutlined } from '@ant-design/icons';
import './Country.css'

const CountryPage = () => {
  const URLparams = useParams()

  const COUNTRY = gql`
    {
    country(code: "${URLparams.code}") {
      name
      native
      phone
      continent {
        name
        code
      }
      capital
      currency
      languages {
        name
        code
      }
    }
  }
  `;
  
  const country:Country = useQuery(COUNTRY).data?.country

  return (
    <div className="container">
      <Link to="/">
        <Button icon={<RollbackOutlined />}>Go back!</Button>
      </Link>
      <Card className="card" title={`${country?.name}`}>
        <table>

          <tr>
            <td>
              <p>
                Capital
              </p>
            </td>
            <td>
              <p>
                {country?.capital}
              </p>
            </td>
          </tr>
          
          <tr className="row">
            <td>
              <p>
                Code
              </p> 
            </td>
            <td>
              <p>
                {URLparams.code}
              </p>  
            </td>
          </tr>
          
          <tr className="row">
            <td>
              <p>
                Native
              </p>
            </td>
            <td>
              <p>
                {country?.native}
              </p> 
            </td>
          </tr>

          <tr className="row">
            <td>
              <p>
                Phone
              </p>
            </td>
            <td>
              <p>
                {country?.phone}
              </p> 
            </td>
          </tr>

          <tr className="row">
            <td>
              <p>
                Currency
              </p>
            </td>
            <td>
              <p>
                {country?.currency}
              </p> 
            </td>
          </tr>

          <tr className="row">
            <td>
              <p>
                Continent
              </p> 
            </td>
            <p>
              {
                country?.continent?.name
              }
              <br />
              {
                country?.continent?.code
              }
            </p>
          </tr>

          <tr className="row">
            <td>
              <p>
                Languages
              </p>
            </td>
            {
              country?.languages?.map((lang:Language) => {
                return <p>{lang.name}<br/>{lang.code}</p>
              })
            }
          </tr>
        </table>
      </Card>
    </div>
  )
};

export default CountryPage;