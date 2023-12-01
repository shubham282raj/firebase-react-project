import {Posts as PostType} from './Main'

interface Props {
    post: PostType;
}

export const Post = (props: Props) => {
    const {post} = props; //destructing the props

    return <div className='postContainer' >
        <div className='title'>
            <h1>{post.title}</h1>
        </div>
        <div className='body'>
            <p>{post.description}</p>
        </div>
        <div className='author'>
            <p>@{post.username}</p>
        </div>
    </div>
}