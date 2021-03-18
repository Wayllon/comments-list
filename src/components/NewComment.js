import React, { useState } from 'react'
import { useDatabasePush } from '../backend/database' // /backend/database
import firebase from '../backend/firebase' // /backend/firebase

const NewComment = () => {
    const [,save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
  
    const createComment = () => {
      if (comment !== '') {
        save({
          content: comment,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          user: {
            id: '1',
            name: 'Unknown'
          }
        })
        setComment('')
      }
    }
    return (
      <div>
        <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
        <button onClick={createComment}>Comentar</button>
      </div>
    )
  }

  export default NewComment