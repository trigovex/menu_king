import React from 'react';
import Menu from './pages/Menu';
import MenuPage from './MenuPage';
import OrdersPage from './OrdersPage';
import ProductsPage from './ProductCards';
import DashboardCounter from './Counters';
import QrCodesPage from './QrCodesPage';
import PageNotFound from './PageNotFound';
import SettingsPage from './SettingsPage';

function ContentPage({ page }) {
  // Conditionally render content based on the selected page
  if (page === 'DASHBOARD') {
    return <DashboardCounter/>;
  }

  if (page === 'MY MENU') {
    return <MenuPage/>;
  }

  if (page === 'ORDERS') {
    return <OrdersPage/>;
  }

  if (page === 'ITEMS') {
    return <ProductsPage/>;
  }

  if (page === 'QR CODES') {
    return <QrCodesPage/>;
  }

  
  if (page === 'SETTINGS') {
    return <SettingsPage/>;
  }
  // Default content if no match
  return <PageNotFound/>;
}

export default ContentPage;
