import ReactPlayer from "react-player";
import { toast } from "react-toastify";

interface VideoPlayerParams {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerParams) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url || "preview.jpeg"}
        width="100%"
        height="100%"
        controls={true}
        light={true}
        onClickPreview={() => {
          if (!url) {
            toast.error("No video choosen please choose video to preview");
          }
        }}

        //light={true}
      />
    </div>
  );
}
