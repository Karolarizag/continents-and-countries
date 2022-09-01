import { Link } from "react-router-dom"
import { Button, Card, Collapse } from "antd"
import { RollbackOutlined } from '@ant-design/icons'
import './Faqs.css'

const { Panel } = Collapse

const faqs = [
  {
    header: "Main page",
    text: [
      "After logging in you will enter the main page where you can find a table with all the countries in our database with the data: name, code (abbreviation of name) and capital.",
      "If you are looking for countries in specific areas, you can filter the information by the respective continents. You will find this option in the selector above the table."
    ]
  },
  {
    header: "Country detail page",
    text: [
      "Clicking on the 'CODE' column, you will go to the detail page of the selected country.",
      "You will find in there extra information about each country, such as the prefix of its phone number and the languages spoken by its natives.",
      "If you want to go back to the main page, you will find the button on the left-top area."
    ]
  },
  {
    header: "FAQs page",
    text: [
      "FAQs page is the one where you are right now. ",
      "If you want to go back to the main page, you will find the button on the left-top area."
    ]
  },
  {
    header: "Log out",
    text: [
      "If you want to leave the app, first make sure you log out clicking the last button in the top bar. "
    ]
  }
]

const FAQs = () => {
  const loggedIn = localStorage.user ? true : false

  return (
    <>

      {
        loggedIn 
        ? <div className="page">
          <Link to="/">
            <Button icon={<RollbackOutlined />}>Go back!</Button>
          </Link>
          <Card className="card" title="FAQs">

            <h3>What is Continents & Countries?</h3> 
            <p>
              Continents and Countries you will have access to the geographical information of the world, in a simple and intuitive way.
            </p>

            <h3>How to use this app?</h3>

            <Collapse>
              {
                faqs.map(faq => {
                  return <>
                  <Panel header={faq.header} key={faqs.indexOf(faq)+1}>
                    {
                      faq.text.map(t => {
                        return <p>{t}</p>
                      })
                    }
                  </Panel>
                  </>
                })
              }
            </Collapse>
          </Card>
        </div>
        : null
      }

    </>
  )
}

export default FAQs