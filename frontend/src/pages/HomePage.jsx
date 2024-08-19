import { useState } from "react";
import { MetadataResults } from "../cmps/MetadataResults";
import { UrlsForm } from "../cmps/UrlsForm";
import { urlService } from "../services/url.service.local";
import { Loader } from "../cmps/Loader";

export function HomePage() {
    const [metadata, setMetadata] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleUrlsSubmit(urls) {
        try {
            setIsLoading(true)
            setError(null)
            setMetadata([])
            const res = await urlService.getMetadata(urls)
            setMetadata(res)
        } catch (err) {
            setError('Failed to fetch metadata. Please try again.');
        } finally {
            setIsLoading(false)
        }
    }

    console.log('metadata:', metadata)
    return (
        <div className="home-page-container">
            <UrlsForm handleUrlsSubmit={handleUrlsSubmit} />
            {error && <p className="error-msg">{error}</p>}
            {isLoading && <Loader/>}
            {(metadata && metadata.length > 0) && <MetadataResults metadata={metadata} />}
        </div>
    )
}