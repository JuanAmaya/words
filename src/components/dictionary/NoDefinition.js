import Paragraph from "./Paragraph";

export default function NoDefinition({ definition }) {
    console.log("datos", definition);

    return (
        <div className="flex flex-col gap-4 mt-4">
            <Paragraph desc={definition.title}>
                Title
            </Paragraph>
            <Paragraph desc={definition.message}>
                Message
            </Paragraph>
            <Paragraph desc={definition.resolution}>
                Resolution
            </Paragraph>
        </div>
    );
}