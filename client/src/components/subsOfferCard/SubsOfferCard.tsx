import React from 'react';

function SubscriptionCard (props: any,)  {
  return (
    <div style={{ 
      background: `linear-gradient(to top, ${props.colorStart}, white)`,
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)'
    }}>
      <h2 className="text-3xl font-bold text-center py-4">{props.substitle}</h2>
      <div className="text-4xl font-bold text-center text-gray-800">{props.price}</div>
      <ul className="text-lg text-gray-700 px-8 py-4">
        <li className="py-1"><span className="text-green-500 mr-2">&#x2713;</span>Unlimited access to all content for {props.substitle} members</li>
        <li className="py-1"><span className="text-green-500 mr-2">&#x2713;</span>Exclusive members-only Lab tools</li>
        <li className="py-1"><span className="text-green-500 mr-2">&#x2713;</span>New content added weekly</li>
      </ul>
      <div className="text-center mb-6">
        <button className="inline-block py-4 px-8 text-lg font-bold rounded-lg text-white bg-[#034B68] hover:bg-[#208bb6]">Subscribe Now</button>
      </div>    </div>
  );
};

export default SubscriptionCard;



