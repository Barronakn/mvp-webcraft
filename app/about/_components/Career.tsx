import Title from "./Title"

type TimelineItem = {
    year: string;
    title: string;
    description?: string;
};

type TimelineProps = {
    items: TimelineItem[];
    title?: string;
};

const TimelineCard = ({ item }: { item: TimelineItem }) => (
    <div className="bg-white border border-gray-100 rounded-xl p-3 md:p-5 shadow-sm">
        <div className="text-terracotta-500 font-bold text-xl">{item.year}</div>
        <h3 className="text-delft-blue font-semibold text-lg md:text-xl mt-1">
            {item.title}
        </h3>
        {item.description && (
            <p className="text-gray-600 mt-2">{item.description}</p>
        )}
    </div>
);

export default function Timeline({
    title,
    items,
}: TimelineProps) {
    return (
        <section className="px-6 md:px-16 py-20">
            <Title name={title} className="text-center" />
            <div className="mt-8">
                {items.map((item, i) => (
                    <div
                        key={`${item.year}-${i}`}
                        className="
              relative
              md:grid md:grid-cols-[1fr_40px_1fr] md:gap-8
            "
                    >
                        <div className={`hidden md:block ${i % 2 === 0 ? "" : ""}`}>
                            {i % 2 === 0 ? <TimelineCard item={item} /> : null}
                        </div>

                        <div className="hidden md:block relative">
                            <span className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px h-full bg-delft-blue/25"></span>
                            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-delft-blue border-4 border-white shadow"></span>
                        </div>

                        <div className={`hidden md:block`}>
                            {i % 2 !== 0 ? <TimelineCard item={item} /> : null}
                        </div>

                        {/*  mobile version */}
                        <div className="md:hidden relative pl-6">
                            <span className="absolute left-0 top-0 bottom-0 w-px bg-delft-blue/20"></span>
                            <span className="absolute -left-1.5 top-1/2 w-3 h-3 rounded-full bg-delft-blue"></span>
                            <div className="py-2">
                                <TimelineCard item={item} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
