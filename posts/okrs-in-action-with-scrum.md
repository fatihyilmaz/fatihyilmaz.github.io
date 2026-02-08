---
title: 'OKRs in Action with Scrum'
date: '2020-08-10'
description: 'A practical guide to implementing OKRs within Scrum framework, combining strategic objectives with agile execution.'
categories:
  - Agile
  - OKRs
  - Scrum
  - Project Management
image: '/images/OKRs%20in%20Action%20with%20Scrum/Image1.jpeg'
original_link: 'https://www.linkedin.com/pulse/okrs-action-scrum-fatih-y%C4%B1lmaz'
---

It has been more than 20 years after Scrum is developed by Ken Schwaber and Jeff Sutherland in 90s. It is obvious that now Scrum is one of the most known and possibly most widely used software development approaches by software project teams. For many years, I have also experienced this framework and currently using in my projects. Don’ t worry! I will not try to explain how amazing Scrum methodology is. Actually, Scrum is great with many aspects. During project execution with Scrum, I have realized that there might be some other tools to make main goals of the project much clearer and more transparent for all team members. Yes, there is backlog in Scrum and all team members can reach it. It is also true that backlog needs to be prioritized. From my point of view there are several reasons why only backlog may not be enough to execute software projects and there is a need for complementary tools.

- First thing that I observed that backlog was keeping my attention mostly on next one or two sprints goals. Loosing your sight for long term goals might cause problems.
- By the time backlog is growing and it is not easy to tell your project goals for next quarter or next year by just checking your backlog.
- With backlog, it is hard to communicate your team goals with other stakeholders in a clear and easy way.
- Aligning team members on team goals with backlog might be challenging.
- At least my experience shows that although product backlog is not just for user stories as stated in scrum guide as “The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team.” (scrum.org), items related improving development and testing quality generally took place at the bottom of the backlog or not at all. All eyes on product features.

![OKRs and Scrum](/images/OKRs%20in%20Action%20with%20Scrum/Image1.jpeg)

## OKRs

It was around beginning of 2019 and I read “Measure what Matters” written by John Doerr who introduced Objectives & Key Results to Google in 1999. In foreword of the book, Larry Page says that “As much as I hate process, good ideas with great execution are how you make magic. And that’s where OKRs come in.” (Doerr, 2018). During reading the book, I understood that how OKRs might be very powerful and useful tool to reach our project goals.

John Doerr describes OKRs as “A management methodology that helps to ensure that the company focuses efforts on the same important issues throughout the organization. An Objective is simply what is to be achieved, no more and no less. By definition, objectives are significant, concrete, action-oriented, and (ideally) inspirational. Key Results benchmark and monitor how we get to the objective. Effective KRs are specific and time-bound, aggressive yet realistic. Most of all, they are measurable and verifiable.” (Doerr, 2018).

Example OKRs of Intel where OKRs are invented by Andy Grove is below.

![Example OKRs 1](/images/OKRs%20in%20Action%20with%20Scrum/Image2.png)

![Example OKRs 2](/images/OKRs%20in%20Action%20with%20Scrum/Image3.png)

(Doerr, 2018)

I will not explain in detail what OKRs methodology is. I highly suggest you to read “Measure What Matters” to learn this tool or a quick internet search might help you to learn fundamentals. What I would like to do is focusing on how I experienced OKRs and Scrum together.

## OKRs and Scrum

At first, I didn’t use OKRs as completely integrated to Scrum, instead it was a tool for our team to discuss & define our quarterly objectives. Periodically we were checking whether we were on track or not as suggested by OKR method. It was really helpful to define and highlight our development and testing related goals such as building CI/CD pipeline, increasing development quality by static code analysis, investing on test automation and so on. It also helped us to communicate our project goals with other stakeholders. Besides that, these internal requirements to develop a software in a right way also became much clearer for our product owner. Everybody in the team had the information about where exactly we were heading to.

We also experienced that how hard defining OKRs could be, each OKR needs to be coordinated one responsible person and even if you define everything in a clear way it does not mean that you will succeed! Of course we failed to reach some of our goals.

OKRs are not just for running whole organization. It can be tailored to be used in a software project. An example OKRs definition for a software project might look like below.

### Annual OKRs

Objective 1: Develop a software with A, B, C, D and E features
- Key Result 1: A and B should be designed user friendly way
- Key Result 2: C and D features should provide all security needs
- Key Result 3: E should be designed to be much performant compared to competitors’ products

Objective 2: Develop product with software development best practices
- Key Result 1: Agree on a development guideline and stick to it.
- Key Result 2: Measure Code quality and fix issues
- Key Result 3: FMEA and TRA should take place

Objective 3: Develop a high-quality product based on customer expectations
- Key Result 1: Define a continuous testing process and stick to it.
- Key Result 2: Building a CI/CD pipeline
- Key Result 3: Automate regression test cases. At least half of them.

From annual OKRs first quarter OKRs can be decided by the team.

### First Quarter OKRs

Objective 1: Develop A and B features
- Key Result 1: UI needs to be decided with design group
- Key Result 2: UX needs to be decided with design group
- Key Result 3: Develop and test A & B features without major bugs
- Key Result 4: Focus groups should use these features and feedbacks will be evaluated

Objective 2: Release system design document
- Key Result 1: Review it with external teams
- Key Result 2: Review it within the team
- Key Result 3: Use Architecture tradeoff analysis method for system design

Objective 3: CI pipeline with static code analysis integration
- Key Result 1: Design CI pipeline and document it
- Key Result 2: Integrate static code analysis to CI pipeline
- Key Result 3: Build needs to be copied build folder
- Key Result 4: Static code analysis results needs to be shared with the team via email

Then OKRs became much more integrated to scrum method as illustrated below. Annual OKRs and backlog have a strong relationship. To fulfil your OKRs there must be items in your backlog to plan and track them. After next quarter’s OKRs are defined, during sprint planning meeting team might use OKRs as a compass to re-evaluate backlog and to decide which items will be pulled to sprint backlog. After each sprint review, team evaluates how much OKRs are fulfilled.

Based on changes in project budget, prioritization and comments from sales can affect OKRs definitions. They are not unchangeable, on contrary they are adaptable.

![Example OKRs 3](/images/OKRs%20in%20Action%20with%20Scrum/Image4.png)

One of the things that I am planning to do is integrating objectives from sales and product management point of view to our OKRs. Until now our OKRs mostly shaped based on software development goals. With this way, all stakeholders of our software project will be aware of other aspects of our product. For example, although software development team will not be directly responsible for an objective about increasing sales, it would still make a difference with just understanding that developing a software is not enough to be successful if you can’t have any users/customers.

John Doerr has a few very significant suggestions for how to use OKRs and which are:

- Less is more. Up to 5 objectives and related 5 key results for each cycle will be enough. Better to focus on what matters.
- Set goals from the bottom up
- No dictating.
- Stay flexible
- Dare to fail
- A tool not a weapon, be patient be resolute

I agree mostly on about that OKRs is just a tool…. Scrum or OKRs does not matter, at the end of the day we will use them. It means that you could have the best processes and best frameworks to do the job but if you do not have the right people to overcome challenges then you will still fail.

## References

1. John Doerr, 2018, Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs, Published by Portfolio
2. https://unsplash.com/s/photos/scrum
3. www.scrum.org

---

*This article was originally published on [LinkedIn](https://www.linkedin.com/pulse/okrs-action-scrum-fatih-y%C4%B1lmaz).*
