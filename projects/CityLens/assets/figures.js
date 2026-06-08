export const resultSections = [
  {
    id: "feature-regression",
    label: "Feature-Based Regression",
    heading: "Overall performance on feature-based regression",
    text:
      "CityLens poses a substantial challenge for current LVLMs even when they are used as visual feature extractors rather than direct numerical predictors. The strongest results appear on indicators with clearer visual correlates, including building height, public transport, and GDP, where street-level structure, infrastructure, and urban form provide more reliable cues. In contrast, mental health, life expectancy, and other latent social outcomes remain difficult because their causes are only weakly and indirectly visible in urban imagery.",
    figures: [
      {
        title: "Table 1",
        src: "./assets/images/bar_image/figure4.5.png",
        alt: "CityLens feature-based regression result table",
        caption:
          "Main results for the Feature-Based Regression method. Values are R² scores across 11 tasks; Mean and SD summarize overall performance, with bold and underline marking the best and second-best results in each row.",
      },
    ],
  },
  {
    id: "direct-normalized",
    label: "Direct vs. Normalized",
    heading: "Direct metric prediction and normalized estimation",
    text:
      "Direct Metric Prediction and Normalized Metric Estimation evaluate two different forms of numerical grounding. Direct prediction asks the model for an exact socioeconomic value, while normalized estimation converts the target into a 0.0-9.9 level and emphasizes relative ordering. The comparison shows that no single formulation dominates all tasks: normalized estimation is more helpful when visual cues are weak and coarse ranking is easier, while direct prediction is more effective for indicators with stronger visual or contextual anchors, such as house price, public transport, and accessibility to healthcare.",
    figures: [
      {
        title: "Figure 5",
        src: "./assets/images/bar_image/figure5.png",
        alt: "CityLens direct and normalized estimation comparison",
        fit: "smallest",
        caption:
          "Comparison of task-wise R² performance between Direct Metric Prediction and Normalized Estimation across 11 socioeconomic indicators in CityLens.",
      },
    ],
  },
  {
    id: "geography-inputs",
    label: "Geography & Inputs",
    heading: "Geographic variation and input composition",
    text:
      "Prediction quality varies sharply across cities, indicating that visual socioeconomic sensing depends on both urban morphology and the alignment between appearance and ground-truth indicators. Cities with clearer visual stratification and more consistent street view coverage tend to produce stronger GDP prediction results, while visually mixed or sparsely covered cities are more difficult. The input studies also show that street view imagery contributes dense semantic evidence, and increasing the number of street view images gives the model a broader view of each region.",
    figures: [
      {
        title: "Figure 6(a)",
        src: "./assets/images/bar_image/figure6-1.png",
        alt: "CityLens city-level GDP prediction results",
        caption:
          "(a) shows the results of the GDP prediction task across 13 different cities.",
      },
      {
        title: "Figure 6(b-c)",
        src: "./assets/images/bar_image/figure6-2.png",
        alt: "CityLens input modality and street view quantity analysis",
        caption:
          "(b) presents the results showing that satellite imagery has limited impact on prediction. (c) demonstrates that increasing the number of street view images leads to progressive improvement in predictive performance.",
      },
    ],
  },
  {
    id: "reasoning-architecture",
    label: "Reasoning & Architecture",
    heading: "Reasoning prompts, reasoning models, and vision encoders",
    text:
      "Reasoning strategies do not uniformly improve urban socioeconomic prediction. Chain-of-Thought prompting can help on visually and semantically complex tasks such as house price, but it may reduce performance when the task depends more on direct visual evidence than extended reasoning. Reasoning-specialized models also show task-specific strengths rather than consistent superiority. The architecture comparison highlights the importance of the visual backbone: CLIP-based encoders provide more useful and semantically aligned visual features for downstream socioeconomic prediction.",
    figures: [
      {
        title: "Figure 7",
        src: "./assets/images/bar_image/figure7.png",
        alt: "CityLens reasoning prompt, reasoning model, and vision encoder comparison",
        caption:
          "(a) Model performance with and without CoT prompting. (b) Performance of reasoning models. (c) Comparison of different vision encoders used within the evaluated models.",
      },
    ],
  },
  {
    id: "errors-finetuning",
    label: "Errors & Fine-Tuning",
    heading: "Error analysis and the potential of fine-tuned LVLMs",
    text:
      "Representative failures reveal two major bottlenecks: fine-grained visual grounding and higher-level reasoning over urban context. Models can miss small but important objects, hallucinate visual elements, underestimate visible greenery, or focus on a small subset of cues while ignoring broader environmental context. Supervised fine-tuning on CityLens data substantially improves results across most evaluated tasks, suggesting that domain adaptation can help LVLMs learn the specific visual and socioeconomic relationships required for this benchmark.",
    figures: [
      {
        title: "Figure 8",
        src: "./assets/images/bar_image/figure8.png",
        alt: "CityLens representative error cases",
        caption:
          "Representative error cases from Feature-Based Regression and CoT Prompting.",
      },
      {
        title: "Table 2",
        src: "./assets/images/bar_image/figure8.5.png",
        alt: "CityLens fine-tuned LVLM result table",
        caption:
          "Results of Fine-Tuned LVLMs on the CityLens Benchmark.",
      },
    ],
  },
];
