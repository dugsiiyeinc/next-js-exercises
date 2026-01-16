import { Suspense } from "react";
import SlowComponent from "./exer-2/components/slowComponent";
import Counter from "./exer-2/components/counter";
import EmailForm from "./exer-3/components/EmailForm";
import PasswordForm from "./exer-3/components/PasswordForm";
import FullNameForm from "./exer-3/components/FullNameForm";
import TodoHomePage from "./exer-4/home/page";

const Home = async () => {

  const now=new Date().toLocaleTimeString();
  return (
    <div className="text-3xl">
      {/* exercise 2 */}
      {/* <h1>Hello World</h1>
      <p>The time is {now}</p>
      <Counter/>
      <Suspense>
        <SlowComponent />
      </Suspense> */}

      {/* exercise 3 */}
      {/* <div className="flex flex-col gap-10">
        <EmailForm/>
        <PasswordForm/>
        <FullNameForm/>
      </div> */}

      {/* exercise 4 */}
      <TodoHomePage/>

    </div>
  )
}

export default Home
