# Split the video to one minute shorts 
import os
from taskweaver.plugin import Plugin, register_plugin


@register_plugin
class SplitVideoPlugin(Plugin):
    def __call__(self, video_path: str, output_dir: str, duration: int=60):
        try:
            import cv2
        except ImportError:
            raise ImportError("Please install cv2 first.")
        """
        Splits a video into one minute segments.

        Args:
            video_path: Path to the input video file.
            output_dir: Directory to save the split video segments.
            duration: Duration of each segment in seconds (default: 60 seconds = 1 minute).
        """

        # Create the output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)

        # Read the video
        video = cv2.VideoCapture(video_path)

        # Get video properties
        fps = video.get(cv2.CAP_PROP_FPS)
        total_frames = int(video.get(cv2.CAP_PROP_FRAME_COUNT))

        # Calculate the number of frames per segment
        frames_per_segment = int(fps * duration)

        # Iterate over the video and split into segments
        segment_count = 1
        current_frame = 0
        while current_frame < total_frames:
            # Write the current segment
            output_path = os.path.join(output_dir, f"segment_{segment_count}.mp4")
            output_video = cv2.VideoWriter(output_path, cv2.VideoWriter_fourcc(*'mp4v'), fps, (int(video.get(3)), int(video.get(4))))        

            # Write frames to the segment
            for _ in range(frames_per_segment):
                ret, frame = video.read()
                if not ret:
                    break
                output_video.write(frame)

                # Close the output video
                output_video.release()

                # Increment the segment count and current frame
                segment_count += 1
                current_frame += frames_per_segment

        # Release the video capture
        video.release()