export const categories = [
    {
        id: 1,
        title:"Concert"
    },
    {
        id: 2,
        title:"Party"
    },
    {
        id: 3,
        title:"Conference"
    },
    {
        id: 4,
        title:"Others"
    }
]
// getting array of my category title only 
export const categoryTitle = categories.map(category => category.title)