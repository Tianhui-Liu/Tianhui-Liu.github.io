export const figures = [
  {
    title: "Figure 3",
    src: "./assets/images/bar_image/figure3.png",
    alt: "CityLens Figure 3",
    caption:
      "Selected socioeconomic indicators and dataset statistics. The figure summarizes the 11 prediction tasks in CityLens and reports image counts, geographic scale, and evaluation regions for each task.",
  },
  {
    title: "Figure 4",
    src: "./assets/images/bar_image/figure4.png",
    alt: "CityLens Figure 4",
    caption:
      "Prompt examples for the three evaluation methodologies: Direct Metric Prediction, Normalized Metric Estimation, and Feature-Based Regression.",
  },
  {
    title: "Table 1",
    src: "./assets/images/bar_image/figure4.5.png",
    alt: "CityLens Table 1",
    caption:
      "Main results for the Feature-Based Regression method. Values are R² scores across 11 tasks; Mean and SD summarize overall performance, with bold and underline marking the best and second-best results in each row.",
  },
  {
    title: "Figure 5",
    src: "./assets/images/bar_image/figure5.png",
    alt: "CityLens Figure 5",
    fit: "smallest",
    caption:
      "Task-wise R² comparison between Direct Metric Prediction and Normalized Metric Estimation across the 11 CityLens socioeconomic indicators.",
  },
  {
    title: "Figure 6(a)",
    src: "./assets/images/bar_image/figure6-1.png",
    alt: "CityLens Figure 6(a)",
    caption:
      "City-level GDP prediction results across 13 cities under Feature-Based Regression, showing substantial geographic variation in predictive performance.",
  },
  {
    title: "Figure 6(b-c)",
    src: "./assets/images/bar_image/figure6-2.png",
    alt: "CityLens Figure 6(b-c)",
    caption:
      "Input composition analysis. Street view imagery performs comparably to street view plus satellite imagery, while increasing the number of street view images progressively improves prediction performance.",
  },
  {
    title: "Figure 7(a-b)",
    src: "./assets/images/bar_image/figure7-1.png",
    alt: "CityLens Figure 7(a-b)",
    caption:
      "Reasoning experiments comparing standard and CoT prompting, plus performance of reasoning models on difficult normalized-estimation tasks.",
  },
  {
    title: "Figure 7(c)",
    src: "./assets/images/bar_image/figure7-2.png",
    alt: "CityLens Figure 7(c)",
    fit: "smaller",
    caption:
      "Vision encoder comparison under Feature-Based Regression. CLIP-based visual features are the most informative among the evaluated encoders for urban socioeconomic sensing.",
  },
  {
    title: "Figure 8",
    src: "./assets/images/bar_image/figure8.png",
    alt: "CityLens Figure 8",
    caption:
      "Representative error cases from Feature-Based Regression and CoT prompting, illustrating failures in fine-grained visual grounding and holistic environmental reasoning.",
  },
  {
    title: "Table 2",
    src: "./assets/images/bar_image/figure8.5.png",
    alt: "CityLens Table 2",
    caption:
      "Fine-tuned LVLM results on the CityLens benchmark. Domain-adapted models achieve consistently stronger R² scores across most evaluated tasks, highlighting the potential of specialized LVLMs for this setting.",
  },
];
