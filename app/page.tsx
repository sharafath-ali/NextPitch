// 'use client'

import Hello from "./components/hello";

export default function Home() {
  console.log("hello SERVER");
  // throw new Error('Error')
  return (
    <div>
      <h1>helldo</h1>
      <Hello />
    </div>
  );
}
