export function MetadataPreview({ data }) {
    return (
        <div className="metadata-preview">
            <div>
                <h2>URL :</h2>
                <p>{data.url}</p>
            </div>

            <div>
                <h2>Title :</h2>
                <p>{data.title}</p>
            </div>

            <div>
                <h2>Description :</h2>
                <p>{data.description}</p>
            </div>

            <div>
                <h2>Image :</h2>
                {data.image ?
                    <img src={data.image} alt={data.title} />
                    :
                    <p>No image available</p>
                }
            </div>

        </div>
    );
}