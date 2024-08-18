
export function MetadataResults({ metadata }) {
    return (
        <div>
            {metadata.map((data, index) => (
                <div key={index}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    {data.image && <img src={data.image} alt={data.title} />}
                </div>
            ))}
        </div>
    )
}
