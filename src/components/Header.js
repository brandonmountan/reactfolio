import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../Header.css'

function Header() {
  return (
    <div class='p-4'>
      <h1 class="text-center">
        Brandon Mountan's Portfolio <Badge bg="secondary">Welcome!</Badge>
      </h1>
    </div>
  );
}

export default Header;