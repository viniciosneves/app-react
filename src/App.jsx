import { useEffect, useState } from "react"
import Button from "./components/Button"
import Courses from "./components/Courses"
import PaginationContainer from "./components/PaginationContainer"
import EmptyState from "./components/EmptyState"

function App() {

  const [page, setPage] = useState(1)
  const [paginatedData, setPaginatedData] = useState({
    count: 0,
    next: 0,
    previous: 0,
    results: []
  })

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(`${import.meta.env.VITE_URL}?page=${page}`)
      const data = await response.json()
      setPaginatedData(data)
    }

    fetchData()
    
  }, [page])

  const showPrevPage = () => {
    if (!paginatedData.previous) {
      return
    }
    setPage(oldPage => oldPage - 1)
  }

  const showNextPage = () => {
    if (!paginatedData.next) {
      return
    }
    setPage(oldPage => oldPage + 1)
  }

  if (paginatedData.results.length == 0) {
    return <EmptyState />
  }
  

  return (
    <>
        <Courses items={paginatedData.results}/>
        <PaginationContainer>
          <img src="/reader.png" alt="" />
          <div>
            <Button 
              disabled={!paginatedData.previous}
              onClick={showPrevPage}
            >
              &lt;&lt; Página anterior
            </Button>
            <Button 
              disabled={!paginatedData.next}
              onClick={showNextPage}
            >
              Próxima página &gt;&gt;
            </Button>
          </div>
        </PaginationContainer>
    </>
  )
}

export default App
