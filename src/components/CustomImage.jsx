export const CustomImage = ({imageSource, alt, width="100%", height="100%"}) => {
    return (
        <div className="relative inline-block group cursor-pointer">
            {/* Layer Shadow */}
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[var(--primary-color)] group-hover:translate-x-0 group-hover:translate-y-0"></span>

            {/* Layer Border + Background */}
            <span className="absolute inset-0 w-full h-full bg-[var(--foreground-color)] border-2 border-[var(--primary-color)] group-hover:bg-[var(--primary-color)]"></span>

            {/* Gambar Utama */}
            <img
                src={imageSource}
                alt={alt}
                className="relative border-2 border-[var(--primary-color)] block group-hover:brightness-125 transition"
                style={{width, height}}
            />
        </div>
    )
}