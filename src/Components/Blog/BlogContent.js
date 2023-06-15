import Image from "next/image";

const BlogContent = () => {

    const blogData = [
        {
            key:1,
            text1:'The right time to hire a Digital Marketing agency for your brand is ',
            text2:'“right now”!',
            text3:'',
            desc:"In today's digital world, the success of your business hinges on your ability to effectively navigate the online landscape. To stand out from the competition and reach your target audience, it's crucial to leverage the expertise of a digital marketing agency. But when is the optimal time to make that move? The answer is simple: the right time is 'right now.' Here's why:",
            image:'/assets/portfolio/portfolio1.png'
        },

        {
            key:1,
            text1:'The right time to hire a Digital Marketing agency for your brand is ',
            text2:'“right now”!',
            text3:'',
            desc:"In today's digital world, the success of your business hinges on your ability to effectively navigate the online landscape. To stand out from the competition and reach your target audience, it's crucial to leverage the expertise of a digital marketing agency. But when is the optimal time to make that move? The answer is simple: the right time is 'right now.' Here's why:",
            image:'/assets/portfolio/portfolio2.png'
        },

        {
            key:1,
            text1:'The right time to hire a Digital Marketing agency for your brand is ',
            text2:'“right now”!',
            text3:'',
            desc:"In today's digital world, the success of your business hinges on your ability to effectively navigate the online landscape. To stand out from the competition and reach your target audience, it's crucial to leverage the expertise of a digital marketing agency. But when is the optimal time to make that move? The answer is simple: the right time is 'right now.' Here's why:",
            image:'/assets/portfolio/portfolio3.png'
        },
    ];

    return (
        <div className="">
            {blogData.map((item) => (
                <div className="">
                    <Image 
                        src={item.image} 
                        alt='' width={300} 
                        height={300}
                        className=""
                    />
                    <h3>
                        {item.text1}
                        <span>
                            {item.text2}
                        </span>
                        {item.text3}
                    </h3>
                    <p>{item.desc}</p>
                    <div>
                        <span>Read</span>
                        <span></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogContent;