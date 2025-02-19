import React from "react";

function Engine_Text() {
  const Head = [
    {
      id: 1,
      heading: "Engine damage purchase today in Wuppertal - quick and uncomplicated car sale",
      paragraph: "If you  want to sell your old, possibly broken car without stress  , then private sales are not the right solution. A detailed advert, phone calls to a large number of potential buyers and test drives take up a lot of time and require a lot of improvisation and peace of mind. It is also difficult to sell a broken or old car with high mileage to a private individual. This can mean that you spend weeks looking for a buyer in vain. Motor damage purchase Wuppertal can help you here!",
    },
    {
      id: 2,
      heading: "We buy your car Wuppertal - Save yourself the hassle and stress",
      paragraph: "Everyone knows the problem when it comes to buying a new car: How do you get rid of the old one quickly and easily? Most vehicle owners are scared at the thought of selling their used car to a private individual. The effort involved is enormous and the risk of getting the wrong buyer is by no means small. Motorschaden Ankauf Wuppertal recommends being transparent when buying a used car with engine damage and not concealing any possible defects in the used car. Anyone who deliberately covers up defects can potentially get into trouble later. Therefore, being open in the sales discussion is the best strategy. Positive or special features of the vehicle should also be made transparent and emphasized. These could be, for example, certain special features such as high-quality leather upholstery or a particularly well-maintained condition including a complete service booklet.",
    },
    {
      id: 3,
      heading: "Engine damage purchase Wuppertal is your convenient alternative when selling your car!",
      paragraph: "Sell ​​your old car quickly and easily and at a fair price with the free offer from Motorschaden Ankauf Wuppertal.  It is not uncommon for sellers to be lured into an on-site assessment with high purchase prices, which then fall to rock bottom during the on-site assessment. With such providers, you can only be sure that you will sell your used car for far less than it is worth!",
    },
  ];
  const Two = [
    {
        id : 1,
        heading : "Start your sales boost with Engine Damage Purchase Wuppertal!",
        paragraph : "If you  want to sell your old, possibly broken car without stress  , then private sales are not the right solution. A detailed advert, phone calls to a large number of potential buyers and test drives take up a lot of time and require a lot of improvisation and peace of mind. It is also difficult to sell a broken or old car with high mileage to a private individual. This can mean that you spend weeks looking for a buyer in vain. Motor damage purchase Wuppertal can help you here!"
    }    
  ]
  const Three = [
    {
        id : 1,
        heading : "Engine damage purchase and pricing when selling",
        paragraph : "Of course, you associate memories with your vehicle. Cars that you have driven for many years also have sentimental value. However, this should not play a role in determining the purchase price. Anyone who wants to be paid for for their memories automatically sets the value too high and will have difficulty finding a buyer. Motorschaden Ankauf Wuppertal will be happy to help you determine the price."
    }    
  ]
  return (
    <div className="w-full bg-white py-10">
      <div className="w-[94%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-[#FAFAFA] p-5 rounded-xl">
            {Head.map((head) => (
              <div key={head.id} className="">
                <h1 className="py-5 font-Roboto font-bold text-[24px] md:text-[36px] lg:text-[32px] leading-[28.13px] md:leading-[42.19px] lg:leading-[37.5px] text-black">{head.heading}</h1>
                <p className="text-[#5B5B5B]">{head.paragraph}</p>
              </div>
            ))}
          </div>
          <div>
          <div className="bg-[#FAFAFA] mb-5 rounded-xl">
            {Two.map((two) => (
              <div key={two.id} className="p-5">
                <h1 className="font-Roboto font-bold text-[32px] leading-[37.5px] text-black">{two.heading}</h1>
                <p className="text-[#5B5B5B]">{two.paragraph}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FAFAFA] rounded-xl">
            {Three.map((three) => (
              <div key={three.id} className="p-5">
                <h1 className="py-5 font-Roboto font-bold text-[32px] leading-[37.5px] text-black">{three.heading}</h1>
                <p className="text-[#5B5B5B]">{three.paragraph}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engine_Text;
