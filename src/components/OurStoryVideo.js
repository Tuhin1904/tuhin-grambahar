function OurStoryVideo({ className = '', videoClassName = '' }) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        width="1920"
        height="1080"
        autoPlay
        loop
        muted
        poster="/videos/grambahar-out-story-cover.webp"
        className={videoClassName}
      >
        <source src="/videos/grambahar-out-story-sm.webm" type="video/webm" media="(max-width: 850px)" />
        <source src="/videos/grambahar-out-story.webm" type="video/webm" media="(min-width: 851px)" />
      </video>
    </div>
  );
}

export default OurStoryVideo;
