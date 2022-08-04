import {useEffect, useState} from 'react'
import './App.css';
import Gallery from './Gallery';
import SearchBar from './SearchBar';

function App() {
  let [search,setSearch] = useState('')
  let [message, setMessage] = useState('search for music!')
  let [data, setData] =    useState([])

    useEffect(() => {
      const fetchData = async () => {
          document.title = `${search} Music`
          const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
          const resData = await response.json()
          if (resData.results.length > 0) {
              setData(resData.results)
          } else {
              setMessage('Not Found')
          }
      }
      fetchData()
    }, [search])

        return (
          <div className="App">
            <SearchBar />
            {message}
            <Gallery />
            
          </div>
        );
}

export default App;
