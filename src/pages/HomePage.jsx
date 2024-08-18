import { useState } from "react";
import { MetadataResults } from "../cmps/MetadataResults";
import { UrlsForm } from "../cmps/UrlsForm";
import { urlService } from "../services/url.service.local";

export function HomePage() {
    const [metadata, setMetadata] = useState([])
    const [error, setError] = useState(null)

    async function handleUrlsSubmit(urls) {
        try {
            setError(null)
            const { data } = await urlService.getMetadata(urls)
            setMetadata(data)
        } catch (err) {
            setError('Failed to fetch metadata. Please try again.');
        }
    };

    return (
        <div className="home-page-container">
            <UrlsForm handleUrlsSubmit={handleUrlsSubmit} />
            {error && <p className="error-msg">{error}</p>}
            {(metadata && metadata.length < 0) && <MetadataResults />}
        </div>
    )
}