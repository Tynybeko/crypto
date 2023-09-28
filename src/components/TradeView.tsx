"use client"
import '@/styles/tradeView.scss'
import React, { useEffect, useRef, memo } from 'react';
import Link from 'next/link';

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BINANCE:BTCUSDT|1M"
            ],
            [
                "BINANCE:BNBUSDT|1M"
              ],
              [
                "BINANCE:ETHUSDT|1M"
              ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "ru",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;

    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <Link href="https://ru.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Следите за рынками на TradingView</span></Link>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
