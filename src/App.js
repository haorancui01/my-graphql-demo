import { BrowserRouter as Router, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {

  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="search" exact element={<Search />}></Route>
          </Routes>
        </Router>
      </div>
    </ApolloProvider>

  );
}

export default App;
