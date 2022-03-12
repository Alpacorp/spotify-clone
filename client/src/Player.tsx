import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

interface PlayerProps {
  accessToken: any;
  trackUri?: string;
}

const Player = ({ accessToken, trackUri }: PlayerProps) => {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);
  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  );
};

export default Player;
