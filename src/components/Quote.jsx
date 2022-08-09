import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [quotes, setQuote] = useState('');

  /* Generate random math quotes */

  const updateQuote = async () => {
    const res = await fetch('https://random-math-quote-api.herokuapp.com/');

    res
      .json()
      .then((res) => {
        setQuote({
          quotes: res.quote,
        });
      })
      .catch();
  };

  /* Convert from object to a string */

  const quote = [JSON.stringify(quotes)].join('').split('');
  quote.pop();
  quote.shift();
  quote.splice(0, 9);

  return (
    <div className='quoteContainer'>
      <div className='quotes'>
        {quotes === '' && (
          <p>&quot;Math is the source code of reality.&quot;</p>
        )}
      </div>
      <p className='quotes'>{quote}</p>
      <button type='button' onClick={updateQuote} className='generateQuotes'>
        Generate quote
      </button>
    </div>
  );
};

export default Quote;
