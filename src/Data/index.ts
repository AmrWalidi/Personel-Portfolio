interface StatObj{
    num: number,
    context:string,
}

export const Stats:StatObj[] = [
    {
        num:2,
        context: "Years of Experience"
    },
    {
        num:30,
        context: "Completed Projects"
    },
    {
        num:20,
        context: "Happy Costumers"
    },
    {
        num:5,
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
        percentage: 60
    },
]