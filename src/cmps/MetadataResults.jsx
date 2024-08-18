import { MetadataList } from "./MetadataList";

export function MetadataResults({ metadata }) {
    return (
        <div className="metadata-results">
            <h1>Metadata Results :</h1>
            <MetadataList metadata={metadata}/>
        </div>
    )
}
