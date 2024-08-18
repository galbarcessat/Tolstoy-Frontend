export function MetadataPreview({ data }) {
    return (
        <div className="metadata-preview">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            {data.image && <img src={data.image} alt={data.title} />}
        </div>
    );
}