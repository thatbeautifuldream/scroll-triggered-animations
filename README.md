```bash
ffmpeg -i public/videos/shot-drone-10s-20s.webm -c:v libx264 -preset slow -crf 18 -g 1 -pix_fmt yuv420p -movflags +faststart -an public/videos/shot-drone-10s-20s.mp4
```

What each flag does:

- -i - Input file
- -c:v libx264 - Use H.264 codec (best browser support for seeking)
- -preset slow - Better compression/quality (slower encoding)
- -crf 18 - Quality level (lower = better, 18 is high quality)
- -g 1 - Keyframe every frame (critical for smooth scrubbing!)
- -pix_fmt yuv420p - Color format for wide compatibility
- -movflags +faststart - Move metadata to beginning for faster web loading
- -an - Remove audio (not needed for video scrubbing)

The most important flag for scrubbing performance is -g 1 which creates a keyframe on every single frame, allowing instant seeking without decoding delays.
