import { useLoaderData } from "react-router-dom";
import NewsDetails from "./NewsDetails";
import Marquee from "react-fast-marquee";

const News = () => {

  const items = useLoaderData();

  return (
    <div>
      <div className='max-w-6xl mx-auto'>    <h1 className="text-3xl pt-10 text-[#BE006B] font-bold  text-center">NewsSphere: Where Every Pixel Tells a Story</h1>
      <Marquee>
        <p className="py-3 text-center text-xl ">
          This Section suggests a dynamic and immersive gaming experience, where every piece of news and content is a part of the larger gaming universe. It also conveys the idea that in the world of gaming, every pixel on the screen has its own exciting story to share.</p>
          </Marquee>
          
          </div>

      <div className='grid md:grid-cols-2 grid-cols-1  gap-4  py-10 max-w-6xl mx-auto'>
        {

          items.map(items => <NewsDetails key={items.id} items={items}> </NewsDetails>)



        }


      </div>
      <div className="max-w-6xl mx-10 md:mx-auto py-20">
        <h1 className="text-[#BE006B]  text-center pb-5 text-3xl font-bold">Frequently Asked Questions</h1>
        <div className="collapse collapse-plus bg-base-200 my-5">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
          FAQ 1: What types of game events can you help us manage?
          </div>
          <div className="collapse-content">
            <p>Answer: We specialize in a wide range of game events, including eSports tournaments, LAN parties, conventions, game release events, and gaming industry conferences. Whether it's a small gathering or a large-scale event, we've got the experience to make it a success.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 my-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          FAQ 2: How can I participate in your gaming tournaments or events?
          </div>
          <div className="collapse-content">
            <p>Answer: Participating in our gaming tournaments is easy. You can typically register for events on our website or follow the registration instructions provided for each event. Keep an eye on our event announcements and social media for updates on upcoming tournaments and registration details.

</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 my-5">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          FAQ 3: Do you offer live streaming services for game events?
          </div>
          <div className="collapse-content">
            <p>Answer: Yes, we offer professional live streaming services for your game events. Our team can handle everything from setting up the stream to providing engaging commentary, making it easy to share your event with a broader audience and create a memorable viewing experience.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 my-5">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
          FAQ 4: How can I become a sponsor or partner with your organization?
          </div>
          <div className="collapse-content">
            <p>Answer: We're always open to partnerships and sponsorships. To discuss collaboration opportunities, please reach out to our partnerships team through our contact page. We'll be happy to explore how we can work together to promote your brand and support our gaming community.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default News;