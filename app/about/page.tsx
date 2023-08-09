import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "static";

export const metadata: Metadata = {
    title: 'About Me',
    description: 'This is an about me page.'
}
export default async function About() {
    const session = await getServerSession();
    if (!session) {
        redirect('/api/auth/signin');
    }
    return (
        <div>Static content</div>
    )
}