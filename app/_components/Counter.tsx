"use client";
import { useState } from "react";
import { ICabin } from "@/constant/types/cabin";

interface CounterProps {
  users: ICabin[];
}

export default function Counter({ users }: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
