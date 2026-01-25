
export const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "Vite + React development to replace my Jekyll portfolio.",
        tags: ["React", "Vite", "CSS"],
        image: "portfolio.png",
        content: `![Not Available Yet!](/under-construction.png)`
    },
    {
        id: 2,
        title: "Heart Disease Prediction",
        description: "Developed a predictive machine learning model to identify critical heart disease risk factors.",
        tags: ["Machine Learning", "Predictive Analytics", "Clinical", "Scikit-Learn"],
        image: "Heart9-ConfusionMatrix.png",
        content: `
[Project - Heart Disease Prediction](https://github.com/Enlightenus/Heart_disease_prediction)

Visualize the distribution.
![Data distribution](/Heart1-DataDistribution.png )

Start with known risk factors: Cholesterol and Age.
![Scatter Plot](/Heart2-Scatter.png)
![Cholesterol level](/Heart3-Swarm.png)
![Cholesterol level byChest Painin](/Heart4-Violin.png)
![Accuracy](/Heart5-Alpha.png)


### Build Decision Tree Model

![Decision Tree Model](/Heart6-DT.png)

Among all symptoms, the **Chest Pain Type** and **ST depression** are more important. Interestingly, the cholesterol is not as important in prediction as we thought.

![Feature engineering](/Heart7-Feature.png)

![Classification Report.png](/Heart8-ClassificationReport.png)


![Evaluation](Heart9-ConfusionMatrix.png)
`
    },
    {
        id: 3,
        title: "COVID Visualization",
        description: "Building visualization to track how severe is COVID in the US",
        tags: ["Data Visualization", "Plotly"],
        image: "COVID7-EuropeCasesChoropleth.gif",
        content: `

[Project 2 - COVID Visualization](https://github.com/Enlightenus/COVID_Visualization)

**How severe is COVID in the US?**

Visualize the COVID cases and deaths in the US
![COVID cases in the US](/COVID1-UScases.png)
![COVID death count in the US](/COVID2-USdeaths.png)


**How severe is COVID by continents?**

Visualize the COVID cases by continents
![COVID cases by continents](/COVID3-Cases.png)
![COVID cases stacked](/COVID4-CasesStacked.png)


List Top 10 Countries with most COVID cases in the Europe
![Top 10 countries with most COVID cases in Europe.png](/COVID5-EuropeTop10.png)

The **7-day moving average** of daily reported cases is an important indicator to track the COVID spread out.
List one country in each continent and track the cases with 7-day average.
![Seven day moving average](/COVID6-SevenAvg.png )

Track accumulated COVID cases number in Europe
![Choropleth Map in Europe](/COVID7-EuropeCasesChoropleth.gif)

Track accumulated COVID cases number in the US
![COVID cases by state in US](/COVID8-USCasesMap.png)

Among states, California has most COVID cases(9.35M), followed by Texas(6.79M), Florida(5.99M) and New York(5.26M).
**California, Texas, Florida and New York are states known for large population.**
Therefore, we can further **examine the relationship between population and COVID cases**.

To investigate the correlation between population and the COVID cases in the US.
We can use bubble chart to present population data vs cases per capita data

State population data collected from <a href="https://www.census.gov/data/tables/time-series/demo/popest/2020s-state-total.html">U.S. Census Bureau</a>, Release Date: December 2023

Here, due to lack a full year data in 2023, using 2022 data for calculation.
![COVID cases Bubble Chart](/COVID9-USBubbleChart.png)

In this bubble chart, we can observe that **higher population does correlate with higher COVID cases**; however, we can also noticed that some places with highest cases per capita is actually in the area with lower resident population.
Among these three area, **Rhode Island is expected since it's a popular spot for tourism**. However, Alaska and North Dakota is not explainable by the visitors. Therefore, these two places will be a good target for further investigation in public health policy.

`
    },
    {
        id: 4,
        title: "Human Resource Data Analysis",
        description: "Performed detailed analysis to investigate pay gap, recruitment and performance of employees.",
        tags: ["Data Visualization", "Statistical Analysis", "Regression"],
        image: "HR6-Regression.png",
        content: `
[Project - Human Resource Data Analysis](https://github.com/Enlightenus/Human_Resources_Data_Analysis)

### Pay Gap Investigation

Nowadays, employers need to ensure that employees are treated fairly and equitably.
For example, **California Equal Pay Act** against unequal pay based on sex, race, or ethnicity.
Also, employers with at least 100 employees needs to annually report pay, demographic, and other workforce data to the Civil Rights Department.

#### **Do employees with different genders receive equal salary?**

Visualize Number of Employees by Gender and Mean Salary by Gender to understand the data

![Number of Employees by Gender](/HR1-Number-of-Employees-by-Gender.png)

![Mean Salary of Employees by Gender](/HR2-Mean-Salary-of-Employees-by-Gender.png)

Next, we examine the salary distribution in each department.
Visualize the Department-wise Salary(Mean) by Gender
![Department-wise Mean Salary by Gender](/HR3-Department-wise-Mean-Salary-by-Gender.png)


Here, we can noticed that there is only female employee in the Executive Office.
Generally speaking, we should figure out the reason if there is a department with only specific gender, but since it's executive level, it can happen due to limited position.

Considering it's an outlier and only female, we will remove it from our plot to generate a accurate figure.

Update the visualization of the Department-wise Salary(Mean) by Gender

![Updated Department-wise Mean Salary](/HR4-Department-wise-Mean-Salary-by-Gender-updated.png)


After removing the Executive Office from the plot, we can use a better scale on y-axis, and help audience to see the difference clear.

#### ANOVA
**To further investigate whether department and the gender play a role in salary. We should perform a two-way ANOVA.**
Here, we choose **department** and **gender** as the attributes we want to examine and there is not clear interaction between this factors. Therefore, we will use type II for the ANOVA.

Perform ANOVA to examine the variance within and between groups

![ANOVA](/HR5-ANOVA.png)

Here, we examine the effect of two independent factors (i.e. Department and Gender) whether that each factor alone has a significant impact on the dependent variable (i.e. Salary).

Our **Null Hypothesis (H0): The mean of the dependent variable (i.e. Salary) is the same across all levels of the factor (Department and Gender)**

As observed, the P-value of Department difference is 1.996262e-31, which is way smaller than 0.05
Therefore, we reject the null hypothesis for that factor. Statistically there is a significant difference of salary across different departments

**There is no significant difference between gender of employee (as the p-value is 7.711597e-01, which is > 0.05)**
The interaction: the effect of department on the salary does not depend on the other factor(Gender), as the p-value is 7.889328e-01, which is > 0.05.

![Regression](/HR6-Regression.png)

#### Post-hoc analysis
To further examine the main effect, we will perform the Post-hoc test.

Here, We will use Tukey's Honestly Significant Difference (HSD) Test, the most commonly used post-hoc tests. It compares all possible pairs of group means (in this case, department means) and controls for the family-wise error rate.

Tukey's HSD tests performs pairwise comparisons between each pair of departments.

![PostHoc Analysis by department](/HR7-PostHoc1.png)

Statistically, there is significant difference in mean salaries between Executive Office and all other departments.

Here, we focus on the other departments. Clean the chart by removing the Executive Office.

![PostHoc2](/HR8-PostHoc2.png)

There is no significant difference of salary mean between Admin office and Production or Sale department.
There is no significant difference between IT/IS department and Software Engineering.

Visualize the significance in heatmap to show the group-wise difference

![Significance heatmap](/HR9-Significance.png)

### Recruitment Analysis

**What's major recruitment sources?**

![Recruitment Sources](/HR20-Recruitment.png)

**Do we have recruitment preference between department?**

Visualize the recruitment sources by department.
![Recruitment Sources](/HR20-Recruitment.png)
![Recruitment by Department](/HR21-DeptRecruitment.png)
![Recruitment by Action](/HR22-RecruitmentAction.png)


### Performance Analysis

How's the employees' performance in each department?

![Performance](/HR30-Performance.png)

Visualize the performance with percentage annotation

![Performance Percentage](/HR31-PerformancePercent.png)

As observed, most employees (>70%) rated as fully meets or higher in performance.
Interestingly, we observed 100% in Admin office, so we will check the original data and confirm with Admin Office if needed.
`
    }

    // More projects ...
];
