interface StatObj{
    statsNum: number,
    context:string,
}

export const Stats:StatObj[] = [
    {
        statsNum:2,
        context: "Years of Experience"
    },
    {
        statsNum:30,
        context: "Completed Projects"
    },
    {
        statsNum:20,
        context: "Happy Costumers"
    },
    {
        statsNum:5,
        context: "Certificates"
    },

]

interface InfoObj {
    label:string,
    text:string
}

export const Infos:InfoObj[] = [
    {
        label:"First Name",
        text: "Amr",
    },
    {
        label:"Address",
        text: "İstanbul/ Türkiye",
    },
    {
        label:"Last Name",
        text: "Walidi",
    },
    {
        label:"Phone",
        text: "+90 536 992 29 50",
    },
    {
        label:"Age",
        text: "21 years",
    },
    {
        label:"Email",
        text: "amr.nawaf128@gmail.com",
    },
    {
        label:"Nationality",
        text: "Yemeni",
    },
    {
        label:"Languages",
        text: " English, Türkçe, العربية ",
    }
]

interface skillObj{
    percentage: number,
    name: string,
}

export const skills: skillObj[] = [
    {
        name:"HTML",
        percentage: 75
    },
    {
        name:"CSS",
        percentage: 65
    },{
        name:"JavaScript",
        percentage: 50
    },{
        name:"Java",
        percentage: 70
    },{
        name:"C",
        percentage: 85
    },{
        name:"Python",
        percentage: 30
    },
]

export interface ProjectsObj {
    title: string;
    summary: string;
    type: string;
    languages: string;
    URL: string;
    image: string
}

export const ProjectsDetails: ProjectsObj[] =[
    {
        title: "Yemen Friendship and Cooperation Association Web Design",
        summary:"I worked in managing and designing the Yemen Friendship and Cooperation Association website using WordPress as platform. The website is for displaying the association achievements and projects to the visitor.",
        type: "Website",
        languages: "HTML, CSS, PHP",
        URL: "https://yemenddd.org/",
        image: "Images/yemenddd.png"
    }
,
    {
        title: "Calculator",
        summary:"Real life calculator project that calculates basic arithmetic expressions using the essentials of how calculator works using the prefix method.",
        type: "Website",
        languages: "HTML, CSS, JavaScript",
        URL: "http://192.168.1.21/Calculator/",
        image: "Images/calculator.png"
    }
    ,
    {
        title: "SmartTel",
        summary:"A mock e-commerce project that sales smartphones and have a real login and sign in features that save the data in a database and can retrieve it.",
        type: "Website",
        languages: "HTML, CSS, PHP, MySQL",
        URL: "http://192.168.1.21/smarttel",
        image: "Images/SmartTel.png"
    }
]
