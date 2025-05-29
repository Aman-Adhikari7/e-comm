import mensCollectionImage from "../../assets/mens-collection.webp"
import womensCollectionImage from "../../assets/womens-collection.webp"

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 md:px-0 ">
         <div className="container mx-auto flex flex-col md:flex-row gap-8">
            {/* Womens collection */}
            <div className="relative flex-1">
               <img src={womensCollectionImage}
                alt="women's collection"
                className=" w-full h-[700px] object-cover"
                />
            </div>
         </div>
    </section>
  );
};

export default GenderCollectionSection ;