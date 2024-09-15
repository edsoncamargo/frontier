import { Navigate } from 'react-router-dom';
import React from 'react';

interface ProtectRouteProps {
  element: React.ComponentType<Record<string, unknown>>;
  [key: string]: unknown;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({
  element: Component,
  ...rest
}) => {
  const isAuthenticated = true;
  const user = {
    type: 'admin',
  };

  return isAuthenticated && user.type === 'admin' ? (
    <Component {...rest} />
  ) : (
    <Navigate to='/admin/login' />
  );
};

export default ProtectRoute;
