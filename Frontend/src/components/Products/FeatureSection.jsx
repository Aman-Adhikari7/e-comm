import {HiOutlineCreditCard, HiShoppingBag , HiRefresh} from "react-icons/hi"

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
                <HiShoppingBag className="text-xl"/>
            </div>
            <h4 className="tracking-tighter mb-2">
              FREE INTERNATIONAL SHOPPING
            </h4>
            <p className="text-gray-600 text-sm tracking-tighter">
              On all orders abover $100.0
            </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
                <HiRefresh className="text-xl"/>
            </div>
            <h4 className="tracking-tighter mb-2">
               45 DAYS RETURN
            </h4>
            <p className="text-gray-600 text-sm tracking-tighter">
              Money back guarentee
            </p>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
                <HiOutlineCreditCard className="text-xl"/>
            </div>
            <h4 className="tracking-tighter mb-2">
              SECURE CHECKOUT
            </h4>
            <p className="text-gray-600 text-sm tracking-tighter">
              100% secured checkout process
            </p>
        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;