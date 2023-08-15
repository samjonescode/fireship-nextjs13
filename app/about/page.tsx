import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const dynamic = "static";

export const metadata: Metadata = {
    title: 'About Me',
    description: 'This is an about me page.'
}
export default async function About() {
    const session = await getServerSession();
    // const { data: session as sess, status} = useSession();
    console.log('sess: ', session)
    if (!session) {
        redirect('/api/auth/signin');
    }
    return (
        <div>Static content</div>
    )
}