import Hls from 'hls.js';

export const videoPlayerInit = (link, videoElement, startPosition) => {
  let hls = null;
  if (Hls.isSupported()) {
    hls = new Hls({ startPosition: startPosition });
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {});
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {});
    hls.loadSource(`${link}`);
    hls.attachMedia(videoElement);
  }
  return hls;
};
