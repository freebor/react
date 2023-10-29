// Header array 
export const bottomHeader = [
    {href: "#", tabs: "Home"},
    {href: "#", tabs: "About"},
    {href: "#", tabs: "Blog"},
    {href: "#", tabs: "Contact"},
    {href: "#", tabs: "Pages"}
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
        { childKey: 1, link1: "Business Marketing", href: "#" },
        { childKey: 2, link1: "User Analytic", href: "#" },
        { childKey: 3, link1: "Live Chat", href: "#" },
        { childKey: 4, link1: "Unlimited Support", href: "#" }
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
export const teamArray = 
  {
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