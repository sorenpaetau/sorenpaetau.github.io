---
layout: single
permalink: /projects/spotify/
title: "Spotify Listener Insights — Classic ML for Recommendations & Genre Analysis"
excerpt: "Public Spotify data → association rules, clustering, and genre prediction. Implemented classic algorithms from scratch and delivered a LaTeX report with clear, data-driven takeaways."
date: 2025-08-27
categories: [Projects]
tags: [Recommender Systems, KDD, Random Forest, C4.5, KMeans, DBSCAN, LaTeX]
classes: wide
author_profile: true
read_time: false
toc: true
toc_sticky: true
header:
  overlay_image: /assets/img/projects/spotify-ml/banner.webp
  overlay_filter: 0.35
teaser: /assets/img/projects/spotify-ml/teaser.webp
role: "AI Solutions Engineer (Team Lead, Applied ML)"
client: "Cal Poly — CSC 466 (team of five)"
stack: [Python, pandas, NumPy, scikit-learn, Apriori, C4.5, RandomForest, KMeans, DBSCAN, LaTeX]
links:
  - label: "Report (PDF)"
    icon: "fas fa-file-pdf"
    url: "/assets/demos/spotify-ml/spotifyreport.pdf"
---

{: .notice--primary}
**TL;DR**  
**Problem:** Understand and predict Spotify listening behavior using public datasets.  
**Solution:** From-scratch classic ML: C4.5, Random Forest, KNN (adj-weighted), KMeans/DBSCAN, and Apriori—plus a full LaTeX write-up.  
**Impact:** Random Forest outperformed C4.5 on test accuracy (~**50.2%** vs **43.1%**); KMeans cleanly separated **EDM/Rap/R&B**; association rules showed many paths **end in Pop**—useful for playlisting and marketing.

## Who this helps
- **Recsys & Data PMs:** validates which classic methods reliably separate genres and where they fail.
- **Product & Marketing:** highlights **cross-genre switching** (e.g., many paths lead to **Pop**) for playlisting and campaigns.

## My role
- Led **problem framing → data prep → modeling → evaluation → report**.
- Implemented and compared **C4.5** vs **Random Forest**, tuned KMeans/DBSCAN, and built **Apriori** association analysis.
- Owned the **LaTeX** write-up and stakeholder-friendly visuals.

## Architecture
```ascii
[Public Spotify datasets] 
    → [Preprocess/normalize, select features] 
    → [Supervised: C4.5, Random Forest] ──→ [Per-genre metrics]
    → [Unsupervised: KMeans, DBSCAN] ────→ [Cluster quality/coverage]
    → [Association Rules: Apriori] ───────→ [Cross-genre switching]
    → [Collaborative Filtering: Adjusted-Weighted KNN] → [Per-genre MAE]
    → [LaTeX report]
