import React from 'react'
import { Components } from '../../components'
import { ScrollTop } from '../../helpers'

const NewsPage = () => {
  React.useEffect(() => {
    ScrollTop()
  }, [])
  return (
    <div>
      <Components.News />
    </div>
  )
}

export default NewsPage