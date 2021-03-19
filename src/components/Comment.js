import React, { useContext } from 'react'
import { AuthContext } from '../authentication/auth'
import Time from './Time'

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext)
    return (
      <div>
        { JSON.stringify(auth) }
        { comment.content} por { comment.user.name} em <Time timestamp={comment.createdAt} />
      </div>
    )
  }

export default Comment