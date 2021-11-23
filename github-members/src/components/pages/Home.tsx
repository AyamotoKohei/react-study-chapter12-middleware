import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from 'lodash';
import { List, ListContent } from 'semantic-ui-react';

import './Home.css';

const Home: VFC<{ orgCodes: string[] }> = ({ orgCodes = [] }) => (
  <>
    <header className="app=header">
      <h1>会社一覧</h1>
    </header>
    <List celled relaxed>
      {orgCodes.map((orgCode) => (
        <List.Item className="list-item" key={orgCode}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <ListContent>
            <Link to={`/${orgCode}/members`}>
              {capitalize(orgCode)}のメンバー
            </Link>
          </ListContent>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
