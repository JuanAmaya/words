import Mistake from "../../../public/svg/Mistake";

export default function MistakesBar({ mistake }) {
    return (
        <div className="flex">
            {
                [...Array(mistake)].map((e, i) => <Mistake key={i} pathColor={"mistakeMade"} />)
            }
            {
                [...Array(3 - mistake)].map((e, i) => <Mistake key={i} />)
            }
        </div>
    );
}