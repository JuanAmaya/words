import Paragraph from "./Paragraph";

export default function NoDefinition({ definition }) {
    console.log("datos", definition);

    return (
        <div className="flex flex-col gap-4 mt-4">
            <Paragraph subtitle={"Title"} desc={definition.title} />
            <Paragraph subtitle={"Message"} desc={definition.message} />
            <Paragraph subtitle={"Resolution"} desc={definition.resolution} />
        </div>
    );
}