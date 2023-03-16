import Header from "../../Containers/Header";
import BannerContainer from "../../Containers/BannerContainer";
import PopularChallanges from "../../Containers/PopularChallanges";
import YourResult from "../../Containers/YourResult";
import Advice from "../../Containers/Advice";
import Gallery from "../../Containers/Gallery";
import Footer from "../../Containers/Footer";
import card01 from "../../Assets/Images/Mask Group 1.png"
import card02 from "../../Assets/Images/img_fire.png"
import card03 from "../../Assets/Images/meal.png"
import btn_more from "../../Assets/Images/btn_more.png"
import './HomePage.css'
import FooterSocial from '../../Assets/Images/social.png'
const HomePage = () => {
    
    const challenges = {
        title: "Popular challenges",
        'cards': {
            'card01': {
                'img': card01,
                'skills': "KEY SKILLS",
                'header': "Friction-Based Fire Making",
                'description': "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
                'more': btn_more,
            },
            'card02': {
                'img': card02,
                'skills': "KEY SKILLS",
                'header': "Make your own shelter",
                'description': "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
                'more': btn_more,
            },
            'card03': {
                'img': card03,
                'skills': "KEY SKILLS",
                'header': "Prepare a meal in the forest",
                'description': "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
                'more': btn_more,
            },
        },
    }
    const Mission = {
        data: {
            // "img": Images.img_shoes,
            "heading": 'Mission',
            "subHeading": 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.',
            "description": 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
            // 'more': Images.btn_more,
        }
    }
    // const Chance = {
    //     data: {
    //         "img1": Images.completedChallenges,
    //         "img2": Images.thirteen,
    //         "img3": Images.youHave,
    //         "img4": Images.btn_more,
    //         "img5": Images.yourResult,
    //     }
    // }
    const shareResult = {
        data: {
            // "img1": Images.person,
            // "rectangle": Images.rectangle,
            "heading": "SHARE YOUR RESULTS ON SOCIAL MEDIA",
            "description": "Lorem ipsum dolor sit amet, consetetur diam nonumy tempor.",
            "more": "SEE RESULTS FROM YOUR FRIENDS",
        }
    }
    // const advice = {
    //     data: {
    //         "img1": Images.advice
    //     }
    // }
    // const adventure = {
    //     data: {
    //         "adventureImg": Images.adventure,
    //         "pagination": Images.pagination,
    //         "surviveMode": Images.survival_mode,
    //         "loremText": Images.Lorem_ipsum_text,
    //         "nextButton": Images.btn_next_ACTIVE,
    //         "prevButton": Images.btn_next_passive,
    //         "more": "MORE",
    //     }
    // }
    // const camping = {
    //     data :[
    //     {
    //         "backgroungImg": Images.forest_house,
    //         "icon": Images.ico_youtube,
    //         "date": Images.ShelterMaking,
    //         "text": Images.lorem_white
    //     },
    //     {
    //         "backgroungImg": Images.tea,
    //         "icon": Images.pictures,
    //         "date": Images.ShelterMaking,
    //         "text": Images.lorem_white
    //     },
    //     // {
    //     //     "backgroungImg": Images.gallery,
    //     //     "text": Images.lorem_black,
    //     //     "more": "MORE",
    //     // }
    //     ]
    // }
    const footer = {
        data : {
            'challenges' : {
                "challengeslist":["Endurance", "survival", "Key Skills", "Survival Kits", "Shelter Making" ],
                "social": FooterSocial,
            },
            'advices' : {
                "adviceslist":["Mountain survival", "Forest challenges", "How to make your shelter", "What to eat in forest", "How to stay safe", "What to wear" ]
            },
            'gallery' : {
                "gallerylist":["Foto gallery", "Video gallery" ]
            }
        }
    }

    return (
        <div>
            <div className="homepage-container">
            <Header/>
            <BannerContainer />
            <PopularChallanges dataCollection={challenges} MissionCollection={Mission}/>
            <YourResult ShareResultCollection={shareResult} dataCollection={challenges}/>
            <Advice />
            <Gallery />
            </div>
            <Footer footerCollection={footer}/>
        </div>
    );
}

export default HomePage;