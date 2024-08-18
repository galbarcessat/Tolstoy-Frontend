import LoaderGIF from "../assets/imgs/LoaderGIF.gif";

export function Loader() {
    return (
        <div className="loader-container">
            <img src={LoaderGIF} alt="Loading..." />
        </div>
    );
}
