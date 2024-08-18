import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

export function UrlsForm({ handleUrlsSubmit }) {
    const [urls, setUrls] = useState(['', '', ''])

    function handleUrlChange(index, value) {
        const newUrls = [...urls]
        newUrls[index] = value
        setUrls(newUrls)
    }

    function handleAddUrl() {
        setUrls([...urls, ''])
    }

    function handleRemoveUrl(index) {
        const newUrls = urls.filter((_, i) => i !== index);
        setUrls(newUrls);
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (urls.some(url => !url)) {
            // alert('Please fill out all URL fields.')
        } else {
            handleUrlsSubmit(urls)
        }
    }

    return (
        <div className='form-container'>
            <h1>Enter URLs to Fetch Metadata : </h1>
            <form onSubmit={handleSubmit}>

                {urls.map((url, index) => {
                    return (
                        <div className='input-container' key={index}>
                            <TextField
                                fullWidth
                                type='url'
                                variant="outlined"
                                sx={{ width: '330px' }}
                                label={`Enter URL ${index + 1}`}
                                value={url}
                                onChange={(e) => handleUrlChange(index, e.target.value)}
                                required
                            />

                            {index >= 3 && (
                                <IconButton
                                    onClick={() => handleRemoveUrl(index)}
                                    color="error"
                                    aria-label="remove"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            )}
                        </div>
                    )
                })}

                <div className='btns-container'>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: 'none' }}
                        endIcon={<AddIcon />}
                        onClick={handleAddUrl}

                    >
                        Add Another URL
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{ textTransform: 'none' }}
                    >
                        Submit
                    </Button>
                </div>

            </form>
        </div>
    )
}
