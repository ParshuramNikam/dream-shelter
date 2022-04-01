import React from 'react'
import CreatePost from '../components/reactQuill/CreatePost'

const CreatePostPage = ({userDetails}) => {
    return (
        <div>
            <CreatePost userDetails={userDetails} />
        </div>
    )
}

export default CreatePostPage