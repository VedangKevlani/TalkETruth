# TalkETruth
# Talk e Truth

**Tagline:** *“Speak your voice. Own your confidence.”*

Talk e Truth is an **offline-first application** designed to help students and professionals build **English speaking confidence** through structured read-aloud practice. The app tracks personalized metrics—such as pacing, pauses, expressive range, and sentence completion—to compute a **Confidence Score (ECS)**, providing **encouraging, non-judgmental feedback** while celebrating Jamaican accents, Patois, and parish intonations.

## Features

- **Offline Audio Recording:** Capture reading sessions locally using your microphone.  
- **Speech Analysis:** Measure pause control, pacing, volume consistency, expressive range, and sentence completion.  
- **Confidence Scoring:** ECS (English Confidence Score) computed per session to track progress.  
- **Student Dashboard:** Trend visualization of ECS over time with positive feedback.  
- **Teacher Dashboard:** Class overview, individual student progress, and assignment management.  
- **Practice Modes:** Read-aloud exercises, exposure challenges, and mock interviews/debates.  
- **Cultural Sensitivity:** Fully respects Jamaican accents and Patois; no accent correction or shaming.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/talk-e-truth.git
pip install -r requirements.txt
python main.py
```
## Usage

Open the app and record a reading session.
Audio is analyzed locally using Librosa + Parselmouth.
ECS is computed and displayed along with metric breakdown.
Positive feedback is provided to reinforce confidence.
Teachers can view class trends and individual student progress offline.

## Technologies & Tools

Audio Recording: Sounddevice / PyAudio
Audio Processing: PyDub, Librosa, Parselmouth
Offline Transcription (optional): Vosk / Coqui STT
Data & ECS Calculation: NumPy, Pandas
Visualization & Dashboards: Matplotlib, Seaborn, Tkinter
Offline First: Designed to work without internet; optional online APIs for advanced transcription.

Project Roadmap

## MVP Goals:

 - Capture read-aloud audio offline
 - Compute ECS with weighted metrics
 - Student dashboard with ECS trends and feedback
 - Teacher dashboard for class overview
 - Practice modes: exposure / mock interviews / debates
 - Optional online transcription integration
 - Expand Jamaican literature & culturally relevant prompts

## Contributing

Contributions are welcome! If you want to:
- Improve ECS metrics
- Add new practice modes
- Enhance dashboard UI
- Optimize offline performance

Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See LICENSE
 for details.

## Contact

Created by Vedang Kevlani – feel free to reach out for collaboration or pilot testing in schools/youth programs.
