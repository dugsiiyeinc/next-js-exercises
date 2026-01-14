import { Suspense } from "react";
import SlowComponent from "./exer-2/components/slowComponent";
import Counter from "./exer-2/components/counter";

const Home = async () => {

  const now=new Date().toLocaleTimeString();
  return (
    <div className="text-3xl">
      <h1>Hello World</h1>
      <p>The time is {now}</p>
      <Counter/>
      <Suspense>
        <SlowComponent />
      </Suspense>
    </div>
  )
}

export default Home
