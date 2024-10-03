import Signin from '@/components/SignIn';
import SignOut from '@/components/SignOut';

export default async function Home() {
  return (
    <div className="p-8 items-center justify-center">
       <SignOut>{`Welcome`}</SignOut> <Signin/>
    </div>
  )
}