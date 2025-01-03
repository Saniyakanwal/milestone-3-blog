'use client'
import sportsData from '@/app/Data/sport.json';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import CommentForm from '@/components/comment';
import CommentsList from '@/components/commentlist';
import { useState } from 'react';
import Image from 'next/image';

const SportDetailsPage = ({ params }: { params: { sport: string } }) => {
  const { sport } = params;

  // for comment section
  const [comments, setComments] = useState<string[]>([]); 
  

  // for find sport(dynamic routing)
  const foundSport = sportsData.find((item) => item.sport === sport);
  

  if (!foundSport) {
    return <div>404 - Sport Not Found</div>;
  }

  const handleNewComment = (comment: string) => {
    setComments((prevComments) => [...prevComments, comment]); 
  };


  return (
    <div>
          <Navbar/>
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mt-4">{foundSport.name}</h1>
      <Image
        src={foundSport.image}
        alt={foundSport.name}
        className="rounded-lg my-4 md:ml-96 mt-8 object-cover "
        height={200} width={500}
      />
      <p className='md:ml-14 ml-2 text-2xl leading-10 '> <br />{foundSport.longdescription}</p>
      <div>

        {/* sections */}
        {foundSport.sections?.map((section,index) =>(
          <div key={index}>
           <h2 className = "font-bold text-2xl mt-6 md:ml-14 underline decoration-double">{section.heading}</h2>
           <p className='text-2xl mt-1 md:ml-16 leading-9'>{section.content}</p>
          </div>
        ))}
      </div>
     <div className='grid grid-cols-1 md:grid-cols-3  mt-14 md:ml-56'>
     <Image
      src={foundSport.image2}
      alt='image2'
      height={200} width={500}/>
      <Image src={foundSport.image3} alt="image3"
       width={500} height={200}
       className=' mt-4 md:-mt-1 md:ml-32'/>
             <div className='md:-ml-[980px] md:mt-60 leading-10'>
              {/* section 2 */}
        {foundSport.sections2?.map((section2,index) =>(
          <div key={index}>
           <h2 className = "font-bold text-2xl mt-6 md:ml-20 underline decoration-double">{section2.heading}</h2>
           <p className='text-2xl leading-9 mt-1 md:ml-24'>{section2.content}</p>
           
          </div>
        ))}
      </div>
       <Image src={foundSport.image4} alt="image4"
       width={500} height={200}
       className='md:ml-28 mt-5'/>
         <Image src={foundSport.image5} alt="image5"
       width={500} height={200}
       className='md:ml-32 mt-5'/>
        <div className='md:-ml-[980px] md:mt-60 '>
          {/* sections 3 */}
        {foundSport.sections3?.map((section3,index) =>(
          <div key={index}>
           <h2 className = "font-bold text-2xl mt-6 md:ml-20 underline decoration-double">{section3.heading}</h2>
           <p className='text-2xl mt-3 leading-9 md:ml-24'>{section3.content}</p>
          </div>
        ))}
      </div>
     </div>
     {/* comment */}
     <CommentForm onSubmit={handleNewComment} />
        <CommentsList comments={comments} />
    </div>
    <br /> <br />
    <Footer/>
    </div>
  );
};

export default SportDetailsPage;
