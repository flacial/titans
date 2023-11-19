enum Titan {
  Jasir = 'Jasir',
  Song = 'Song',
  Harry = 'Harry',
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
]
