import { useState,useRef} from 'react'
import './App.css';
import Gallery from './Gallery';
import SearchBar from './SearchBar';
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext';


const App = () => {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  let searchInput = useRef('')
  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) =>{
    e.preventDefault()
        //fetch data
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        //set State and Context Value
        return setData(resData.results)
      } else {
        return setMessage('Not Found.')
      }
  }
  fetchData()
  
}

  return (
    <div className="App">
      <SearchContext.Provider value={{
          term: searchInput,
          handleSearch: handleSearch
      }}> 
          <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data} >
        <Gallery />
      </DataContext.Provider>
    </div>
  )
    
    
}

export default App;







        /*function App() {
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
            }, [search])*/
