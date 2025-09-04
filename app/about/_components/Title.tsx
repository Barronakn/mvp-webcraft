type TitleProps = {
    name?: string
    className?: string,
}

export default function Title({ name, className }: TitleProps) {
    return (
        <h2 className={`${className} font-bold text-2xl lg:text-3xl xl:text-4xl text-delft-blue`}>
            {name}
        </h2>
    )
}