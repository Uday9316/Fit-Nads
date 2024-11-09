import img6 from "../assets/sergen.png"
import img7 from "../assets/uday.png"



export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Fat-Cal", href: "#Fat" },
    { label: "Team", href: "#TeamMembers" },
    { label: "Article", href: "#Article" }


]


export const client = []

export const teamMembers = [{
        img: img6,
        role: "Fitness Expert",
        twitter: "https://x.com/Sergenbaba5", 
        name: "Sergen"
    },
    {
        img: img7,
        role: "Fitness Exeprt",
        twitter: "https://x.com/uday_dhorajiya",  
        name: "Uday"
    },

]
// src/Data/Data.js
// src/Data/Data.js
export const articleData = {
    title: "What is a Supplement? The Best Supplements!",
    introduction: `
        Achieving the body we want is the result of conscious training, quality nutrition, disciplined rest and the right mentality; in short, a balanced life. A factor that disrupts the balance, no matter how small, will prevent us from reaching the results we want. The purpose of supplements is to reduce the obstacles on the way.

        Supplements are the last part of our nutrition in order of importance. First, we must establish our calories, macros such as protein, our fluid intake, what to eat and when. In this case, supplements support us. Supplements can also cover the deficiencies at the bottom of the pyramid. However, supplements alone are not the whole pyramid!
    `,
    misconceptions: [
        {
            title: "Supplements are not harmful!",
            content: `
                These products are foods. The more harmful the food, the more harmful the supplement can be.
                Supplements are processed foods; but if you do not produce your own food, it is a bit funny to look at supplements as bad food. In fact, no matter how well you eat, some foods may be missing from your diet. The purpose of supplements is to fill these gaps.
            `
        },
        {
            title: "Supplements are not miracles!",
            content: `
                Supplements are sports nutrition. The more beneficial the food, the more beneficial the supplement can be. Supplements provide ease of use because they are presented in isolation only for the foods we need. They have their place and time. But they do not create incredible differences. Using these products without training and eating properly is like putting on a bow tie without wearing a suit.
                
                Remember! The best supplement is training, doing sports, eating well!
            `
        }
    ],
    bestSupplements: [
        {
            name: "Creatine",
            description: `
                Creatine plays a role in energy use for those who do strength-based sports such as weight training, sprinting, and wrestling. According to research, creatine is the only supplement that will increase performance for athletes with low tempo and high intensity.

                Since it directly affects your strength, it can help you work with higher weights, and indirectly supports muscle development and mass increase.
            `
        },
        {
            name: "ZMA (Zinc and Magnesium)",
            description: `
                Zinc and magnesium are minerals that play a primary role in many activities of metabolism. Some of the problems that occur when they are deficient: Low sexual desire, hair loss, white spots on nails, low testosterone, and acne. Supporting them with supplements naturally increases your testosterone and improves sleep quality. Indirectly, it helps your work in the gym and kitchen to be more effective.
            `
        },
        {
            name: "Omega-3 Fish Oil",
            description: `
                The omega-6 ratio in our diet is usually much higher than the omega-3 ratio. Especially for those who do sports and consume animal products, the omega-3 ratio is very low. This opens the door to many problems. If you are thinking about your health in the long term and want to speed up your recovery from training, omega-3 is a must.
            `
        },
        {
            name: "Probiotic Supplements",
            description: `
                Probiotics are essential for gut health. More than 200 studies say that more than 170 diseases are due to deficient probiotics. Irritable bowel (IBS), weak immune system, inflammations, eczema, skin problems, bad breath, diarrhea or constipation—probiotics help us overcome these problems.

                A good probiotic supplement should contain a variety of bacteria strains, such as Lactobacillus rhamnosus and Lactobacillus acidophilus. These active bacteria help restore balance to your gut microbiome. 
            `
        },
        {
            name: "BCAA (Amino Acid)",
            description: `
                BCAAs (branched-chain amino acids) are important for muscle recovery and performance, especially when training on an empty stomach. If you are training with intermittent fasting, BCAAs help provide energy during your workout.

                They are also helpful for those who do long-paced sports such as running or cycling. A good BCAA supplement should contain at least twice the amino acid leucine.
            `
        },
        {
            name: "Protein Powder (Optional)",
            description: `
                Protein powder is useful for those who struggle to meet their daily protein needs through whole foods. It is essential during a diet phase when calories are restricted. But if you can meet your protein needs through your diet, protein powder is optional.
            `
        }
    ] // Remove the trailing comma here
};


export const blog = [
]

export const footer = [


]
