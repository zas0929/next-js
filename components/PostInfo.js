import Heading from "./Heading";

const PostInfo = ({ post }) => {
    const { id, title } = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post" />
    }

    return (
        <>
            <Heading tag="h3" text={title} />
            <div>
                <strong>Post: </strong>
                {title}
            </div>
        </>
    )
}

export default PostInfo;