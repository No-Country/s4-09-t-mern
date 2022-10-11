import React from 'react'
import Header from '../../components/Header/Header'
import { useMessageStore } from '../../redux/hooks/useMessage'

const Ranking = () => {
  // eslint-disable-next-line no-unused-vars
  const { message, setMessage } = useMessageStore()

  return (
    <div className="row">
      <div>
        <Header />
      </div>
      <h1>Ranking, mejores cafeterias</h1>
      <p> {message} </p>
    </div>
  )
}

export default Ranking
