'use client'

import React from 'react'
import { Protected } from './Protected';
import { signOut } from 'firebase/auth';
import auth from '@/firebase/firebaseConfig';

const SignOut = ({ children }: { children: React.ReactNode }) => {
  const handleSignOut = async () => {
    await signOut(auth);
    localStorage.removeItem('expired');
  }
  return (<form
    onSubmit={async (event) => {
      event.preventDefault();
      await handleSignOut();
    }}
  >
    <p>{children}</p>
    <button type="submit">Sign out</button>
    <Protected />
  </form>)
}

export default SignOut