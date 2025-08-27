---
layout: single
permalink: /projects/nasa-boiling-detection/
title: "NASA × Cal Poly — Boiling Detection from Accelerometer Signals"
excerpt: "Built a spectrogram‑CNN pipeline that detects boiling from accelerometers; 93.96% validation accuracy; designed with baselines and domain‑shift testing."
date: 2025-08-27
categories: [Projects]
tags: [Applied ML, Signal Processing, CNN, Aerospace]
classes: wide
author_profile: true
read_time: false
 toc: true
 toc_sticky: true
header:
  overlay_image: /assets/img/projects/nasa-boil/banner.webp
  overlay_filter: 0.35
teaser: /assets/img/projects/nasa-boil/teaser.webp
role: "AI Solutions Engineer (Applied ML)"
client: "NASA × Cal Poly (research collaboration)"
stack: [Python, MATLAB, NumPy/SciPy, scikit‑learn, FFT, CNN]
links:
  - label: "Slide Deck"
    icon: "fas fa-file-powerpoint"
    url: "/assets/demos/nasa-boil/nasa-presentation.pdf"
  - label: "Final Report (PDF)"
    icon: "fas fa-file-pdf"
    url: "/assets/demos/nasa-boil/final-report.pdf"
---

{: .notice--primary}
**TL;DR**  
**Problem:** Detect boiling inside rocket fuel tanks using only **external accelerometers** in noisy conditions.  
**Solution:** Signal‑processing → **log‑spectrogram** → **lightweight CNN** classifier, validated against **thresholding** and **random‑forest** baselines.  
**Impact:** **93.96%** validation accuracy on the main dataset; **only 1/224** true‑boiling samples misclassified as non‑boil; surfaced domain‑shift risks and a data plan for flight‑like conditions.

## Who this helps
- Mission assurance & test engineers who need earlier, reliable boil detection.  
- Aerospace data teams moving from lab signals to deployable classifiers.

## My role
- Translated research goals into an implementable ML pipeline (chunking, normalization, FFT/spectrograms, model training, evaluation).  
- Built and compared **classical baselines** to keep the approach pragmatic.  
- Designed **generalization checks** across experimental setups; packaged results for engineering leadership.

## Architecture
```ascii
[Accelerometers] → [Chunk windows] → [Normalize] → [FFT → Log‑Spectrogram]
                                                   ↘
                                             [Threshold/RF]
                                         → [CNN Classifier] → [Boil / No‑Boil]
````

## Results

* **Validation:** **93.96%** accuracy on normalized FFT/spectrogram features (25 epochs).
* **Error profile:** Confusion analysis shows the largest error source is **background noise → boiling** (false positives), while only **1/224** true‑boiling samples were missed.
* **Generalization:** New experimental setups (e.g., heater placement changes) reduced accuracy, highlighting **domain‑shift sensitivity** → informed a targeted data collection plan.

## Implementation notes

* Data: 10–50 kHz sampling; short window chunking; per‑window min‑max normalization.
* Features: Log‑spectrograms; optional frequency‑band reduction.
* Models: Compact CNN for primary classifier; **thresholding** and **random forest** as comparators.
* Evaluation: Fixed splits, confusion matrices, simple robustness checks (noise augmentations).

## What I’d do next

* Expand coverage near onset‑of‑boiling; calibrate thresholds for **accept/hold** decisions.
* Export ONNX/TFLite for edge; add drift monitors and operator prompts for out‑of‑distribution events.

```


```
