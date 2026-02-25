---
layout: project
title: "Baby Warmer: Nyano Nani (न्यानो नानी )"
description: "A low-cost baby warmer developed at the National Innovation Center, Nepal to reduce neonatal mortality."
image: "/assets/images/projects/nyano_nani_4.jpg"
tags: ["embedded", "circuit"]
pinned: true
---

## Overview
Neonatal hypothermia is a common cause of death among children in developing countries such as Nepal \[[1](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1651-2227.1997.tb08949.x?casa_token=E6PnGZN0RiAAAAAA:qPV3g21onbE-jrWgzPrDagiFGlOcGAGnRxSVhD5S1bUkjdN37qv3huAGfIfBgDvwgsVwqp_0DxIm-w)\]. The temperature of a newly born baby should be controlled within the range of 36.5 degrees Celcius to 37.4 degrees Celcius. A study done at Guinea-Bissau \[[2](https://pubmed.ncbi.nlm.nih.gov/18631315/)\] provides supportive evidence for the relationship between hypothermia, neonatal mortality, and controlled ambient temperature. The result shows that the mortality rate is 4.8 times higher among the subgroup born in a low ambient temperature below 34.5 degrees.

{% include figure.html path="/assets/images/projects/nyano_nani_2.jpg" caption="Nyano Nani (source: <a href='http://www.nicnepal.org'>www.nicnepal.org</a>)." %}

According to WHO, almost all infants in developing countries experience some degree of mild or moderate hypothermia \[[3](https://apps.who.int/iris/bitstream/handle/10665/63986/WHO_RHT_MSM_97.2.pdf?sequence=1)\]. This number rises significantly in Nepal's hilly and Himalayan regions, where the communities are primarily rural, and there is less to no infrastructure development to support modern health care facilities. Hospitals in developed cities of Nepal (Kathmandu, Pokhara, and so on) use baby warmer (exported from other countries) to maintain the ambient temperature of the environment where babies are placed. This is costly as the equipment itself is expensive to procure and the hospital requires to have more baby warmers.

`Nyano Nani` is a low cost baby warmer developed at National Innovation Center, Nepal to provide necessary warmth to newly born baby at crucial time. The main purpose of Nyano Nani is to make baby warmers easily accessible to all Nepal's communities and birth centers and decrease Nepal's neonatal mortality rate.

## Deployment in Nepal
Nyano Nani is Nepal's first bio-medical equipment that fulfills all international safety guidelines. Kirtipur Hospital was first to deploy Nyano Nani, Nepal, and then Khangri Hospital. After that, Nyano Nani gained popularity and a solid customer base. Jyoti Bikas Bank has been buying and supplying Nyano Nani to different health centers in Nepal under ther [CSR initiative](https://jbbl.com.np/gallery/baby-warmer-nyano-nani-phase-2-project). As of today, health centers in 23 districts of Nepal use Nyano Nani.
{% include figure.html path="/assets/images/projects/nyano_nani_deployment.png" caption="Red regions are the districts where Nyano Nani is successfully deployed (source: <a href='http://www.nicnepal.org'>www.nicnepal.org</a>)." %}

## My Contribution
I worked in the embedded hardware and software part of Nyano Nani. I designed and fabricated the overall circuitry used in the first version of Nyano Nani. I was also responsible for writing embedded software for the control system and the overall logical operation of Nyano Nani. The code for Nyano Nani is written in embedded C and is fast and responsive. There are lots of redundancies to prevent the event of power failure and leakages. There are two different temperature sensors - skin and air, which manage the baby's temperature, and the ambient temperature of the environment with the help of a feedback loop. There are alarms to warn the health worker and nurses about the baby's conditions in the warmer (such as low temperature). There are interactive displays and buttons which show warnings and interactive display messages and let the health worker set the baby's body temperature from 34.5 degrees to 35.6 degrees. Of course, these are high-level details of the warmer. Still, many small nuances are implemented in Nyano Nani to make it abide by international safety guidelines.

<figure>
    <div class="row">
        <div class="col-sm-4 mt-3 mt-md-0">
            <img src="{{ '/assets/images/projects/nyano_nani_4.jpg' | relative_url }}" alt="Nyano Nani with a child at Khangri Hospital" class="img-fluid rounded z-depth-1">
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
            <img src="{{ '/assets/images/projects/nyano_nani_3.jpg' | relative_url }}" alt="Me and Sanjay while packaging" class="img-fluid rounded z-depth-1">
        </div>
    </div>
    <figcaption>Nyano nani: (Left - After deployment in Khangri Hospital), (Right: During packaging)</figcaption>
</figure>

The details above are the electrical and software part of the warmer. Many engineering efforts are done in the mechanical design and market research parts of Nyano Nani. After the first version (which I worked in), Nyano Nani has gone over some significant improvements in the control system and usability. You can read more on the official website of [National Innovation Center Nepal](https://nicnepal.org/project/healthcare/baby-warmer).

## Acknowledgement
First, I'd like to thank [Dr. Mahabir Pun's](https://en.wikipedia.org/wiki/Mahabir_Pun) [National Innovation Center Nepal](https://nicnepal.org/) for letting me work on this amazing and inspiring project. I am thankful that I worked alongside a team of amazing people and engineers (`Sanjay Bahadur Singh Thakuri`, `Mahip KC`, `Sunil Baniya`, `Swain Shrestha`, `Nischal Pokhrel`, `Deepak Chand`, `Suraj Karki`, `Bisek Chaudhary`, `Jikesh Thapa` and `Dusty Nep`) who worked incredibly hard to make Nyano Nani a success. I want to give a special thanks to my colleague `Sanjay Bahadur Singh Thakuri`, who has inspired me to work for a social cause. I want to thank `Mahip KC` and `Swain Shrestha` for teaching me all the niches of the electrical components and helping me fix those annoying and disguised bugs.

Working on this project has been an absolute pleasure and an inspiring experience. The burst of happiness and emotions when seeing a baby cradled in the warmer you made as a part of a team is an ineffable feeling. In the future, I hope to work on more projects which have a significant positive impact on society.

### References
[1] Dragovich D,  Tamburlini G, Alisjahbana A, et al. [Thermal control of newborn: knowledge and practice of health professionals in the seven countries](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1651-2227.1997.tb08949.x?casa_token=E6PnGZN0RiAAAAAA:qPV3g21onbE-jrWgzPrDagiFGlOcGAGnRxSVhD5S1bUkjdN37qv3huAGfIfBgDvwgsVwqp_0DxIm-w), Acta Paediatr, 1997, vol. 86 (pg. 645-50) \\
[2] Sodemann  MNielsen  JVeirum  JJakobsen  MSBiai  SAaby  P [Hypothermia of newborns is associated with excess mortality in the first 2 months of life in Guinea-Bissau](https://pubmed.ncbi.nlm.nih.gov/18631315/), West Africa.  Trop Med Int Health 2008;13 (8) 980- 986 \\
[3] [World Health Organization, Thermal Protection of the Newborn: A Practical Guide](https://apps.who.int/iris/bitstream/handle/10665/63986/WHO_RHT_MSM_97.2.pdf?sequence=1).  Geneva, Switzerland World Health Organization1997;
