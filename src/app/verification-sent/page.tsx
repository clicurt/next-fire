'use client'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const VerificationSent = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect('/'); // Redirect to home or login page after a few seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl mb-4">Verification Email Sent</h1>
        <p className="mb-4">A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.</p>
        <p className="text-gray-400">You will be redirected shortly...</p>
      </div>
    </div>
  );
}

export default VerificationSent;
