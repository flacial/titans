export enum Titan {
  Jasir = 'Jasir',
  Amay = 'Amay',
  // Most of my conversations with Harry are through calls, so I don't have a lot of quotes from him. I'll add more as I get them.
  // Harry = 'Harry',
  Bryan = 'Bryan',
}
export const titans = Object.freeze(Object.values(Titan))

type Wisdom = {
  titan: Titan
  quote: string
  title: string
}

export const wisdom: Wisdom[] = [
  {
    titan: Titan.Jasir,
    title: 'Jasir on Serverless Costs and Benefits',
    quote: `Serverless is much more expensive, it has a much higher unit cost. It is also less efficient than just having a long running process. Made worse by the fact that the most common language being used with serverless seems to be js which is inefficient in itself. Compounded by the fact that v8 is able to speed up stuff through jit when it runs a bit of code over and over but there is no opportunity to do so in short one off invocations (not always the case). So it can be quite wasteful overall. It is also yet another abstraction layer, with it's own set of quirks and bugs etc., and with any abstraction layer, as new people enter the field they start from the current abstraction layer and often don't gain the fundamental knowledge of the underlying workings of the tools they use.

1. So I don't think serverless offers too much from a technical aspect. For me the main benefits are economic rather than technical.
It can scale down to zero, so while it has a lot higher marginal cost, it's net cost can be low, or even 0, if your overall workload is very low. I can easily run ~100 qps from my 4$ server constantly, that'll be a couple hundred usd + 20$ for pro on vercel, not including db and meilisearch which also run on that server. And I can push out 20tb traffic from it, which will be another 8000$ on vercel. Pretty good for 4$ :D So while you maximum cost with my vps will be 4$ compared to 100s-1000s on vercel, your minimum cost will also be 4$, wheras on vercel if you are small enough, you cost might be 0$, which is even better than 4$, son for many people, that makes sense.

2. It can scale up instantly, right now if I exhaust the limit of my vps, I'll have to manually work on scaling up, I could pause and get a bigger vps, or get a 2nd one and scale horizontally. I can automate that, but that takes time, effort, and expertise. Even on serverless, someone has to scale servers since that's where the code runs on, it is just someone else's server. So with serverless, instead of spending the resources to set up autoscaling right now, I can offload this complexity to vercel (who in turn offloads it to aws), so I exchange higher up front cost, to higher on going cost. And of course our economy/society want rapid growth :D wether or not it is sustainable, and if you are a tech company you want hockey stick growth, high percentage of yoy growth and so on, so you want something that can scale immediately.

3. Lower ops expense, in my case I know how to run and maintain my app front to back, wether it be the js or servers, so the only expense for me is time, for a small business, they'd have to pay the person to run the servers in addition to the cost of servers, with vercel you set it up once and it handles deployment scaling platform security all by itself, you just push to github, so depending on the business, might be worth the tradeoff.

4. Free Money, there are so many companies/startups, who have raised millions, who are willing to offer free serverless invocations to buildup market share and mind share, vercel for example has an amazing price of 0$ to start, and a great dx + community midshare/support, but the next cheapest tier is 20 and price increases rapidly from there. Every serverless call does cost some amount, no matter how little, but vercel can afford to give away 500k/month for free, and if you can make do with that, then that's a great deal. So for anyone who can make use of this free money, it makes financial sense to do so, like I said earlier, 4$ is low but 0 is lower still :D.`,
  },
  {
    titan: Titan.Jasir,
    title: 'Jasir on Cloud Cost Tradeoffs',
    quote: `Yeah that is the tradeoff with cloud, you pay more for (hopefully) less operational complexity, so vm cost more than baremetal, containers cost more than vms, serverless cost more than containers and so on, they give you more value in terms of ease of use so they charge more for that. You can do everything they do you'll just have to pay with engineering time instead, so how to balance that falls on you as the engineer.`,
  },
  {
    titan: Titan.Jasir,
    title: 'Jasir on Offshoring and Outsourcing',
    quote: `Yeah that is a common business model, there are a lot of good engineers here too but then they would be more expensive to hire, if you want the cheapest option you'll get what you pay for. They usually work in local companies, make their own startups, or just go abroad and work directly for foreign companies in stead of going through outsourcing agencies like this one. B/w uae and india, uae has hcol, so you'd find agencies that offshore work from uae to india. B/w us and uae, us has hcol, so you'll be able to find agencies in us which outsouce to uae engineers etc. :D.`,
  },
  {
    titan: Titan.Jasir,
    title: 'Jasir on System Design',
    quote: `System Design as a term has been quite trivialised now days, by tech influencers and people peddling courses, (as are most things related to cs and swe as it has become more trending over the years, where it has now become just "learn to code in x weeks and get a 6 figure faang job"). It is not just a piece of tech like say react or node one can sit down and learn in a week, nor is it memorising how to make a url shortener or yelp for an interview. It is a combination of everything one learns as they gain experience and mature as an engineer/programmer.

    Formal education (like a cs degree) can help learn that through structure and guidance, letting you know the directions you haven't explored yet, but ofc that is not the only way, and not accessible to everyone. It is something you get better at with experience, study (self study most importantly), and by critically thinking about the things you have learnt and how to combine them.`,
  },
  {
    titan: Titan.Jasir,
    title: 'Jasir on Learning System Design',
    quote: `So I wouldn't say system design is topic one can just learn along side other fundamental cs and computing knowledge, rather something that leverages broad information across various areas, dsa, os, cpu, dbs, distributed computing, and so on, and experience teaches you that best. someone can speed up their rate of knowledge gain by deliberately studying system design resources (like designing data intensive applications, great book), and that will also help, But you'll better understand that material, and better understand the reasons behind doing certain things in particular ways (why use caching, why use queus, why acid matters so on) if you have the necessary foundation. So it is a hard thing to teach in a introductory course, or as part of a curriculum that is teaching you from scratch, like c0d3 or a bootcamp (a bootcamp might teach you docker or k8s but that alone != system design :D), and is knowledge better gained through experience (could be experience shared with you by others) and self study.`,
  },
  {
    titan: Titan.Bryan,
    title: `Bryan on Tech Debt and Code Maintenance`,
    quote: `Tech debt is just code that probably needs to change in the future for some reason but I'm putting it off because it's not important enough yet. I think it tends to be stuff that might slow you down a little bit or be slightly annoying.
It tends to not be a problem until it adds up a lot, then it starts to get really annoying.

A good example of tech debt would be like if you're using TypeScript but then you have some code where you wrote ﻿// @ts-ignore to silence some error that didn't matter much because you just wanted to get stuff done. Sometimes the ﻿// @ts-ignore won't be a problem and it might be fine, but other times it might silence a legitimate error and it might make it so there's a possibility you'll get a runtime error later. If these little things add up a lot, then it gets to the point where you might have a runtime error that TypeScript didn't catch because there were too many parts of your code where you silenced TypeScript.

Or people using the ﻿any type. Or people using some legacy system that is no longer maintained. It's probably easier to use the legacy system, but maybe the legacy system has some security problems so you need to migrate your code to something else so the code doesn't have security problems, that's kind of like tech debt. Or maybe you're writing a quick and dirty project and you just want to get it done, so you don't worry about your code looking nice, that's tech debt.

Tech debt usually allows you to get stuff done quickly now, but it makes it so you have to address these problems in the future.
    `,
  },
  {
    titan: Titan.Amay,
    quote: `I hope I'm not offensive here but I sometimes get the feeling you are trying to find answers instead of discovering answers (discovering answers means building your own answer with your own experiences).
    Every good engineer I respect has their philosophy on what makes a great engineer based on their own experiences.

    So if I were you, I would instead ask myself these questions that you have, form my own ideas on what they are and practice that daily so I can build experience.

    From what I know about you, you have done the following things:
      1.	Mentored new engineers (Harry)
      2.	Focus on the students / users of your product and build features to solve the problems that they have.
      3.	Write docs to help future engineers
      4.	Improve technology / follow industry best practice

    Some things you haven't done:
      1.	Set deadlines for yourself, communicate them with the team, and hit the deadlines.

    In any typical company, there would be these 4 things:
      1.	Mentoring more junior engineers (A junior engineer can also do this. There will always be a new engineer joining your team and you can always train someone newer than you using what you have learned in the company).
      2.	Building impactful features - Understand users, observe users and identify problems that users have, and help plan features that solves these problems.
      3.	Improve communication within teams by writing documentation. This helps other engineers understand your project, and in certain cases take over your project easily. When developers don't do this, new teams tend to re-write existing code (because too hard to understand). This happens over and over again.
      4.	Meeting deadlines: Companies usually have launch data communicated up to VP / CEO. It is important to hit these deadlines. This usually comes at the cost of code quality / improving the existing technology.

    So I've seen engineers who:
      1.	Believes that Mentoring is the most important trait in an impactful engineer. If you can help 10 juniors become super productive on your team, then you have 10x your team's productivity
      2.	Believes that building impactful features is the most important (Like Amazon's Customer Obsession).
      3.	Believes that writing skill is the most important trait in being an impactful engineer. If you can write well, teams communicate better and as a result work effectively together.
      4.	Believes that meeting deadlines is the most important trait in an impactful engineer. They think that a great engineer is reliable in delivering commitments and you can always rely on them to deliver.

    But this is a broad feature that doesn't only apply to SWE.

    This is wrong. I think you may be thinking like... A good SWE will always use const wherever he/she can <- this is too trivial, it has the flaw of paying attention to the symptom instead of the cause.
    Instead, I think its important to always relate your code back to philosophy:

    Would an engineer who cares about communication use let when he could be using const?
    No, because const conveys to any code reader that you don't plan to reassign the variable.
    Would an engineer who care about communication use forEach when he's actually doing a filter?
    No, because filter conveys to any code reader that the chunk of code is doing filtering.

    So instead of memorizing the symptoms:
      1.	I should use const wherever I can
      2.	I should use filter, map, reduce, find instead of forEach wherever I can
    ...

    You should decide on a philosophy: I want to be an engineer who communicates well, all the time (This is what I believe in) and apply it to every line of code you write.`,
    title: 'Amay on What Makes a Great Engineer',
  },
  {
    titan: Titan.Bryan,
    quote: `I try to treat it like an interview as much as possible, I think that's the best way to do it for me

    I read the prompt, then ask questions the same way I would in an interview

    Then I write out some examples

    State the brute force solution and big-O for time and space

    Talk about ways I can optimize it with data structures or common algorithms

    Once I have the best solution stated, then I write code and talk while I write and state why this solution works so the interviewer understands

    Then I test the code with my examples

    And then I will submit the code
    
    If I get stuck on a problem for 20 minutes and I'm not making progress then I look at a solution someone else posted and try to learn from that`,
    title: 'Bryan on Leetcode and Interview-like Technique',
  },
]
