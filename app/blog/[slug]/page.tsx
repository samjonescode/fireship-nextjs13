interface Post {
    title: string;
    content: string;
    slug: string;
}
interface Props {
    params: {slug : string};
}
export const revalidate = 420;  
export default async function({ params }: Props) {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(d => d.json());
    const post = posts.find((post) => post.slug === params.slug)!;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}