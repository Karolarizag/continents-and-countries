import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const {Content} = Layout

function App() {

  return (
    <div className="App">

        <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <p>hello</p>
            </Content>
          </Layout>


    </div>
  );
}

export default App;
