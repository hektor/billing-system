import { useState } from 'react'

/*
 * Custom hook for binding input values & toggling feedback
 */

export default initial => {
  const [value, setValue] = useState(initial.value)
  const [showFeedback, setShowFeedback] = useState(initial.showFeedback)

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    setShowFeedback(true)
  }

  return {
    setShowFeedback,
    showFeedback,
    setValue,
    bind: {
      value,
      onChange,
      onBlur,
    },
  }
}
