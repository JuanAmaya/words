import Button from "@/components/Button";
import WordTyping from "@/components/ui/WordTyping";

export default function Home() {
  return (
    <main className="">
      <div className="py-4 mb-8">
        <h1 className="text-4xl text-mainText">
          <WordTyping activeLine={true}>WORD</WordTyping>
        </h1>
      </div>

      <div className="flex justify-center flex-col w-max mx-auto gap-4">
        <Button btnName={"menuBtn"} title={"Play"} pageUrl={"/game"} />
        <Button btnName={"menuBtn"} title={"Dictionary"} pageUrl={"/dictionary"} />
      </div>
    </main>
  );
}
