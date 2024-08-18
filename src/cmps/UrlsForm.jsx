import { useState } from 'react';

export function UrlsForm() {
    const [urls, setUrls] = useState(['', '', ''])

    function handleUrlChange(index, value) {
        const newUrls = [...urls]
        newUrls[index] = value
        setUrls(newUrls)
    };

    function handleAddUrl() {
        setUrls([...urls, ''])
    };

    function handleSubmit(event) {
        event.preventDefault()
        if (urls.some(url => !url)) {
            // alert('Please fill out all URL fields.');
        } else {
            onSubmit(urls)
        }
    };

    return (
        <form >
            {urls.map((url, index) => (
                <div key={index}>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => handleUrlChange(index, e.target.value)}
                        placeholder={`Enter URL ${index + 1}`}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddUrl}>Add Another URL</button>
            <button type="submit">Submit</button>
        </form>
    );
}
