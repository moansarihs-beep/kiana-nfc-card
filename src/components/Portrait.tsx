export function Portrait() {
  return (
    <div className="portrait-wrap anim-portrait">
      <div className="portrait-ring">
        <div className="portrait-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kiana.jpg?v=2"
            alt="Portrait of Kiana Shams"
            width={1122}
            height={1402}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{
              objectPosition: "center top",
              transform: "scale(1.18) translate(-2%, 6%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
