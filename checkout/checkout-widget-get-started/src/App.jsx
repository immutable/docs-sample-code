import { useEffect } from 'react';
import { checkout } from '@imtbl/sdk';

// create Checkout SDK
const checkoutSDK = new checkout.Checkout();

export function App() {
  // Initialise widgets, create connect widget and mount
  useEffect(() => {
    (async () => {
      const widgets = await checkoutSDK.widgets({
        config: { theme: checkout.WidgetTheme.DARK },
      });
      const connect = widgets.create(checkout.WidgetType.CONNECT);
      connect.mount('connect');
    })();
  }, []);

  return <div id="connect" />;
}

export default App;
