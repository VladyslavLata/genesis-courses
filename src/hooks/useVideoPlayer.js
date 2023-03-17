import { useEffect } from 'react';
import Hls from 'hls.js';

export const useVideoPlayer = ({ linkVideo, id }) => {
  // const [hls, setHls] = useState();
  const videoElement = document.getElementById(id);

  useEffect(() => {
    // const dd = () => {
    let hls = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log(
          'manifest loaded, found ' + data.levels.length + ' quality level'
        );
      });
      hls.loadSource(`${linkVideo}`);
      // bind them together
      hls.attachMedia(videoElement);
    }
    // };
    // dd();

    // return () => {
    //   dd().destroy();
    // };
  }, [linkVideo, videoElement]);
};
