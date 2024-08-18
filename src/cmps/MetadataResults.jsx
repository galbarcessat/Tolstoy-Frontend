import { MetadataList } from "./MetadataList";

export function MetadataResults({ metadata }) {
    return (
        <div className="metadata-results">
            <h1 className="results-title">Metadata Results :</h1>
            <MetadataList metadata={metadata}/>
        </div>
    )
}
