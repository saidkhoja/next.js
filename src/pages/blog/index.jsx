import Link from "next/link";

const blog = ({ posts }) => { 
    return (
        <>
            <div className='container mx-auto h-full'>
                <div className='grid grid-cols-3 gap-4 p-6'>
                    {posts.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id}>
                            <div className='bg-gray-200 p-4 rounded-lg'>
                                <h3 className='text-2xl'>{post.title}</h3>
                                <p className='text-sm'>{post.body}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return { props: { posts } };
}

export default blog;
