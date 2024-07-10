import os
from taskweaver.plugin import Plugin, register_plugin

@register_plugin
class ExtractAudioPlugin(Plugin):
    def __call__(self, video_path: str, output_path: str ="audio.wav"):
        """
        Extracts the audio from video files in a directory and saves them as WAV files.

        Args:
            video_path: Path to the directory containing the video files.
            output_path: Path to save the extracted audio files (default: "audio.wav").
        """
        try:
            from moviepy.editor import VideoFileClip
        except ImportError:
            raise ImportError("Please install moviepy first.")
        # Get a list of files in the directory
        files = os.listdir(video_path)

        # Loop through the files
        for file in files:
            # Check if the file is a video file
            if file.endswith(".mp4") or file.endswith(".avi") or file.endswith(".mov"):
                # Construct the full path to the video file
                video_file = os.path.join(video_path, file)

                # Load the video
                video = VideoFileClip(video_file)

                # Extract the audio
                audio = video.audio

                # Construct the output path for the audio file
                audio_file = os.path.splitext(file)[0] + ".wav"
                output_file = os.path.join(output_path, audio_file)

                # Write the audio to a file
                audio.write_audiofile(output_file)

                return f"Audio extracted from {file} and saved as {output_file}."
