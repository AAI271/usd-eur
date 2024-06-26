import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsd, setEur } from '../store';
import './currencyConverter.css';


const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { usd, eur } = useSelector((state) => state.currency);

  const handleUsdChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      dispatch(setUsd(value));
    }
  };

  const handleEurChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      dispatch(setEur(value));
    }
  };

  return (
    <div className="currency-converter">
      <div className="input-group">
        <label htmlFor="usd">USD</label>
        <input
          type="text"
          id="usd"
          value={usd}
          onChange={handleUsdChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="eur">EUR</label>
        <input
          type="text"
          id="eur"
          value={eur}
          onChange={handleEurChange}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
