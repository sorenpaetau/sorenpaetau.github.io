var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.   Jekyll requires blog post files to be named according to the following format:   YEAR-MONTH-DAY-title.MARKUP   Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.   Jekyll also offers powerful support for code snippets:   def print_hi(name)   puts \"Hi, #{name}\" end print_hi('Tom') #=&gt; prints 'Hi, Tom' to STDOUT.  Check out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk.   ","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll/update/2024/07/03/welcome-to-jekyll/",
        "teaser": null
      },{
        "title": "",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/projects/dead/",
        "teaser": null
      },{
        "title": "D.E.A.D — Iowa Liquor Sales Analysis for Advocacy Targeting",
        "excerpt":"TL;DR  Problem: Where and when should D.E.A.D. focus outreach to reduce excessive drinking?  Solution: Built an interpretable ridge regression on Iowa Liquor Sales, grouped by city × date, with features for 10-days-pre-holiday, season, day-of-week, population bracket, college-town; tuned by 5-fold CV.  Impact: Final model achieved R² ≈ 0.43, quantifying spikes (e.g., pre-holiday, Thursdays) and dips (Sundays, winter) and providing a data-backed playbook for campaign timing and location.   Who this helps     Advocacy leaders planning outreach calendars and city targeting.   Policy &amp; operations teams needing clear, defensible coefficients rather than black-box scores.   My role     Led data prep, feature engineering, and model selection; evaluated grouping strategies; produced LaTeX deliverables and executive-level summaries.   Data &amp; features     Source: Iowa Liquor Sales (store-level orders with categories, volumes, prices).   Engineered features: 10-Days-Before-Holiday, Major-College-Town (Ames/Iowa City), Season, Day-of-Week, Population Bracket (bucketed city populations).   Aggregation: grouped to city × date to capture demand at the community level rather than single stores.   Model &amp; validation     Ridge Regression with λ = 100 (selected via 5-fold cross-validation on R²).   Compared feature sets; chose Day-of-Week over Weekend, Population Bracket over raw population, and 10-Days-Before-Holiday over Holiday.   Fixed train/validation splits; inspected residuals and coefficient stability.   Results     Goodness-of-fit: R² ≈ 0.43 on city-day volumes (gallons).   Pre-holiday effect: positive lift (~+20 gallons per city-day).   College towns: negative coefficient (caution: correlational, not causal).   Population: strong monotonic increase across brackets (largest cities +1.7k+ gallons vs smallest).   Seasonality: winter lower than fall; spring slightly higher.   Day-of-week: Thursday higher than Friday; Sunday markedly lower.   Architecture  ```ascii [Iowa Liquor Sales] → [Clean &amp; join population/holidays]                      → [City×Date aggregation]                      → [FE: season, DOW, pre-holiday, college-town, population bracket]                     → [Ridge Regression (CV/λ=100)] → [Coefficient-based insights]  ","categories": ["Projects"],
        "tags": ["Analytics","Regression","Feature Engineering","Public Data"],
        "url": "/projects/dead-liquor-analysis/",
        "teaser": null
      },{
        "title": "Current",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/projects/current/",
        "teaser": null
      },{
        "title": "LLM-Powered Procurement Analytics Pipeline",
        "excerpt":"Problem. Procurement data is messy and domain-specific.  Approach. Multi-agent pipeline (Profiler → Retriever → Analyst → Fact-Checker → LaTeX Writer).  Impact. Cut analyst time by ~60%; improved decision-readiness in pilot.   (Add screenshots/GIFs below—WebP preferred, &lt;1MB each.)  ","categories": [],
        "tags": ["LLM","LangChain","OpenAI","LaTeX"],
        "url": "/projects/llm-procurement-pipeline/",
        "teaser": null
      },{
        "title": "Assorted Research Projects",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/projects/research/",
        "teaser": null
      },{
        "title": "Spotify Listener Insights — Classic ML for Recommendations & Genre Analysis",
        "excerpt":"TL;DR  Problem: Understand and predict Spotify listening behavior using public datasets.  Solution: From-scratch classic ML: C4.5, Random Forest, KNN (adj-weighted), KMeans/DBSCAN, and Apriori—plus a full LaTeX write-up.  Impact: Random Forest outperformed C4.5 on test accuracy (~50.2% vs 43.1%); KMeans cleanly separated EDM/Rap/R&amp;B; association rules showed many paths end in Pop—useful for playlisting and marketing.   Who this helps     Recsys &amp; Data PMs: validates which classic methods reliably separate genres and where they fail.   Product &amp; Marketing: highlights cross-genre switching (e.g., many paths lead to Pop) for playlisting and campaigns.   My role     Led problem framing → data prep → modeling → evaluation → report.   Implemented and compared C4.5 vs Random Forest, tuned KMeans/DBSCAN, and built Apriori association analysis.   Owned the LaTeX write-up and stakeholder-friendly visuals.   Architecture  ```ascii [Public Spotify datasets]      → [Preprocess/normalize, select features]      → [Supervised: C4.5, Random Forest] ──→ [Per-genre metrics]     → [Unsupervised: KMeans, DBSCAN] ────→ [Cluster quality/coverage]     → [Association Rules: Apriori] ───────→ [Cross-genre switching]     → [Collaborative Filtering: Adjusted-Weighted KNN] → [Per-genre MAE]     → [LaTeX report]  ","categories": ["Projects"],
        "tags": ["Recommender Systems","KDD","Random Forest","C4.5","KMeans","DBSCAN","LaTeX"],
        "url": "/projects/spotify/",
        "teaser": null
      }]
