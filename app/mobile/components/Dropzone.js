import React, { useState, useRef } from 'react'
import cookie from 'js-cookie'
import { UploadCloud } from 'react-feather'

export default () => {
	const [dragging, setDragging] = useState(false)

	const dragCount = useRef(0)

	const handleDragEnter = e => {
		e.preventDefault()
		e.stopPropagation()
		dragCount.current += 1
		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
			setDragging(true)
		}
		console.log(e)
	}

	const handleDragLeave = e => {
		e.preventDefault()
		e.stopPropagation()
		dragCount.current -= 1
		if (dragCount.current > 0) return
		setDragging(false)
	}

	const handleDragOver = e => {
		e.preventDefault()
		e.stopPropagation()
	}

	const handleDrop = e => {
		e.preventDefault()
		e.stopPropagation()

		setDragging(false)
		dragCount.current = 0

		let payload = new FormData()
		payload.append('files', e.dataTransfer.files[0])

		fetch('http://localhost:1337/upload', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${cookie.get('token')}`
			},
			body: payload
		})
	}

	return (
		<div
			className="dropzone"
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
			<div className="status">
        <UploadCloud />
        <h2>{dragging ? 'Drop' : 'Upload file'}</h2>
        <p>Drag file in here to upload</p>
			</div>
			<style jsx>{`
        .dropzone {
          background: ${dragging ? '#fff' : '#eee'};
          display: flex;
          border: solid 40px transparent;
          transition: all 250ms ease-in-out 0s;
          position: relative;
          border-radius: var(--border-radius);
        }
      `}</style>
		</div>
	)
}
