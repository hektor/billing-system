import { useEffect } from 'react'
import Spark from 'dailychart'

/*
 * Sparkline component
 */

export default ({ values, length, id }) => {
  useEffect(() => {
    Spark.create(`#${id}`, {
      lineWidth: 2,
      colorPositive: 'var(--color-primary-500)',
      colorNegative: 'var(--color-primary-500)',
    })
  }, [])

  return (
    <div
      id={id}
      data-dailychart-values={values.join(',')}
      data-dailychart-length={length}
    >
      <style jsx>
        {`
          #${id} {
            flex: 1;
          }
        `}
      </style>
    </div>
  )
}
