import self from "../img/Self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import SeldDriving from '../img/SeldDriving.mp4'
import SelfDrAb from  "../img/SelfDrivingAbstract.pdf"
import Auton from  "../img/Auton.mp4"
import RobotAbstract from "../img/RobotAbstract.pdf"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mark",
    lastName: "Sbitnev",
    initials: "ms", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'Code, robots, and solving cool problems'
        },
        {
            emoji: '🇨🇦',
            text: 'based in the Toronto, Canada'
        },
        
        {
            emoji: "📧",
            text: "mark-sbitnev2801@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.


// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [
        {
            title: "Autonomous Fire Extinguishing Robot",
            description: [
                "• Utilized a pre-built Elegoo base, modified with 3D-printed parts to house electronics and sensors.",
                "• Strategically positioned components (battery, board, candle) to ensure optimal balance and flame stability.",
                "• Implemented smooth acceleration and deceleration algorithms to avoid blowing out the robot's own candle.",
                "• Employed reflective line sensors for real-time navigation across designated black-and-white field paths.",
                "• Designed fallback recovery algorithm using 90° and 180° turns when off-course.",
                "• Deployed IR sensors for precise fire (candle flame) detection while filtering out ambient light.",
                "• Integrated rotating fan system guided by servo motors to extinguish flames without rotating the full robot.",
                "• Custom-channeled fan barrel focuses airflow for precision — inspired by weapon barrel design.",
                "• Proposed defensive strategy using an anemometer to detect wind direction and trigger evasive maneuvers.",
                "• Integrated ultrasonic and angled IR sensors for obstacle detection, enabling advanced collision avoidance."
            ],
            
            live: "https://your-fire-robot-demo.com",
            source: "https://github.com/your-username/fire-extinguishing-robot",
            abstract: RobotAbstract,
            video: Auton,
            image: mock1
        },
        {
            title: "Self-Driving Robot",
            description: [
                "• Designed and constructed a semi-autonomous four-wheeled robot platform using a Raspberry Pi 5 and USB cameras to enable onboard and remote computation.",
                "• Implemented a computer vision pipeline leveraging YOLOv11 object detection models for real-time recognition of traffic signs, road features, and environmental obstacles.",
                "• Built a Flask-based server infrastructure with WebSocket communication to handle high-frequency video streams from the robot and return control decisions with minimal latency.",
                "• Performed transfer learning on YOLOv11 using a custom-labeled 'Traffic and Road Signs Dataset', optimizing for lightweight deployment and fast inference speeds suitable for embedded hardware.",
                "• Developed and trained a behavioral cloning model based on NVIDIA’s Dave2 CNN architecture to predict steering angles from image data captured in Unity-based simulation environments.",
                "• Tuned model hyperparameters using real-time evaluation metrics and validation curves; implemented data augmentation techniques such as shadowing, brightness variation, and perspective transforms.",
                "• Designed Unity simulation tracks to generate synthetic driving data and safely evaluate performance of vision-based control systems in diverse lighting and terrain conditions.",
                "• Integrated line-following, lane detection, and stop/go logic for use in hybrid navigation strategies combining classical and deep learning approaches.",
                "• Addressed real-world implementation challenges including inconsistent frame latency, noisy sensor feedback, GPU memory constraints, and Raspberry Pi-specific hardware bottlenecks.",
                "• Enabled modular control systems allowing rapid switching between vision-only (Dave2) control and server-guided object-aware navigation for A/B testing and benchmarking."
            ],
            
            
            live: "https://your-self-driving-demo.com",
            source: "https://github.com/your-username/self-driving-robot",
            abstract: SelfDrAb,
            video: SeldDriving
,
            image: mock2
        },
        {
            title: "Bomb Defusal Robot",
            description: "A manually controlled robot built for high-risk zones that simulates bomb detection and disposal using a robotic arm and wireless control system.",
            live: "https://your-bomb-defusal-demo.com",
            source: "https://github.com/your-username/bomb-defusal-robot",
            abstract: "/BombDefusalAbstract.pdf",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
    
}