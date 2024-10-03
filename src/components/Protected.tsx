'use client';

import { useEffect, useRef, useState } from 'react';

export function Protected() {
  const [backgroundColor, setBackgroundColor] = useState('green');

  console.log('env: ', process.env.NEXT_PUBLIC_FIREBASE_API_KEY)

  const getLocalStorage = (): string => {
    console.log('getting local storage');
    return localStorage.getItem('expired') || '{}';
  };

  const removeLocalStorage = () => {
    localStorage.removeItem('expired');
  };

  const workerFunction = () => {
    onmessage = (event) => {
      let sum = 0;
      console.log('I am Worker', event.data);
      for (let index = 0; index < 10000000000; index++) {
        sum += index;
      }
      postMessage({
        hasSum: true,
        sum: `The sum is: ${sum}`,
      });
      console.log('worker onmessage', event.data);
    };
  };

  const calculateSum = () => {
    const code = workerFunction?.toString();
    const blob = new Blob([`(${code})()`], {
      type: 'application/javascript',
    });
    const webWorkerUrl = URL.createObjectURL(blob);
    const worker = new Worker(webWorkerUrl);

    worker.postMessage('worker started!');
    worker.onmessage = (event) => {
      console.log('worker onmessage', event.data);
    };
  };

  useEffect(() => {
    localStorage.setItem(
      'expired',
      new Date(Date.now() + 30 * 1000).toString()
    );
  }, []);

  const changeColor = (e: any) => {
    e.preventDefault();
    if (document.body.style.backgroundColor !== 'red') {
      document.body.style.backgroundColor === 'red';
    } else {
      document.body.style.backgroundColor = 'blue';
    }
  };

  const toggleBackground = () => {
    setBackgroundColor(backgroundColor === 'green' ? 'red' : 'green');
  };

  return (
    <div
      style={{ backgroundColor, height: '100vh' }}
      className="flex flex-col gap-2"
    >
      <span>This is a protected Page</span>
      <button
        type="button"
        className="w-fit border-2 border-black"
        onClick={toggleBackground}
      >
        change color
      </button>
      <button
        type="button"
        className="w-fit border-2 border-black"
        onClick={calculateSum}
      >
        calculate sum
      </button>
    </div>
  );
}
