// App.js or your specific route/component file
import React from 'react';
import StripeProvider from './StripeProvider';
import CheckoutForm from '../pages/CheckoutForm';

function App() {
  return (
    <StripeProvider>
      <div className="App">
        <h2>Event Checkout</h2>
        <CheckoutForm />
      </div>
    </StripeProvider>
  );
}

export default App;