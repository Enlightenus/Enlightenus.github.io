## Portfolio

---

## Ongoing Projects

[Project 1 - Human Resource Data Analysis](https://github.com/Enlightenus/Human_Resources_Data_Analysis)

### Pay Gap Investigation

Nowadays, employers need to ensure that employees are treated fairly and equitably.
For example, **California Equal Pay Act** against unequal pay based on sex, race, or ethnicity.
Also, employers with at least 100 employees needs to annually report pay, demographic, and other workforce data to the Civil Rights Department.

**Do employees with different genders receive equal salary?**

Visualize the Department-wise Salary(Mean) by Gender
<img src="images\HR\HR1-DeptByGender.png?raw=true"/>

Perform ANOVA to examine the variance within and between groups
<img src="images\HR\HR2-ANOVA.png?raw=true"/>

<img src="images\HR\HR3-PostHoc.png?raw=true"/>

Visualize the significance in heatmap to show the group-wise difference
<img src="images\HR\HR4-Significance.png?raw=true"/>

### Recruitment Analysis

**What's major recruitment sources?**

<img src="images\HR\HR5-Recruitment.png?raw=true"/>

**Do we have recruitment preference between department?**

Visualize the recruitment sources by department.
<img src="images\HR\HR6-DeptRecruitment.png?raw=true"/>

<img src="images\HR\HR7-RecruitmentAction.png?raw=true"/>

### Performance Analysis

How's the employees' performance in each department?
<img src="images\HR\HR8-Performance.png?raw=true"/>

Visualize the performance with percentage annotation
<img src="images\HR\HR9-PerformancePercent.png?raw=true"/>
As observed, most employees (>70%) rated as fully meets or higher in performance.
Interestingly, we observed 100% in Admin office, so we will check the original data and confirm with Admin Office if needed.


---

---

## Projects
[Project 1 - Heart Disease Prediction](https://github.com/Enlightenus/Heart_disease_prediction)

Visualize the distribution.
<img src="images\Heart_Disease\Heart1-DataDistribution.png?raw=true"/>

Start with known risk factors: Cholesterol and Age.
<img src="images\Heart_Disease\Heart2-Scatter.png?raw=true"/>

<img src="images\Heart_Disease\Heart3-Swarm.png?raw=true"/>

<img src="images\Heart_Disease\Heart4-Violin.png?raw=true"/>

<img src="images\Heart_Disease\Heart5-Alpha.png?raw=true"/>

### Build Decision Tree Model

<img src="images\Heart_Disease\Heart6-DT.png?raw=true"/>

Among all symptoms, the **Chest Pain Type** and **ST depression** are more important. Interestingly, the cholesterol is not as important in prediction as we thought.

<img src="images\Heart_Disease\Heart7-Feature.png?raw=true"/>

<img src="images\Heart_Disease\Heart8-ClassificationReport.png?raw=true"/>

<img src="images\Heart_Disease\Heart9-ConfusionMatrix.png?raw=true"/>

---

---

[Project 2 - COVID Visualization](https://github.com/Enlightenus/COVID_Visualization)

**How severe is COVID in the US?**

Visualize the COVID cases and deaths in the US
<img src="images\COVID\COVID1-UScases.png?raw=true"/>
<img src="images\COVID\COVID2-USdeaths.png?raw=true"/>

**How severe is COVID by continents?**

Visualize the COVID cases by continents
<img src="images\COVID\COVID3-Cases.png?raw=true"/>
<img src="images\COVID\COVID4-CasesStacked.png?raw=true"/>

List Top 10 Countries with most COVID cases in the Europe
<img src="images\COVID\COVID5-EuropeTop10.png?raw=true"/>

The **7-day moving average** of daily reported cases is an important indicator to track the COVID spread out.
List one country in each continent and track the cases with 7-day average.
<img src="images\COVID\COVID6-SevenAvg.png?raw=true"/>

Track accumulated COVID cases number in Europe
<img src="images\COVID\COVID7-EuropeCasesChoropleth.gif?raw=true"/>

Track accumulated COVID cases number in the US
<img src="images\COVID\COVID8-USCasesMap.png?raw=true"/>
Among states, California has most COVID cases(9.35M), followed by Texas(6.79M), Florida(5.99M) and New York(5.26M).
California, Texas, Florida and New York are states known for large population.
Therefore, we can further examine the relationship between population and COVID cases.

To investigate the correlation between population and the COVID cases in the US.
We can use bubble chart to present population data vs cases per capita data

State population data collected from U.S. Census Bureau, Release Date: December 2023
https://www.census.gov/data/tables/time-series/demo/popest/2020s-state-total.html
Here, due to lack a full year data in 2023, using 2022 data for calculation.
<img src="images\COVID\COVID9-USBubbleChart.png?raw=true"/>

In this bubble chart, we can observe that higher population does correlate with higher COVID cases; however, we can also noticed that some places with highest cases per capita is actually in the area with lower resident population.
Among these three area, Rhode Island is expected since it's a popular spot for tourism. However, Alaska and North Dakota is not explainable by the visitors. Therefore, these two places will be a good target for further investigation in public health policy.

---
<p style="font-size:11px">Page template forked from <a href="https://github.com/evanca/quick-portfolio">evanca</a></p>
<p style="font-size:11px">Icon from <a href="https://Vecteezy.com">Vecteezy</a></p>

<!-- Remove above link if you don't want to attibute -->
