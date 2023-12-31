// Header array 
import { HOME, ABOUT, PRICING, PRODUCTLISTPAGES, PRODUCTPAGES, CART } from "../component/routes"
export const bottomHeader = [
    {href: HOME, tabs: "Home"},
    {href: ABOUT, tabs: "About"},
    {href: PRICING, tabs: "Blog"},
    {href: PRODUCTLISTPAGES, tabs: "Contact"},
    {href: PRODUCTPAGES, tabs: "Pages"},    
]

// footer Array
export const footerLinks = [
    {
      footerHeader: "Company Info",
      links: [
        { childKey: 1, link1: "About Us", href: "#" },
        { childKey: 2, link1: "Carrier", href: "#" },
        { childKey: 3, link1: "We are hiring", href: "#" },
        { childKey: 4, link1: "Blog", href: "#" }
      ]
    },
    {
      footerHeader: "Legal",
      links: [
        { childKey: 1, link1: "About Us", href: "#" },
        { childKey: 2, link1: "Carrier", href: "#" },
        { childKey: 3, link1: "We are hiring", href: "#" },
        { childKey: 4, link1: "Blog", href: "#" }
      ]
    },
    {
      footerHeader: "Features",
      links: [
        { childKey: 1, link1: "Business Marketing", href: "#"},
        { childKey: 2, link1: "User Analytic", href: "#"},
        { childKey: 3, link1: "Live Chat", href: "#"},
        { childKey: 4, link1: "Unlimited Support", href: "#"}
      ]
    },
    {
      footerHeader: "Resources",
      links: [
        { childKey: 1, link1: "IOS & Android", href: "#" },
        { childKey: 2, link1: "Watch a Demo", href: "#" },
        { childKey: 3, link1: "Customers", href: "#" },
        { childKey: 4, link1: "API", href: "#" }
      ]
    }
]

// bestService Array
import {bookReader, carbonBook, arrowGrowth} from "./image"
export const bestService = [
    {
        content: "Get your best looking smile now!",
        header: "Easy Wins",
        img: bookReader,
    },
    {
        content: "Defalcate is most focused in helping you discover your most beautiful smile",
        header: "Concrete",
        img: carbonBook,
    },
    {
        content: "Overcame any hurdle or any other problem.",
        header: "Hack Growth",
        img: arrowGrowth,
    }
]

// BestSelling Array
import {BestSellingImg1, BestSellingImg2, BestSellingImg3, BestSellingImg4, BestSellingImg5, BestSellingImg6, BestSellingImg7, BestSellingImg8,} from "./image"
export const bestSellingArray = [
    {
        id: "img1",
        image: BestSellingImg1,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img2",
        image: BestSellingImg2,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img3",
        image: BestSellingImg3,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img4",
        image: BestSellingImg4,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img5",
        image: BestSellingImg5,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img6",
        image: BestSellingImg1,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img7",
        image: BestSellingImg6,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img8",
        image: BestSellingImg7,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img9",
        image: BestSellingImg8,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
    {
        id: "img10",
        image: BestSellingImg3,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
    },
]

// product card Array
import {img1, img2} from "./image"
export const products = [
    {
        department: "English Department",
        title: "Graphic Design",
        desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        sales: "15 Sales",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        time: "22h...",
        lessons: "64 Lessons",
        progress: "Progress",
        date: "22 April 2021",
        link: "",
        img : img1
    },
    {
        department: "English Department",
        title: "Graphic Design",
        desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        sales: "15 Sales",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        time: "22h...",
        lessons: "64 Lessons",
        progress: "Progress",
        date: "22 April 2021",
        link: "",
        img : img2
    }
]

// SHop Card Array
import {breadCrumImg1,breadCrumImg2,breadCrumImg3,breadCrumImg4,breadCrumImg5} from "./image"
export const shopCard = [
    {
        image: breadCrumImg1,
        text: "5 Items",
        header: "CLOTHS",
    },
    {
        image: breadCrumImg2,
        text: "5 Items",
        header: "CLOTHS"
    },
    {
        image: breadCrumImg3,
        text: "5 Items",
        header: "CLOTHS"
    },
    {
        image: breadCrumImg4,
        text: "5 Items",
        header: "CLOTHS"
    },
    {
        image: breadCrumImg5,
        text: "5 Items",
        header: "CLOTHS"
    }
]

// Grid shopCard
import {gridImg1, gridImg2, gridImg3, gridImg4, gridImg5, gridImg6, gridImg7, gridImg8, gridImg9, gridImg10, gridImg11, gridImg12} from "./image"
export const gridShopCard = [
    {
        id: "img1",
        image: gridImg1,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img2",
        image: gridImg2,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img3",
        image: gridImg3,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img4",
        image: gridImg4,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img5",
        image: gridImg5,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img6",
        image: gridImg6,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img7",
        image: gridImg7,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img8",
        image: gridImg8,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img9",
        image: gridImg9,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img10",
        image: gridImg10,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img11",
        image: gridImg11,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    {
        id: "img12",
        image: gridImg12,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
        quantity: 1,
        showEclipse: true,
    },
    
]

// UseEffect card content 
export const UseEffectCards = {

    cardTitle: "Floating Phone",
    price: "$1,139.33",
    text: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    starText: "10 Reviews",
}

// quick Fox content 
export const QuickFoxArray = {
    header: "the quick fox jumps over",
    quickText:[
        {
            id: 1,
            text: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            id: 2,
            text: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            id: 3,
            text: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
    ],
    quickList1: [
        {
            id: 1,
            list: "the quick fox jumps over the lazy dog"
        },
        {
            id: 2,
            list: "the quick fox jumps over the lazy dog"
        },
        {
            id: 3,
            list: "the quick fox jumps over the lazy dog"
        },
        {
            id: 4,
            list: "the quick fox jumps over the lazy dog"
        },
    ],

}

// Best Product array
import {productImg1, productImg2, productImg3, productImg4, productImg5, productImg6, productImg7, productImg8} from "./image"
export const bestProductArray = [
    {
        id: "img1",
        image: productImg1,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img2",
        image: productImg2,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img3",
        image: productImg3,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img4",
        image: productImg4,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img5",
        image: productImg5,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img6",
        image: productImg6,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img7",
        image: productImg7,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    {
        id: "img8",
        image: productImg8,
        header: "Graphic Design",
        oldPrice: "$16.48",
        newPrice: "$6.48",
        department: "English Department",
    },
    
];


// Metrix Array 
export const metrixArray = [
    {amount: "15K" , title: "Happy Customers"},
    {amount: "150K" , title: "Monthly Views"},
    {amount: "15" , title: "Countries Worldwide"},
    {amount: "100+" , title: "Top Partners"},
]

// Problem trying content 
export const problemTry = {
  probTryHeader: "Problem Trying",
  problemTryText1: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.", 
  problemTryText2: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics " 
}

// Team Array
import { user1, user2, user3 } from "./image"
export const teamArray = {
    teamHeader : "Meet Our Team",
    teamText: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
    teamUser: [
      {
        image: user1,
        userName : "Username",
        profession: "Profession"
      },
      {
        image: user2,
        userName : "Username",
        profession: "Profession"
      },
      {
        image: user3,
        userName : "Username",
        profession: "Profession"
      }        
    ]
}

export const pricingContent = {
    priceHeader: "Pricing",
    priceText: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
}

export const companyContent ={
  companyHeader: "Big Companies Are Here",
  companyText: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
}

import {weird} from "./image"
export const workContent = {
  workH5: "WORK WITH US",
  workH2: "Now Let’s grow Yours",
  workText: "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th ",
  workBtn: "Button",
  workImage: weird
}

// array from priceCard section 
export const priceCardArray = [
    {
        cardHeader: "FREE",
        Cardtext: "Organize across all apps by hand",
        CardAmount: 0,
        cardList:[
        {
            list1: "Unlimited product updates",
            isCompleted: true,
        },
        {
            list1: "Unlimited product updates",
            isCompleted: true,
        },
        {
            list1: "Unlimited product updates",
            isCompleted: true,
        },
        {
            list1: "1GB  Cloud storage",
            isCompleted: false,
        },
        {
            list1: "Email and community support",
            isCompleted: false,
        }
        ],
        cardBtn: "Try for free"
    },
    {
        cardHeader: "STANDARD",
        Cardtext: "Organize across all apps by hand",
        CardAmount: 9.99,
        cardList:[
            {
                list1: "Unlimited product updates",
                isCompleted: true,
            },
            {
                list1: "Unlimited product updates",
                isCompleted: true,
            },
            {
                list1: "Unlimited product updates",
                isCompleted: true,
            },
            {
                list1: "1GB  Cloud storage",
                isCompleted: false,
            },
            {
                list1: "Email and community support",
                isCompleted: false,
            }
        ],
        cardBtn: "Try for free"
    },
    {
        cardHeader: "PREMIUM",
        Cardtext: "Organize across all apps by hand",
        CardAmount: 19.99,
        cardList:[
            {
                list1: "Unlimited product updates",
                isCompleted: true,
            },
            {
                list1: "Unlimited product updates",
                isCompleted: true,
            },
            {
                list1: "Unlimited product updates",
                isCompleted: true,
            },
            {
                list1: "1GB  Cloud storage",
                isCompleted: false,
            },
            {
                list1: "Email and community support",
                isCompleted: false,
            }
        ],
        cardBtn: "Try for free"
    },


]

// Pricing FAQS section 
export const pricingFaqsArray = {
    pricingFaqsHeader: "Pricing FAQs",
    pricingFaqsText: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    faqsList:[
        {
            faqsListHeader: "Work better together",
            faqsListText: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            faqsListHeader: "OpenType features and Variable fonts",
            faqsListText: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            faqsListHeader: "Start working faster today",
            faqsListText: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            faqsListHeader: "Work at the speed of thought.",
            faqsListText: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            faqsListHeader: "The Fastest way to organize",
            faqsListText: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            faqsListHeader: "The Fastest way to navigate",
            faqsListText: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
    ]
}