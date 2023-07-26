import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="">
      <div className="py-12">
        <h1 className="text-center text-4xl font-bold">WORD_</h1>
      </div>

      <div className="flex justify-center flex-col w-max mx-auto gap-4">
        <Button btnName={"playBtn"} title={"Play"} pageUrl={"/game"} />
        <Button btnName={"dictBtn"} title={"Dictionary"} pageUrl={"/dictionary"} />
      </div>
    </main>
  );
}
