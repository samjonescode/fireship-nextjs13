import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import Image from 'next/image'
export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    console.log('should redirect')
    redirect('/api/auth/signin');
  }
  return (
    <main>Main</main>
  )

}
