export const GoogleMapEmbed = () => {
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: '56.25%' }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11333.421882723911!2d-108.7581884!3d44.7531647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534953d6c1779d2d%3A0xfbdd611e3506b309!2sLazy%20K9%20Grooming!5e0!3m2!1sen!2sus!4v1726170750238!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                    border: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
                allowFullScreen={false}
                loading="lazy"
                aria-hidden="false"
            ></iframe>
        </div>
    );
};
