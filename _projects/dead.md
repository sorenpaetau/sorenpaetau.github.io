---
layout: single
permalink: /projects/dead-liquor-analysis/
title: "D.E.A.D — Iowa Liquor Sales Analysis for Advocacy Targeting"
excerpt: "Ridge regression on Iowa Liquor Sales with city–day grouping and interpretable features (holidays, season, day-of-week, population, college towns) to quantify when/where alcohol purchases spike."
date: 2025-08-27
categories: [Projects]
tags: [Analytics, Regression, Feature Engineering, Public Data]
classes: wide
author_profile: true
read_time: false
toc: true
toc_sticky: true
header:
  overlay_image: /assets/img/projects/dead/banner.webp
  overlay_filter: 0.35
teaser: /assets/img/projects/dead/teaser.webp
role: "AI Solutions Engineer (Data Science)"
client: "Drinking Excess Alcohol is Dangerous (D.E.A.D.) — Cal Poly client"
stack: [Python, pandas, scikit-learn, Ridge Regression, Cross-Validation, LaTeX]
links:
  - label: "Final Report (PDF)"
    icon: "fas fa-file-pdf"
    url: "/assets/demos/dead/deadreport.pdf"
  - label: "Project Proposal"
    icon: "fas fa-file-alt"
    url: "/assets/demos/dead/deadproposal.pdf"
---

{: .notice--primary}
**TL;DR**  
**Problem:** Where and when should D.E.A.D. focus outreach to reduce excessive drinking?  
**Solution:** Built an interpretable **ridge regression** on **Iowa Liquor Sales**, grouped by **city × date**, with features for **10-days-pre-holiday, season, day-of-week, population bracket, college-town**; tuned by **5-fold CV**.  
**Impact:** Final model achieved **R² ≈ 0.43**, quantifying spikes (e.g., **pre-holiday**, **Thursdays**) and dips (**Sundays**, **winter**) and providing a data-backed playbook for campaign timing and location.

## Who this helps
- Advocacy leaders planning outreach calendars and city targeting.
- Policy & operations teams needing clear, defensible coefficients rather than black-box scores.

## My role
- Led data prep, feature engineering, and model selection; evaluated grouping strategies; produced LaTeX deliverables and executive-level summaries.

## Data & features
- Source: Iowa Liquor Sales (store-level orders with categories, volumes, prices).  
- Engineered features: **10-Days-Before-Holiday**, **Major-College-Town** (Ames/Iowa City), **Season**, **Day-of-Week**, **Population Bracket** (bucketed city populations).  
- Aggregation: **grouped to city × date** to capture demand at the community level rather than single stores.

## Model & validation
- **Ridge Regression** with λ = **100** (selected via **5-fold cross-validation** on R²).  
- Compared feature sets; chose **Day-of-Week over Weekend**, **Population Bracket over raw population**, and **10-Days-Before-Holiday over Holiday**.  
- Fixed train/validation splits; inspected residuals and coefficient stability.

## Results
- **Goodness-of-fit:** **R² ≈ 0.43** on city-day volumes (gallons).  
- **Pre-holiday effect:** positive lift (~**+20 gallons** per city-day).  
- **College towns:** negative coefficient (caution: correlational, not causal).  
- **Population:** strong monotonic increase across brackets (largest cities **+1.7k+ gallons** vs smallest).  
- **Seasonality:** **winter** lower than fall; **spring** slightly higher.  
- **Day-of-week:** **Thursday** higher than Friday; **Sunday** markedly lower.

## Architecture
```ascii
[Iowa Liquor Sales] → [Clean & join population/holidays] 
                    → [City×Date aggregation] 
                    → [FE: season, DOW, pre-holiday, college-town, population bracket]
                    → [Ridge Regression (CV/λ=100)] → [Coefficient-based insights]
