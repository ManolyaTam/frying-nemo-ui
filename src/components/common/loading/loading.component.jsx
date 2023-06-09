import './loading.css';
const Loading = () => {
    return (
        <div className="loader loader--style2" title="1">
            <svg id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60px" height="60px" >
                <path fill="#ff5e03" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                    <animateTransform attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.6s"
                        repeatCount="indefinite" />
                </path>
            </svg>
        </div>
    );
};

export default Loading;