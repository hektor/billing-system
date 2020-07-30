import {useEffect} from 'react'
import Spark from 'dailychart'

/*
 * Sparkline component
 */

export default ({values, length}) => {
  useEffect(() => {
    Spark.create('#spark', {
      lineWidth: 2,
      colorPositive: 'var(--color-primary-500)',
      colorNegative: 'var(--color-primary-500)'
    })
  }, [])

  return (
    <div
      id='spark'
      data-dailychart-values={values.join(',')}
      data-dailychart-length={length}
    >
      <style jsx>
        {`
          #spark {
            flex: 1;
          }
        `}
      </style>
    </div>
  )
}
