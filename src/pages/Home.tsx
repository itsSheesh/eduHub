import { useState } from "react";
import Input from "../components/common/Input";
import Header from "../components/layout/Header";

const Home = () => {
  const [bookName, setBookName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bookName);
    setBookName("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(event.target.value);
  };

  return (
    <div className="relative flex flex-col h-[100vh]">
      <Header />
      <div className="absolute top-0 left-0 w-[80vw] h-[60vh] rounded-full bg-[#45F3FF] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[60vw] h-[50vh] rounded-full bg-[#FA9EFF] blur-3xl"></div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 justify-center items-center"
      >
        <Input
          type="text"
          placeholder="اسم کتاب رو وارد کن ..."
          value={bookName}
          onChange={handleChange}
          className="outline-none w-full max-w-[300px] md:max-w-[650px] h-[48px] md:h-[64px] rounded-full pr-3 md:pr-5 pl-3 text-base md:text-xl placeholder-black shadow-lg z-10"
        />
      </form>
    </div>
  );
};

export default Home;
