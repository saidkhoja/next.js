const id = ({ post }) => {
    return (
        <div className='container p-6'>
            <h2 className='text-6xl p-2'>{post.title}</h2>
            <p className='text-xl p-2'>{post.body}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            return { props: { post: data } };
        });
}

export default id;
