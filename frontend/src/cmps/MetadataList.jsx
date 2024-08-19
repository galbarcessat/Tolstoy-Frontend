import { MetadataPreview } from "./MetadataPreview";

export function MetadataList({ metadata }) {
    return (
        <div className="metadata-list">
            {metadata.map((data, index) => (
                <MetadataPreview key={index} data={data} />
            ))}
        </div>
    );
}
