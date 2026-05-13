type Props = {
    title: string;
    description?: string;
}

const ArrowFunctionalComponent = (
    {title, description}: Props
) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    )
}

export default ArrowFunctionalComponent;